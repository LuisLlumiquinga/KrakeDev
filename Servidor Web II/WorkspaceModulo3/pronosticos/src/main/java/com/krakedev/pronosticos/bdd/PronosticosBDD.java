package com.krakedev.pronosticos.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.pronosticos.entidades.Pronosticos;
import com.krakedev.pronosticos.excepciones.KrakeDevException;
import com.krakedev.pronosticos.utils.ConexionBDD;

public class PronosticosBDD {
	public ArrayList<Pronosticos> buscar(String subcadena) throws KrakeDevException{
		ArrayList<Pronosticos> pronosticos = new ArrayList<Pronosticos>();
		
		Connection con=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		Pronosticos pronostico=null;
		
		try {
			con=ConexionBDD.obtenerConexion();
			ps=con.prepareStatement("select * from pronostico where codigo_u=?");
			
			ps.setString(1, subcadena);
			rs=ps.executeQuery();
			
			while(rs.next()) {
				int codigoPronostico=rs.getInt("codigo_pronostico");
				String codigoUsuario=rs.getString("codigo_u");
				String codigoPartido=rs.getString("codigo_p");
				int codigoEquipo1=rs.getInt("codigo_equipo1");
				int	marcadorEquipo1=rs.getInt("marcador_equipo1");
				int codigoEquipo2=rs.getInt("codigo_equipo2");
				int marcadorEquipo2=rs.getInt("marcador_equipo2");
				
				pronostico=new Pronosticos(codigoPronostico, codigoUsuario, codigoPartido, codigoEquipo1, marcadorEquipo1, codigoEquipo2, marcadorEquipo2);
				
				pronosticos.add(pronostico);
			}
			
		} catch (KrakeDevException e) {			
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar. Detalle: "+e.getMessage());
		}
		
		return pronosticos;
	}
	
	public void crearPronostico(Pronosticos pronostico) throws KrakeDevException {
		Connection con = null;

		try {
			con = ConexionBDD.obtenerConexion();
			PreparedStatement ps = con.prepareStatement("insert into pronostico(codigo_u, codigo_p, codigo_equipo1, marcador_equipo1, codigo_equipo2, marcador_equipo2) "
					+ "values(?, ?, ?, ?, ?, ?)");

			ps.setString(1, pronostico.getCodigo_u());
			ps.setString(2, pronostico.getCodigo_p());
			ps.setInt(3, pronostico.getCodigo_equipo1());
			ps.setInt(4, pronostico.getMarcador_equipo1());
			ps.setInt(5, pronostico.getCodigo_equipo2());
			ps.setInt(6, pronostico.getMarcador_equipo2());
			
			ps.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al crear un nuevo Pronostico. Detalle: "+e.getMessage());
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
