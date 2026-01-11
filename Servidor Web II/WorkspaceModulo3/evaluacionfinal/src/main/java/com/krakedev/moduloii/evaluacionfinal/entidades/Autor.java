package com.krakedev.moduloii.evaluacionfinal.entidades;

import java.util.Date;

public class Autor {
	private int id_autor;
	private String nombre;
	private Date fecha_nacimiento;
	private String nacionalidad;

	public Autor() {
	}

	public Autor(int id_autor, String nombre, Date fecha_nacimiento, String nacionalidad) {
		super();
		this.id_autor = id_autor;
		this.nombre = nombre;
		this.fecha_nacimiento = fecha_nacimiento;
		this.nacionalidad = nacionalidad;
	}

	public int getId_autor() {
		return id_autor;
	}

	public void setId_autor(int id_autor) {
		this.id_autor = id_autor;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Date getFecha_nacimiento() {
		return fecha_nacimiento;
	}

	public void setFecha_nacimiento(Date fecha_nacimiento) {
		this.fecha_nacimiento = fecha_nacimiento;
	}

	public String getNacionalidad() {
		return nacionalidad;
	}

	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}

	@Override
	public String toString() {
		return "Autor [id_autor=" + id_autor + ", nombre=" + nombre + ", fecha_nacimiento=" + fecha_nacimiento
				+ ", nacionalidad=" + nacionalidad + "]";
	}
}
