package com.krakedev.pronosticos.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.krakedev.pronosticos.entidades.Equipos;
import com.krakedev.pronosticos.excepciones.KrakeDevException;
import com.krakedev.pronosticos.utils.ConexionBDD;

public class EquiposBDD {
	public void crearEquipo(Equipos equipo) throws KrakeDevException {
		Connection con = null;

		try {
			con = ConexionBDD.obtenerConexion();
			PreparedStatement ps = con.prepareStatement("insert into equipos(codigo_internacional, nombre) "
					+ "values(?, ?)");

			ps.setInt(1, equipo.getCodigo_internacional());
			ps.setString(2, equipo.getNombre());
			
			ps.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al crear un nuevo Equipo. Detalle: "+e.getMessage());
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
