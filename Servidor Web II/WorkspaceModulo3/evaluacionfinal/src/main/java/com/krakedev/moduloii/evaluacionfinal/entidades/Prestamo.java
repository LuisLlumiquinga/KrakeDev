package com.krakedev.moduloii.evaluacionfinal.entidades;

import java.util.Date;

public class Prestamo {
	private int id_prestamo;
	private int libro_id;
	private String nombre_usuario;
	private Date fecha_prestamo;
	private Date fecha_devolucion;

	public Prestamo() {
	}

	public Prestamo(int id_prestamo, int libro_id, String nombre_usuario, Date fecha_prestamo, Date fecha_devolucion) {
		super();
		this.id_prestamo = id_prestamo;
		this.libro_id = libro_id;
		this.nombre_usuario = nombre_usuario;
		this.fecha_prestamo = fecha_prestamo;
		this.fecha_devolucion = fecha_devolucion;
	}

	public int getId_prestamo() {
		return id_prestamo;
	}

	public void setId_prestamo(int id_prestamo) {
		this.id_prestamo = id_prestamo;
	}

	public int getLibro_id() {
		return libro_id;
	}

	public void setLibro_id(int libro_id) {
		this.libro_id = libro_id;
	}

	public String getNombre_usuario() {
		return nombre_usuario;
	}

	public void setNombre_usuario(String nombre_usuario) {
		this.nombre_usuario = nombre_usuario;
	}

	public Date getFecha_prestamo() {
		return fecha_prestamo;
	}

	public void setFecha_prestamo(Date fecha_prestamo) {
		this.fecha_prestamo = fecha_prestamo;
	}

	public Date getFecha_devolucion() {
		return fecha_devolucion;
	}

	public void setFecha_devolucion(Date fecha_devolucion) {
		this.fecha_devolucion = fecha_devolucion;
	}

	@Override
	public String toString() {
		return "Prestamo [id_prestamo=" + id_prestamo + ", libro_id=" + libro_id + ", nombre_usuario=" + nombre_usuario
				+ ", fecha_prestamo=" + fecha_prestamo + ", fecha_devolucion=" + fecha_devolucion + "]";
	}
}
