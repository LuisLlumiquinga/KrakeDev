package com.krakedev.moduloii.evaluacionfinal.servicios;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

import javax.ws.rs.core.Response;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.krakedev.moduloii.evaluacionfinal.entidades.Libro;
import com.krakedev.moduloii.evaluacionfinal.entidades.Prestamo;
import com.krakedev.moduloii.evaluacionfinal.entidades.PrestamoConsulta;
import com.krakedev.moduloii.evaluacionfinal.utils.ConexionBDD;

public class ServiciosBiblioteca {
	private static final Logger LOGGER = LogManager.getLogger(ServiciosBiblioteca.class);

	public static ArrayList<Libro> mostrarLibros() throws Exception {
		ArrayList<Libro> libros = new ArrayList<Libro>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			con = ConexionBDD.conectar();
			ps = con.prepareStatement("select * from libros");

			rs = ps.executeQuery();

			while (rs.next()) {
				int codigo = rs.getInt("id_libro");
				String titulo = rs.getString("titulo");
				int autor_id = rs.getInt("autor_id");
				int genero_id = rs.getInt("genero_id");
				int anio_publicacion = rs.getInt("anio_publicacion");
				boolean estado = rs.getBoolean("estado_disponible");

				Libro l = new Libro();
				l.setId_libro(codigo);
				l.setTitulo(titulo);
				l.setAutor_id(autor_id);
				l.setGenero_id(genero_id);
				l.setAnio_publicacion(anio_publicacion);
				l.setEstado_disponible(estado);

				libros.add(l);
			}

		} catch (Exception e) {
			LOGGER.error("Error al recuperar los libros", e);
			throw new Exception("Error al al recuperar los libros");
		} finally {
			// cerrar la conexion
			try {
				con.close();
			} catch (SQLException e) {
				LOGGER.error("Error con la base de datos", e);
				throw new Exception("Error con la base de datos");
			}
		}

