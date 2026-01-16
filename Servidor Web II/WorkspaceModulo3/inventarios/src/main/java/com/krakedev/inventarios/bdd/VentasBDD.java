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

import com.krakedev.inventarios.entidades.DetalleVentas;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class VentasBDD {
	public void registrar(Producto producto) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps=null;
		PreparedStatement psDet=null;
		PreparedStatement psHis=null;
		ResultSet rsClave=null;
		int codigoCabecera=0;
		
		BigDecimal precioConIVA = BigDecimal.ZERO;
		BigDecimal totalSinIVA = BigDecimal.ZERO;
		BigDecimal totalConIVA=BigDecimal.ZERO;
		BigDecimal totalIVA=BigDecimal.ZERO;
		
		Date fechaActual=new Date();
		Timestamp fechaHoraActual=new Timestamp(fechaActual.getTime());

		try {
			con = ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("insert into cabecera_ventas(fecha, total_sin_IVA, IVA, total) "
					+ "values(?,?,?,?);",Statement.RETURN_GENERATED_KEYS);

			ps.setTimestamp(1, fechaHoraActual);
			ps.setInt(2, 0);
			ps.setInt(3, 0);
			ps.setInt(4, 0);
			
			ps.executeUpdate();
			
			rsClave=ps.getGeneratedKeys();
			
			if(rsClave.next()) {
				codigoCabecera=rsClave.getInt(1);
			}
			
			ArrayList<DetalleVentas> detallesVentas=producto.getDetalles();
			DetalleVentas det;
			
			for(int i=0; i<detallesVentas.size(); i++) {
				det = detallesVentas.get(i);
				psDet=con.prepareStatement("insert into detalle_ventas(cabecera_ventas, producto, cantidad, precio_venta, subtotal, subtotal_IVA) "
						+ "values(?,?,?,?,?,?);");
				
				psDet.setInt(1, codigoCabecera);
				psDet.setInt(2, det.getProducto().getCodigo());
				psDet.setInt(3, det.getCantidad());
				
				BigDecimal pv = det.getProducto().getPrecioVenta();
				
				psDet.setBigDecimal(4, pv);
				
				//BigDecimal pv=det.getPrecioVenta();
				BigDecimal cantidad=new BigDecimal(det.getCantidad());
				BigDecimal subTotal=pv.multiply(cantidad);
				
				psDet.setBigDecimal(5, subTotal);
				
				totalSinIVA=totalSinIVA.add(subTotal);
				
				BigDecimal subTotalConIVA;
				
				if (det.getProducto().isTieneIva()){
					subTotalConIVA=subTotal.multiply(new BigDecimal("1.12"));					
				}else {
					subTotalConIVA = subTotal;
				}
				
				psDet.setBigDecimal(6, subTotalConIVA);
				
				totalConIVA = totalConIVA.add(subTotalConIVA);
				
				psDet.executeUpdate();
				
				psHis=con.prepareStatement("insert into historial_stock(fecha, referencia, producto, cantidad) "
						+ "values(?, ?, ?, ?);");
				
				psHis.setTimestamp(1, fechaHoraActual);
				psHis.setString(2, "Venta"+codigoCabecera);
				psHis.setInt(3, det.getProducto().getCodigo());
				psHis.setInt(4, det.getCantidad()*-1);
				
				psHis.executeUpdate();
			}
			
			totalIVA = totalConIVA.subtract(totalSinIVA);
			
			ps=con.prepareStatement("update cabecera_ventas set total_sin_IVA=?, IVA=?, total=?"
					+ " where codigo_cv=?");

			ps.setBigDecimal(1, totalSinIVA);
			ps.setBigDecimal(2, totalIVA);
			ps.setBigDecimal(3, totalConIVA);
			ps.setInt(4, codigoCabecera);

			ps.executeUpdate();
			
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
}
