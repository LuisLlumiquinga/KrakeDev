package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;
import java.sql.Timestamp;

public class CabeceraVentas {
	private int condigo;
	private Timestamp fecha;
	private BigDecimal totaSinIVA;
	private BigDecimal IVA;
	private BigDecimal total;
	
	public CabeceraVentas() {}
	
	public CabeceraVentas(int condigo, Timestamp fecha, BigDecimal totaSinIVA, BigDecimal iVA, BigDecimal total) {
		super();
		this.condigo = condigo;
		this.fecha = fecha;
		this.totaSinIVA = totaSinIVA;
		IVA = iVA;
		this.total = total;
	}

	public int getCondigo() {
		return condigo;
	}

	public void setCondigo(int condigo) {
		this.condigo = condigo;
	}

	public Timestamp getFecha() {
		return fecha;
	}

	public void setFecha(Timestamp fecha) {
		this.fecha = fecha;
	}

	public BigDecimal getTotaSinIVA() {
		return totaSinIVA;
	}

	public void setTotaSinIVA(BigDecimal totaSinIVA) {
		this.totaSinIVA = totaSinIVA;
	}

	public BigDecimal getIVA() {
		return IVA;
	}

	public void setIVA(BigDecimal iVA) {
		IVA = iVA;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}
	
	@Override
	public String toString() {
		return "CabeceraVentas [condigo=" + condigo + ", fecha=" + fecha + ", totaSinIVA=" + totaSinIVA + ", IVA=" + IVA
				+ ", total=" + total + "]";
	}
}
