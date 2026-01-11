package com.krakedev.moduloii.evaluacionfinal.test;

import java.util.ArrayList;
import java.util.Date;

import com.krakedev.moduloii.evaluacionfinal.entidades.Prestamo;
import com.krakedev.moduloii.evaluacionfinal.servicios.ServiciosBiblioteca;
import com.krakedev.moduloii.evaluacionfinal.utils.Convertidor;

public class TestGrupo {

	public static void main(String[] args) {

		try {
			Date fechaPrestamo;
			fechaPrestamo = Convertidor.convertirFecha("2020/12/23");
			Date fechaDevolucion = Convertidor.convertirFecha("2022/12/23");

			Prestamo pres2 = new Prestamo(15, 10, "Karla Mendez", fechaPrestamo, fechaDevolucion);
			ServiciosBiblioteca.registrarPrestamo(pres2);
			System.out.println("Prestamo registrado correctamente");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		try {
			ArrayList<Prestamo> prestamos = ServiciosBiblioteca.consultarPrestamos(10);

			if (prestamos != null) {
				System.out.println("Prestamos del libro: " + prestamos);
			} else {
				System.out.println("No se encontraron prestamos");
			}

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		try {
			ServiciosBiblioteca.eliminarGenero(10);
			System.out.println("Genero eliminado de la base de datos");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

}
