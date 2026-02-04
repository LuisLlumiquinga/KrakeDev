package com.krakedev.pronosticos.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.pronosticos.bdd.PronosticosBDD;
import com.krakedev.pronosticos.entidades.Pronosticos;
import com.krakedev.pronosticos.excepciones.KrakeDevException;

@Path("pronosticos")
public class ServiciosPronosticos {
	@Path("buscar/{sub}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar(@PathParam("sub") String subcadena){
		PronosticosBDD proBDD = new PronosticosBDD();
		ArrayList<Pronosticos> pronosticos = null;

		try {
			pronosticos = proBDD.buscar(subcadena);
			return Response.ok(pronosticos).build();
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	@Path("crear")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crear(Pronosticos pronostico) {
		PronosticosBDD proBDD=new PronosticosBDD();
		try {
			proBDD.crearPronostico(pronostico);
			return Response.ok().build();			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
