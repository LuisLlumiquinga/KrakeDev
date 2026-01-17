package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;
import java.sql.Timestamp;

public class DetallesPedidoProveedor {
	private String identificador;
	private String nombre;
	private Timestamp fecha;
	private String estado;
	private String producto;
	private int cantidadSolicitada;
	private int cantidadRecibida;
	private BigDecimal subTotal;
	
	public DetallesPedidoProveedor() {}
	
	public DetallesPedidoProveedor(String identificador, String nombre, Timestamp fecha, String estado, String producto,
			int cantidadSolicitada, int cantidadRecibida, BigDecimal subTotal) {
		super();
		this.identificador = identificador;
		this.nombre = nombre;
		this.fecha = fecha;
		this.estado = estado;
		this.producto = producto;
		this.cantidadSolicitada = cantidadSolicitada;
		this.cantidadRecibida = cantidadRecibida;
		this.subTotal = subTotal;
	}

	public String getIdentificador() {
		return identificador;
	}

	public void setIdentificador(String identificador) {
		this.identificador = identificador;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Timestamp getFecha() {
		return fecha;
	}

	public void setFecha(Timestamp fecha) {
		this.fecha = fecha;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getProducto() {
		return producto;
	}

	public void setProducto(String producto) {
		this.producto = producto;
	}

	public int getCantidadSolicitada() {
		return cantidadSolicitada;
	}

	public void setCantidadSolicitada(int cantidadSolicitada) {
		this.cantidadSolicitada = cantidadSolicitada;
	}

	public int getCantidadRecibida() {
		return cantidadRecibida;
	}

	public void setCantidadRecibida(int cantidadRecibida) {
		this.cantidadRecibida = cantidadRecibida;
	}

	public BigDecimal getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(BigDecimal subTotal) {
		this.subTotal = subTotal;
	}

	@Override
	public String toString() {
		return "DetallesPedidoProveedor [identificador=" + identificador + ", nombre=" + nombre + ", fecha=" + fecha
				+ ", estado=" + estado + ", producto=" + producto + ", cantidadSolicitada=" + cantidadSolicitada
				+ ", cantidadRecibida=" + cantidadRecibida + ", subTotal=" + subTotal + "]";
	}
}
