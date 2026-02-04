package com.krakedev.pronosticos.entidades;

public class Pronosticos {
	private int codigo_pronostico;
	private String codigo_u;
	private String codigo_p;
	private int codigo_equipo1;
	private int marcador_equipo1;
	private int codigo_equipo2;
	private int marcador_equipo2;

	public Pronosticos() {}
	
	public Pronosticos(int codigo_pronostico, String codigo_u, String codigo_p, int codigo_equipo1,
			int marcador_equipo1, int codigo_equipo2, int marcador_equipo2) {
		super();
		this.codigo_pronostico = codigo_pronostico;
		this.codigo_u = codigo_u;
		this.codigo_p = codigo_p;
		this.codigo_equipo1 = codigo_equipo1;
		this.marcador_equipo1 = marcador_equipo1;
		this.codigo_equipo2 = codigo_equipo2;
		this.marcador_equipo2 = marcador_equipo2;
	}

	public int getCodigo_pronostico() {
		return codigo_pronostico;
	}

	public void setCodigo_pronostico(int codigo_pronostico) {
		this.codigo_pronostico = codigo_pronostico;
	}

	public String getCodigo_u() {
		return codigo_u;
	}

	public void setCodigo_u(String codigo_u) {
		this.codigo_u = codigo_u;
	}

	public String getCodigo_p() {
		return codigo_p;
	}

	public void setCodigo_p(String codigo_p) {
		this.codigo_p = codigo_p;
	}

	public int getCodigo_equipo1() {
		return codigo_equipo1;
	}

	public void setCodigo_equipo1(int codigo_equipo1) {
		this.codigo_equipo1 = codigo_equipo1;
	}

	public int getMarcador_equipo1() {
		return marcador_equipo1;
	}

	public void setMarcador_equipo1(int marcador_equipo1) {
		this.marcador_equipo1 = marcador_equipo1;
	}

	public int getCodigo_equipo2() {
		return codigo_equipo2;
	}

	public void setCodigo_equipo2(int codigo_equipo2) {
		this.codigo_equipo2 = codigo_equipo2;
	}

	public int getMarcador_equipo2() {
		return marcador_equipo2;
	}

	public void setMarcador_equipo2(int marcador_equipo2) {
		this.marcador_equipo2 = marcador_equipo2;
	}

	@Override
	public String toString() {
		return "Pronosticos [codigo_pronostico=" + codigo_pronostico + ", codigo_u=" + codigo_u + ", codigo_p="
				+ codigo_p + ", codigo_equipo1=" + codigo_equipo1 + ", marcador_equipo1=" + marcador_equipo1
				+ ", codigo_equipo2=" + codigo_equipo2 + ", marcador_equipo2=" + marcador_equipo2 + "]";
	}
}
