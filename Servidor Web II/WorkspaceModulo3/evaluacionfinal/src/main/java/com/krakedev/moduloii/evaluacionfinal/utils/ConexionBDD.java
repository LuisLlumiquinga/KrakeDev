package com.krakedev.moduloii.evaluacionfinal.utils;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class ConexionBDD {
	public static Connection conectar() throws Exception{
		Context ctx = null;
		DataSource ds = null;
		Connection con = null;
		
		try {
			ctx = new InitialContext();
			//JNDI
			ds = (DataSource) ctx.lookup("java:/comp/env/jdbc/ConexionPG");
			con = ds.getConnection();
		} catch (NamingException | SQLException e) {
			e.printStackTrace();
			throw new Exception("Error de conexion");
		}
		
		return con;
	}
}
