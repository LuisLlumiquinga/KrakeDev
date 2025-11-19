package krakedev.com.inventario.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import krakedev.com.inventario.entidades.Categoria;
import krakedev.com.inventario.entidades.Producto;

@Path("productos")
public class ServiciosProductos {
	
	@Path("metodo1")
	@GET
	public String saludar() {
		return "HOLA mundo";
	}
	
	@Path("insertar")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void insertar(Producto producto) {
		System.out.println("Producto insertado>>>" + producto);
	}

	@Path("actualizar")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void actualizar(Producto producto) {
		System.out.println("Producto actualizado>>>" + producto);
	}

	@Path("consultar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Producto> recuperarTodos() {
		ArrayList<Producto> producto = new ArrayList<Producto>();

		Categoria cat1 = new Categoria(1, "Muebles");
		Categoria cat2 = new Categoria(2, "Linea blanca");
		Categoria cat3 = new Categoria(3, "Computacion");
		
		Producto pro1=new Producto("01", "escritorio", cat1, 12.5, 100);
		Producto pro2=new Producto("02", "computador", cat3, 102.5, 13);
		Producto pro3=new Producto("03", "lavadora", cat2, 312.5, 10);
		
		producto.add(pro1);
		producto.add(pro2);
		producto.add(pro3);

		return producto;
	}
}
