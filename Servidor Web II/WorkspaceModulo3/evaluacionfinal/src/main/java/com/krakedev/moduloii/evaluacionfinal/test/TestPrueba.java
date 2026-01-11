package com.krakedev.moduloii.evaluacionfinal.test;

import java.util.ArrayList;
import java.util.Date;

import com.krakedev.moduloii.evaluacionfinal.entidades.Libro;
import com.krakedev.moduloii.evaluacionfinal.entidades.Prestamo;
import com.krakedev.moduloii.evaluacionfinal.entidades.PrestamoConsulta;
import com.krakedev.moduloii.evaluacionfinal.servicios.ServiciosBiblioteca;
import com.krakedev.moduloii.evaluacionfinal.utils.Convertidor;

public class TestPrueba {
	public static void main(String[] args) {
		try {
			ArrayList<Libro> lib=ServiciosBiblioteca.mostrarLibros();
			System.out.println(lib);
			
			ArrayList<Prestamo> pres=ServiciosBiblioteca.mostrarPrestamos();
			System.out.println(pres);
			
			ArrayList<PrestamoConsulta> prestamos = ServiciosBiblioteca.mostrarPrestamoDetallado();
			System.out.println(prestamos);
								
			Libro libro= new Libro(15, "Prueba", 1, 1, 2025, true);
			ServiciosBiblioteca.insertarLibro(libro);
			System.out.println("Libro registrado correctamente");
			
			Date fechaPrestamo = Convertidor.convertirFecha("2020/12/23");
			Date fechaDevolucion = Convertidor.convertirFecha("2022/12/23");
			
			Prestamo pres2=new Prestamo(15, 10, "Karla Mendez", fechaPrestamo, fechaDevolucion);
			ServiciosBiblioteca.insertarPrestamo(pres2);
			System.out.println("Prestamo del libro registrado correctamente");
			
			Libro lib2=new Libro(13, "Nueva Modificacion", 4, 4, 1989, false);
			ServiciosBiblioteca.actualizarLibro(lib2);
			System.out.println("Libro modificado correctamente");
			
			Date fechaPrestamo2 = Convertidor.convertirFecha("1989/12/23");
			Date fechaDevolucion2 = Convertidor.convertirFecha("1990/12/23");
			
			Prestamo pres3= new Prestamo(12, 5, "Usuario Modificado", fechaPrestamo2, fechaDevolucion2);
			ServiciosBiblioteca.actualizarPrestamo(pres3);
			System.out.println("Prestamo del codigo "+pres3.getId_prestamo()+" modificado correctamente");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
