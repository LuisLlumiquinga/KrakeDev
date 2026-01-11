package com.krakedev.moduloii.evaluacionfinal.entidades;

public class Libro {
	private int id_libro;
	private String titulo;
	private int autor_id;
	private int genero_id;
	private int anio_publicacion;
	private boolean estado_disponible;

	public Libro() {
	}

	public Libro(int id_libro, String titulo, int autor_id, int genero_id, int anio_publicacion,
			boolean estado_disponible) {
		super();
		this.id_libro = id_libro;
		this.titulo = titulo;
		this.autor_id = autor_id;
		this.genero_id = genero_id;
		this.anio_publicacion = anio_publicacion;
		this.estado_disponible = estado_disponible;
	}

	public int getId_libro() {
		return id_libro;
	}

	public void setId_libro(int id_libro) {
		this.id_libro = id_libro;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public int getAutor_id() {
		return autor_id;
	}

	public void setAutor_id(int autor_id) {
		this.autor_id = autor_id;
	}

	public int getGenero_id() {
		return genero_id;
	}

	public void setGenero_id(int genero_id) {
		this.genero_id = genero_id;
	}

	public int getAnio_publicacion() {
		return anio_publicacion;
	}

	public void setAnio_publicacion(int anio_publicacion) {
		this.anio_publicacion = anio_publicacion;
	}

	public boolean isEstado_disponible() {
		return estado_disponible;
	}

	public void setEstado_disponible(boolean estado_disponible) {
		this.estado_disponible = estado_disponible;
	}

	@Override
	public String toString() {
		return "Libro [id_libro=" + id_libro + ", titulo=" + titulo + ", autor_id=" + autor_id + ", genero_id="
				+ genero_id + ", anio_publicacion=" + anio_publicacion + ", estado_disponible=" + estado_disponible
				+ "]";
	}
}