		return libros;
	}

	public static ArrayList<Prestamo> mostrarPrestamos() throws Exception {
		ArrayList<Prestamo> prestamos = new ArrayList<Prestamo>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			con = ConexionBDD.conectar();
			ps = con.prepareStatement(
					"select * from prestamos, libros, autores, generos where prestamos.libro_id=libros.id_libro and libros.autor_id=autores.id_autor and libros.genero_id=generos.id_genero");

			rs = ps.executeQuery();

			while (rs.next()) {
				int idPrestamo = rs.getInt("id_prestamos");
				int codigoLibro = rs.getInt("libro_id");
				String nombreUsuario = rs.getString("nombre_usuario");
				Date fechaPrestamo = rs.getDate("fecha_prestamo");
				Date fechaDevolucion = rs.getDate("fecha_devolucion");

				Prestamo p = new Prestamo();
				p.setId_prestamo(idPrestamo);
				p.setLibro_id(codigoLibro);
				p.setNombre_usuario(nombreUsuario);
				p.setFecha_prestamo(fechaPrestamo);
				p.setFecha_devolucion(fechaDevolucion);

				prestamos.add(p);
			}

		} catch (Exception e) {
			LOGGER.error("Error al recuperar los prestamos", e);
			throw new Exception("Error al al recuperar los prestamos");
		} finally {
			// cerrar la conexion
			try {
				con.close();
			} catch (SQLException e) {
				LOGGER.error("Error con la base de datos", e);
				throw new Exception("Error con la base de datos");
			}
		}

		return prestamos;
	}

	public static ArrayList<PrestamoConsulta> mostrarPrestamoDetallado() throws Exception {
		ArrayList<PrestamoConsulta> prestamos = new ArrayList<PrestamoConsulta>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			con = ConexionBDD.conectar();
			ps = con.prepareStatement("select "
					+ "p.id_prestamos, p.nombre_usuario, p.fecha_prestamo, p.fecha_devolucion, "
					+ "l.id_libro, l.titulo, l.anio_publicacion, l.estado_disponible, "
					+ "a.id_autor, a.nombre as nombre_autor, a.fecha_nacimiento, a.nacionalidad, "
					+ "g.id_genero, g.nombre as nombre_genero " + "from prestamos p, libros l, autores a, generos g "
					+ "where p.libro_id=l.id_libro " + "and l.autor_id=a.id_autor " + "and l.genero_id=g.id_genero");

			rs = ps.executeQuery();

			while (rs.next()) {
				int idPrestamo = rs.getInt("id_prestamos");
				String nombreUsuario = rs.getString("nombre_usuario");
				Date fechaPrestamo = rs.getDate("fecha_prestamo");
				Date fechaDevolucion = rs.getDate("fecha_devolucion");

				int idLibro = rs.getInt("id_libro");
				String tituloLibro = rs.getString("titulo");
				int anioLibro = rs.getInt("anio_publicacion");
				boolean estadoLibro = rs.getBoolean("estado_disponible");

				int idAutor = rs.getInt("id_autor");
				String nombreAutor = rs.getString("nombre_autor");
				Date fechaNacimiento = rs.getDate("fecha_nacimiento");
				String nacionalidad = rs.getString("nacionalidad");

				int idGenero = rs.getInt("id_genero");
				String genero = rs.getString("nombre_genero");

				PrestamoConsulta pd = new PrestamoConsulta();
				pd.setIdPrestamo(idPrestamo);
				pd.setNombreUsuario(nombreUsuario);
				pd.setFechaPrestamo(fechaPrestamo);
				pd.setFechaDevolucion(fechaDevolucion);
				pd.setLibroId(idLibro);
				pd.setTituloLibro(tituloLibro);
				pd.setAnioPublicacion(anioLibro);
				pd.setEstadoDisponible(estadoLibro);
				pd.setAutorId(idAutor);
				pd.setNombreAutor(nombreAutor);
				pd.setFechaNacimiento(fechaNacimiento);
				pd.setNacionalidad(nacionalidad);
				pd.setGeneroId(idGenero);
				pd.setNombreGenero(genero);

				prestamos.add(pd);
			}

		} catch (Exception e) {
			LOGGER.error("Error al recuperar los prestamos", e);
			throw new Exception("Error al recuperar los prestamos");
		} finally {
			try {
				if (rs != null)
					rs.close();
				if (ps != null)
					ps.close();
				if (con != null)
					con.close();
			} catch (SQLException e) {
				LOGGER.error("Error al cerrar conexión", e);
				throw new Exception("Error con la base de datos");
			}
		}

		return prestamos;
	}

	public static void insertarLibro(Libro libro) throws Exception {
		Connection con = null;
		LOGGER.trace("Libro a insertar>>>" + libro);
		try {
			// abrir la conexion
			con = ConexionBDD.conectar();

			PreparedStatement ps;

			ps = con.prepareStatement(
					"insert into libros(titulo, autor_id, genero_id, anio_publicacion, estado_disponible)"
							+ "values(?, ?, ?, ?, ?)");

			ps.setString(1, libro.getTitulo());
			ps.setInt(2, libro.getAutor_id());
			ps.setInt(3, libro.getGenero_id());
			ps.setInt(4, libro.getAnio_publicacion());
			ps.setBoolean(5, libro.isEstado_disponible());

			ps.executeUpdate();
			LOGGER.trace("Libro agregado");
		} catch (Exception e) {
			LOGGER.error("Error al insertar", e);
			throw new Exception("Error al insertar");
		} finally {
			// cerrar la conexion
			try {
				con.close();
			} catch (SQLException e) {
				LOGGER.error("Error con la base de datos", e);
				throw new Exception("Error con la base de datos");
			}
		}
	}

	public static void insertarGenero(String genero) throws Exception {
		Connection con = null;
		LOGGER.trace("Genero a insertar>>>" + genero);
		try {
			// abrir la conexion
			con = ConexionBDD.conectar();

			PreparedStatement ps;

			ps = con.prepareStatement("insert into generos(nombre) values(?)");

			ps.setString(1, genero);

			ps.executeUpdate();
			LOGGER.trace("Genero agregado correctamente");
		} catch (Exception e) {
			LOGGER.error("Error al insertar", e);
			throw new Exception("Error al insertar");
		} finally {
			// cerrar la conexion
			try {
				con.close();
			} catch (SQLException e) {
				LOGGER.error("Error con la base de datos", e);
				throw new Exception("Error con la base de datos");
			}
		}
	}

	public static void eliminarGenero(int idGenero, String user, String pass) throws Exception {
		Connection con = null;
		LOGGER.trace("Genero a eliminar a eliminar con codigo >>>" + idGenero);
		try {

			String usuario = "admin";
			String pas = "admin";

			if (usuario.equals(user) && pas.equals(pass)) {
				// abrir la conexion
				con = ConexionBDD.conectar();

				PreparedStatement ps;

				ps = con.prepareStatement("delete from generos where id_genero=?");
				ps.setInt(1, idGenero);
				ps.executeUpdate();

				LOGGER.trace("Genero eliminada");

			} else {
				LOGGER.trace("Credenciales incorrectas");
				throw new Exception("Credenciales incorrectas");
			}
		} catch (Exception e) {
			LOGGER.error("Credenciales incorrectas", e);
			throw new Exception("Credenciales incorrectas");
		} finally {
			// cerrar la conexion
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					LOGGER.error("Error con la base de datos", e);
					throw new Exception("Error con la base de datos");
				}
			}
		}
	}

	public static ArrayList<Prestamo> consultarPrestamos(int idLibro, String usuario, String contra, String rol)
			throws Exception {
		ArrayList<Prestamo> prestamos = null;
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;

		try {
			String user = "admin";
			String pass = "admin";
			String rol2 = "admin";

			if (usuario.equals(user) && contra.equals(pass) && rol2.equals(rol)) {
				con = ConexionBDD.conectar();
				ps = con.prepareStatement("select * from prestamos where libro_id=? ORDER BY fecha_prestamo DESC;");

				ps.setInt(1, idLibro);

				rs = ps.executeQuery();

				prestamos = new ArrayList<Prestamo>();

				while (rs.next()) {
					int idPrestamo = rs.getInt("id_prestamos");
					int codigoLibro = rs.getInt("libro_id");
					String nombreUsuario = rs.getString("nombre_usuario");
					Date fechaPrestamo = rs.getDate("fecha_prestamo");
					Date fechaDevolucion = rs.getDate("fecha_devolucion");

					Prestamo p = new Prestamo();
					p.setId_prestamo(idPrestamo);
					p.setLibro_id(codigoLibro);
					p.setNombre_usuario(nombreUsuario);
					p.setFecha_prestamo(fechaPrestamo);
					p.setFecha_devolucion(fechaDevolucion);

					prestamos.add(p);
				}
			} else {
				LOGGER.error("Error al recuperar los prestamos");
			}
		} catch (Exception e) {
			LOGGER.error("Credenciales incorrectas", e);
			throw new Exception("Error al al recuperar los prestamos");
		} finally {
			// cerrar la conexion
			try {
				con.close();
			} catch (SQLException e) {
				LOGGER.error("Error con la base de datos", e);
				throw new Exception("Error con la base de datos");
			}
		}

		return prestamos;
	}

	public static void insertarPrestamo(Prestamo prestamo) throws Exception {
		Connection con = null;
		LOGGER.trace("Prestamo a insertar>>>" + prestamo);
		try {
			// abrir la conexion
			con = ConexionBDD.conectar();

			PreparedStatement ps;

			ps = con.prepareStatement(
					"insert into prestamos(libro_id, nombre_usuario, fecha_prestamo, fecha_devolucion)"
							+ "values(?, ?, ?, ?)");

			ps.setInt(1, prestamo.getLibro_id());
			ps.setString(2, prestamo.getNombre_usuario());
			ps.setDate(3, new java.sql.Date(prestamo.getFecha_prestamo().getTime()));
			ps.setDate(4, new java.sql.Date(prestamo.getFecha_devolucion().getTime()));

			ps.executeUpdate();
			LOGGER.trace("Prestamo libro agregado");
		} catch (Exception e) {
			LOGGER.error("Error al insertar", e);
			throw new Exception("Error al insertar");
		} finally {
			// cerrar la conexion
			try {
				con.close();
			} catch (SQLException e) {
				LOGGER.error("Error con la base de datos", e);
				throw new Exception("Error con la base de datos");
			}
		}
	}

	public static void registrarPrestamo(Prestamo prestamo) throws Exception {
		Connection con = null;
		LOGGER.trace("Prestamo a insertar>>>" + prestamo);
		try {
			// abrir la conexion
			con = ConexionBDD.conectar();

			PreparedStatement ps;

			ps = con.prepareStatement(
					"insert into prestamos(libro_id, nombre_usuario, fecha_prestamo, fecha_devolucion)"
							+ "values(?, ?, ?, ?)");

			ps.setInt(1, prestamo.getLibro_id());
			ps.setString(2, prestamo.getNombre_usuario());
			ps.setDate(3, new java.sql.Date(prestamo.getFecha_prestamo().getTime()));
			ps.setDate(4, new java.sql.Date(prestamo.getFecha_devolucion().getTime()));

			ps.executeUpdate();

			PreparedStatement pslibro = con
					.prepareStatement("update libros set estado_disponible = false where id_libro = ?");

			pslibro.setInt(1, prestamo.getLibro_id());
			pslibro.executeUpdate();

			LOGGER.trace("Prestamo libro agregado y estado actualizado");
		} catch (Exception e) {
			LOGGER.error("Error al insertar", e);
			throw new Exception("Error al insertar");
		} finally {
			// cerrar la conexion
			try {
				con.close();
			} catch (SQLException e) {
				LOGGER.error("Error con la base de datos", e);
				throw new Exception("Error con la base de datos");
			}
		}
	}

	public static void actualizarLibro(Libro libro) throws Exception {
		Connection con = null;
		LOGGER.trace("Libro a actualizar>>>" + libro);
		try {
			// abrir la conexion
			con = ConexionBDD.conectar();

			PreparedStatement ps;

			ps = con.prepareStatement("update libros set " + "titulo=?," + "autor_id=?," + "genero_id=?,"
					+ "anio_publicacion=?," + "estado_disponible=? " + "where id_libro=?");

			ps.setString(1, libro.getTitulo());
			ps.setInt(2, libro.getAutor_id());
			ps.setInt(3, libro.getGenero_id());
			ps.setInt(4, libro.getAnio_publicacion());
			ps.setBoolean(5, libro.isEstado_disponible());
			ps.setInt(6, libro.getId_libro());

			ps.executeUpdate();

			LOGGER.trace("Libro actualizada");
		} catch (Exception e) {
			LOGGER.error("Error al modificar", e);
			throw new Exception("Error al modificar");
		} finally {
			// cerrar la conexion
			try {
				con.close();
			} catch (SQLException e) {
				LOGGER.error("Error con la base de datos", e);
				throw new Exception("Error con la base de datos");
			}
		}
	}

	public static void actualizarPrestamo(Prestamo prestamo) throws Exception {
		Connection con = null;
		LOGGER.trace("Prestamo a actualizar>>>" + prestamo);
		try {
			// abrir la conexion
			con = ConexionBDD.conectar();

			PreparedStatement ps;

			ps = con.prepareStatement("update prestamos set " + "libro_id=?," + "nombre_usuario=?,"
					+ "fecha_prestamo=?," + "fecha_devolucion=? " + "where id_prestamos=?");

			ps.setInt(1, prestamo.getLibro_id());
			ps.setString(2, prestamo.getNombre_usuario());
			ps.setDate(3, new java.sql.Date(prestamo.getFecha_prestamo().getTime()));
			ps.setDate(4, new java.sql.Date(prestamo.getFecha_devolucion().getTime()));
			ps.setInt(5, prestamo.getId_prestamo());

			ps.executeUpdate();

			LOGGER.trace("Prestamo actualizado");
		} catch (Exception e) {
			LOGGER.error("Error al modificar", e);
			throw new Exception("Error al modificar");
		} finally {
			// cerrar la conexion
			try {
				con.close();
			} catch (SQLException e) {
				LOGGER.error("Error con la base de datos", e);
				throw new Exception("Error con la base de datos");
			}
		}
	}
}
