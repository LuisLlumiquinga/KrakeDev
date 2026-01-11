package com.krakedev.moduloii.evaluacionfinal.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.moduloii.evaluacionfinal.entidades.Genero;
import com.krakedev.moduloii.evaluacionfinal.entidades.Libro;
import com.krakedev.moduloii.evaluacionfinal.entidades.Prestamo;

@Path("biblioteca")
public class Servicios {
	@Path("metodo1")
	@GET
	public String saludar() {
		return "Hola mundo Rest Web Services";
	}
	
	@Path("insertar")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertar(Libro libro) {
		try {
			ServiciosBiblioteca.insertarLibro(libro);
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("insertarGenero")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertarGenero(Genero genero) {
		try {
			ServiciosBiblioteca.insertarGenero(genero.getNombre());
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("registrarPrestamo")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registrarPrestamo(Prestamo prestamo) {
		try {
			ServiciosBiblioteca.registrarPrestamo(prestamo);
			return Response.ok().build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("buscarLibro/{idParam}/{userParam}/{pasParam}/{rolParam}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultarPrestamos(@PathParam("idParam") int idLibro,
			@PathParam("userParam") String user,
			@PathParam("pasParam") String pass,
			@PathParam("rolParam") String rol) {
		ArrayList<Prestamo> prestamos = null;

		try {
			prestamos = ServiciosBiblioteca.consultarPrestamos(idLibro, user, pass, rol);
			return Response.ok(prestamos).build();
		} catch (Exception e) {
			e.printStackTrace();
			return Response.ok("Credenciales incorrectas").build();
		}
	}
	
	@Path("eliminarGenero/{idParam}/{userParam}/{pasParam}")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response eliminarGenero(@PathParam("idParam") int idGenero,
			@PathParam("userParam") String user,
			@PathParam("pasParam") String pass) {
		try {
			
				ServiciosBiblioteca.eliminarGenero(idGenero, user, pass);
				return Response.ok().build();
			
			
		} catch (Exception e) {
			e.printStackTrace();
			return Response.ok("credenciales incorrectas").build();
		}
	}
}
