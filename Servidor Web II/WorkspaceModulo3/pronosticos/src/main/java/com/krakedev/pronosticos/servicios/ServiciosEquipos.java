package com.krakedev.pronosticos.servicios;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.pronosticos.bdd.EquiposBDD;
import com.krakedev.pronosticos.entidades.Equipos;
import com.krakedev.pronosticos.excepciones.KrakeDevException;

@Path("equipos")
public class ServiciosEquipos {
	@Path("crear")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response crear(Equipos equipo) {
		EquiposBDD equipoBDD=new EquiposBDD();
		try {
			equipoBDD.crearEquipo(equipo);
			return Response.ok().build();			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
