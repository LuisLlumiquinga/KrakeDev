package com.krakedev.moduloii.evaluacionfinal.entidades;

import java.util.Date;

public class PrestamoConsulta {
	// Datos del préstamo
	private int idPrestamo;
	private String nombreUsuario;
	private Date fechaPrestamo;
	private Date fechaDevolucion;

	// Datos del libro
	private int libroId;
	private String tituloLibro;
	private int anioPublicacion;
	private boolean estadoDisponible;

	// Datos del autor
	private int autorId;
	private String nombreAutor;
	private Date fechaNacimiento;
	private String nacionalidad;

	// Datos del género
	private int generoId;
	private String nombreGenero;

	public PrestamoConsulta() {
		}

	public int getIdPrestamo() {
		return idPrestamo;
	}

	public void setIdPrestamo(int idPrestamo) {
		this.idPrestamo = idPrestamo;
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}

	public Date getFechaPrestamo() {
		return fechaPrestamo;
	}

	public void setFechaPrestamo(Date fechaPrestamo) {
		this.fechaPrestamo = fechaPrestamo;
	}

	public Date getFechaDevolucion() {
		return fechaDevolucion;
	}

	public void setFechaDevolucion(Date fechaDevolucion) {
		this.fechaDevolucion = fechaDevolucion;
	}

	public int getLibroId() {
		return libroId;
	}

	public void setLibroId(int libroId) {
		this.libroId = libroId;
	}

	public String getTituloLibro() {
		return tituloLibro;
	}

	public void setTituloLibro(String tituloLibro) {
		this.tituloLibro = tituloLibro;
	}

	public int getAnioPublicacion() {
		return anioPublicacion;
	}

	public void setAnioPublicacion(int anioPublicacion) {
		this.anioPublicacion = anioPublicacion;
	}

	public boolean isEstadoDisponible() {
		return estadoDisponible;
	}

	public void setEstadoDisponible(boolean estadoDisponible) {
		this.estadoDisponible = estadoDisponible;
	}

	public int getAutorId() {
		return autorId;
	}

	public void setAutorId(int autorId) {
		this.autorId = autorId;
	}

	public String getNombreAutor() {
		return nombreAutor;
	}

	public void setNombreAutor(String nombreAutor) {
		this.nombreAutor = nombreAutor;
	}

	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getNacionalidad() {
		return nacionalidad;
	}

	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}

	public int getGeneroId() {
		return generoId;
	}

	public void setGeneroId(int generoId) {
		this.generoId = generoId;
	}

	public String getNombreGenero() {
		return nombreGenero;
	}

	public void setNombreGenero(String nombreGenero) {
		this.nombreGenero = nombreGenero;
	}

	@Override
	public String toString() {
		return "PrestamoDetallado [idPrestamo=" + idPrestamo + ", nombreUsuario=" + nombreUsuario + ", fechaPrestamo="
				+ fechaPrestamo + ", fechaDevolucion=" + fechaDevolucion + ", libroId=" + libroId + ", tituloLibro="
				+ tituloLibro + ", anioPublicacion=" + anioPublicacion + ", estadoDisponible=" + estadoDisponible
				+ ", autorId=" + autorId + ", nombreAutor=" + nombreAutor + ", fechaNacimiento=" + fechaNacimiento
				+ ", nacionalidad=" + nacionalidad + ", generoId=" + generoId + ", nombreGenero=" + nombreGenero + "]";
	}
}
