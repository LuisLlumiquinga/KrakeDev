package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.TipoDocumentos;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class TipoDocumentosBDD {
	public ArrayList<TipoDocumentos> buscarDocumentos() throws KrakeDevException{
		ArrayList<TipoDocumentos> tipoDocumentos = new ArrayList<TipoDocumentos>();
		
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		TipoDocumentos documento=null;
		
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("select * from tipo_documentos");
						
			rs=ps.executeQuery();
			
			while(rs.next()) {
				String codigo=rs.getString("codigo");
				String descripcion=rs.getString("descripcion");
								
				documento=new TipoDocumentos(codigo, descripcion);
				
				tipoDocumentos.add(documento);
			}
			
		} catch (KrakeDevException e) {			
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle: "+e.getMessage());
		}
		
		return tipoDocumentos;
	}
	
	public void crearTD(TipoDocumentos documento) throws KrakeDevException {
		Connection con = null;

		try {
			con = ConexionBDD.obtenerConexion();
			PreparedStatement ps = con.prepareStatement("insert into tipo_documentos(codigo, descripcion) "
					+ "values(?, ?)");

			ps.setString(1, documento.getCodigo());
			ps.setString(2, documento.getDescripcion());
			
			ps.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al crear un nuevo tipo de documento. Detalle: "+e.getMessage());
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
