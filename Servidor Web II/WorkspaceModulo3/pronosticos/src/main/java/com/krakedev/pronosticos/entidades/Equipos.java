package com.krakedev.pronosticos.entidades;

public class Equipos {
	private int codigo_internacional;
	private String nombre;
	
	public Equipos() {}
	
	public Equipos(int codigo_internacional, String nombre) {
		super();
		this.codigo_internacional = codigo_internacional;
		this.nombre = nombre;
	}

	public int getCodigo_internacional() {
		return codigo_internacional;
	}

	public void setCodigo_internacional(int codigo_internacional) {
		this.codigo_internacional = codigo_internacional;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Override
	public String toString() {
		return "Equipos [codigo_internacional=" + codigo_internacional + ", nombre=" + nombre + "]";
	}	
}
