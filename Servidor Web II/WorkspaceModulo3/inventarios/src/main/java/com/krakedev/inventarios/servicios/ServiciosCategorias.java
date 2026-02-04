package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.CategoriasBDD;
import com.krakedev.inventarios.entidades.Categoria;
import com.krakedev.inventarios.excepciones.KrakeDevException;

@Path("categorias")
public class ServiciosCategorias {
	@Path("crear")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crear(Categoria categoria) {
		CategoriasBDD catBDD=new CategoriasBDD();
		try {
			catBDD.crear(categoria);
			return Response.ok().build();			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("actualizar")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response actualizar(Categoria categoria) {
		System.out.println("CATEGORIA ACTUALIZADA>>>>>>" + categoria);
		CategoriasBDD cat = new CategoriasBDD();
		try {
			cat.actualizar(categoria);
			return Response.ok().build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("recuperar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar(){
		CategoriasBDD catBDD = new CategoriasBDD();
		ArrayList<Categoria> categorias = null;

		try {
			categorias = catBDD.recuperarCategorias();
			return Response.ok(categorias).build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
