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
}
