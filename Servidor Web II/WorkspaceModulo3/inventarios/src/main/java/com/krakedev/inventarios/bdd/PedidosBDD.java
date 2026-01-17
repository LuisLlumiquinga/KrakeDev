package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import com.krakedev.inventarios.entidades.DetallePedido;
import com.krakedev.inventarios.entidades.DetallesPedidoProveedor;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class PedidosBDD {
	public void insertar(Pedido pedido) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps=null;
		PreparedStatement psDet=null;
		ResultSet rsClave=null;
		int codigoCabecera=0;
		
		Date fechaActual=new Date();
		java.sql.Date fechaSQL=new java.sql.Date(fechaActual.getTime());

		try {
			con = ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("insert into cabecera_pedido(proveedor, fecha, estado) "
					+ "values(?,?,?);",Statement.RETURN_GENERATED_KEYS);

			ps.setString(1, pedido.getProveedor().getIdentificador());
			ps.setDate(2, fechaSQL);
			ps.setString(3, "S");
			
			ps.executeUpdate();
			
			rsClave=ps.getGeneratedKeys();
			
			if(rsClave.next()) {
				codigoCabecera=rsClave.getInt(1);
			}
			
			ArrayList<DetallePedido> detallesPedido=pedido.getDetalles();
			DetallePedido det;
			
			for(int i=0; i<detallesPedido.size(); i++) {
				det = detallesPedido.get(i);
				psDet=con.prepareStatement("insert into detalle_pedido(cabecera_pedido, producto, cantidad_solicitada,  cantidad_recibida, subtotal) "
						+ "values(?,?,?,?,?);");
				
				psDet.setInt(1, codigoCabecera);
				psDet.setInt(2, det.getProducto().getCodigo());
				psDet.setInt(3, det.getCantidadSolicitada());
				psDet.setInt(4, 0);
				
				BigDecimal pv=det.getProducto().getPrecioVenta();
				BigDecimal cantidad=new BigDecimal(det.getCantidadSolicitada());
				BigDecimal subTotal=pv.multiply(cantidad);
				
				psDet.setBigDecimal(5, subTotal);
				
				psDet.executeUpdate();
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al crear un nuevo pedido. Detalle: "+e.getMessage());
		} catch (KrakeDevException e) {
			throw e;
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	
	public void recibir(Pedido pedido) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps=null;
		PreparedStatement psDet=null;
		PreparedStatement psHis=null;
		
		Date fechaActual=new Date();
		Timestamp fechaHoraActual=new Timestamp(fechaActual.getTime());

		try {
			con = ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("update cabecera_pedido set estado='R' where numero=?");
			ps.setInt(1, pedido.getCodigo());		
			ps.executeUpdate();
			
			ArrayList<DetallePedido> detallesPedido=pedido.getDetalles();
			DetallePedido det;
			
			for(int i=0; i<detallesPedido.size(); i++) {
				det = detallesPedido.get(i);
				psDet=con.prepareStatement("update detalle_pedido set cantidad_recibida=?, subtotal=? "
						+ "where codigo=?");
				
				psDet.setInt(1, det.getCantidadRecibida());
				
				BigDecimal pv=det.getProducto().getPrecioVenta();
				BigDecimal cantidad=new BigDecimal(det.getCantidadRecibida());
				BigDecimal subTotal=pv.multiply(cantidad);
				
				psDet.setBigDecimal(2, subTotal);			
				psDet.setInt(3, det.getCodigo());
				
				psDet.executeUpdate();
				
				psHis=con.prepareStatement("insert into historial_stock(fecha, referencia, producto, cantidad) "
						+ "values(?, ?, ?, ?);");
				
				psHis.setTimestamp(1, fechaHoraActual);
				psHis.setString(2, "Pedido"+pedido.getCodigo());
				psHis.setInt(3, det.getProducto().getCodigo());
				psHis.setInt(4, det.getCantidadRecibida());
				
				psHis.executeUpdate();
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al actualizar el pedido. Detalle: "+e.getMessage());
		} catch (KrakeDevException e) {
			throw e;
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	public ArrayList<DetallesPedidoProveedor> buscar(String subcadena) throws KrakeDevException{
		ArrayList<DetallesPedidoProveedor> detallesPedido = new ArrayList<DetallesPedidoProveedor>();
		
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		DetallesPedidoProveedor detalle=null;
		
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("select prov.identificador as identificador, prov.nombre as nombre, cp.fecha as fecha, ep.descripcion as estado, prod.nombre as producto, dp.cantidad_solicitada, dp.cantidad_recibida, cast(dp.subtotal as	decimal(6,2)) "
					+ "from proveedores prov, cabecera_pedido cp, detalle_pedido dp, productos prod, estados_pedidos ep "
					+ "where identificador=proveedor "
					+ "and numero=cabecera_pedido "
					+ "and codigo_prod=producto "
					+ "and codigo_ep=estado "
					+ "and identificador=?");
			
			ps.setString(1, subcadena);
			rs=ps.executeQuery();
			
			while(rs.next()) {
				String identificador=rs.getString("identificador");
				String nombre=rs.getString("nombre");
				Timestamp fecha=rs.getTimestamp("fecha");
				String estado=rs.getString("estado");
				String producto=rs.getString("producto");
				int cantidadSolicitada=rs.getInt("cantidad_solicitada");
				int cantidadRecibida=rs.getInt("cantidad_recibida");
				BigDecimal subTotal=rs.getBigDecimal("subtotal");

				
				detalle=new DetallesPedidoProveedor();
				
				detalle.setIdentificador(identificador);
				detalle.setNombre(nombre);
				detalle.setFecha(fecha);
				detalle.setEstado(estado);
				detalle.setProducto(producto);
				detalle.setCantidadSolicitada(cantidadSolicitada);
				detalle.setCantidadRecibida(cantidadRecibida);
				detalle.setSubTotal(subTotal);
				
				detallesPedido.add(detalle);
			}
			
		} catch (KrakeDevException e) {			
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle: "+e.getMessage());
		}
		
		return detallesPedido;
	}
}
