import React, { useState } from 'react';
import { Navegacion } from '../components/Navegacion';
import img23 from '../img/legumbres/Frijol/image3.jpg';
import img24 from '../img/legumbres/Habas/habas2.jpg';
import img25 from '../img/legumbres/Lentejas/image1.jpeg';
import img26 from '../img/legumbres/Alverjas/image1.webp';
import '../components/css/ProductosGeneral.css';
import { Link } from 'react-router-dom';

export const Legumbres = () => {
	const [carritoVisible, setCarritoVisible] = useState(false);
	const [carrito, setCarrito] = useState([]);

	const agregarAlCarrito = producto => {
		setCarrito([...carrito, producto]);
	};

	const eliminarDelCarrito = index => {
		const nuevoCarrito = [...carrito];
		nuevoCarrito.splice(index, 1);
		setCarrito(nuevoCarrito);
	};

	const calcularTotal = () => {
		return carrito.reduce((total, item) => total + item.precio, 0);
	};
	return (
		<div>
			<div>
				<Navegacion />
			</div>
			<div className='contenido-frutas'>
				<div className='textoEncabezadoIzquierdo'>
					<div className='color30'>
						<h1>Legumbres</h1>
						<div className='culm'>
							<p>Cantidad</p>
						</div>
						<div className='culm1'>
							<p>
								1 Kilo <br />
								10 kilos <br />
								50 kilos <br />
								100 kilos
							</p>
							<div className='linea'>
								<p>_______________________________</p>
							</div>
						</div>
						<div className='culm'>
							<p>Ubicacion</p>
						</div>
						<div className='culm1'>
							<p>
								Sumapaz (3.295) <br />
								Toledo (336) <br />
								Boyaca (1.680) <br />
								Cundinamarca (406) <br />
								Santander (241) <br />
								Risaralda (220) <br />
								Caldas (158) <br />
								Atlántico (148) <br />
							</p>
							<div className='linea'>
								<p>_______________________________</p>
							</div>
						</div>
						<div className='culm'>
							<p>Precio</p>
						</div>
						<div className='culm1'>
							<p>
								Hasta $ 3.000 (2.794) <br />
								$3.000 a $3.000.000 (2.669) <br />
								Más de $10.000.000 (2.987)
							</p>
							<div className='linea'>
								<p>_______________________________</p>
							</div>
						</div>
						<div className='culm'>
							<Link to='/categorias'>Productos Agricolas</Link>
						</div>
					</div>
				</div>
				<div className='img1'>
					<div className='contenidoImagenes '>
						<div className='img-frutas'>
							<img src={img23} alt='Frijoles' />
							<p>
								$ 22.950 <br />
								Frijoles <br />
								1 kilo <br />
								Ciudad Sumapaz
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Frijoles',
										precio: 22950,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
						<div className='img-frutas'>
							<img src={img24} alt='Habas' />
							<p>
								$ 10.214 <br />
								Habas <br />
								1 kilo <br />
								Ciudad Nariño
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Habas',
										precio: 10214,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
					</div>
				</div>
				<div className='img2'>
					<div className='contenidoImagenes '>
						<div className='img-frutas'>
							<img src={img25} alt='Lentejas' />
							<p>
								$ 11.400 <br />
								Lentejas <br />
								1 kilo <br />
								Ciudad Cajica
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Lentejas',
										precio: 11400,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
						<div className='img-frutas'>
							<img src={img26} alt='Alverja' />
							<p>
								$ 7.200 <br />
								Alverja
								<br />
								1 kilo <br />
								Ciudad Nariño
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Alverja',
										precio: 7200,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
					</div>
				</div>
				<div className='carrito-compras'>
					<h2>Carrito de Compras</h2>
					<button onClick={() => setCarritoVisible(!carritoVisible)}>
						{carritoVisible ? 'Ocultar' : 'Mostrar'}
					</button>
					{carritoVisible && (
						<div>
							<ul>
								{carrito.map((item, index) => (
									<li key={index}>
										{item.nombre} - ${item.precio}
										<button onClick={() => eliminarDelCarrito(index)}>
											Eliminar
										</button>
									</li>
								))}
							</ul>
							<p>Total: ${calcularTotal()}</p>
							<Link to='/comprar'>
								<button>Comprar</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
