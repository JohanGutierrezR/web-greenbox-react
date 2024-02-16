import React, { useState } from 'react';
import { Navegacion } from '../components/Navegacion';
import { Link } from 'react-router-dom';
import '../components/css/ProductosGeneral.css';

import img11 from '../img/frutas/Banano/image3.jpg';
import img12 from '../img/frutas/Manzana/image1.jpg';
import img13 from '../img/frutas/Zapote/image1.jpg';
import img14 from '../img/frutas/Pera/image3.jpg';

export const Frutas = () => {
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
						<h1>Frutas</h1>
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
								Bogotá D.C (3.290) <br />
								Antioquia (2.636) <br />
								Valle Del Cauca (680) <br />
								Cundinamarca (406) <br />
								Santander (241) <br />
								Risaralda (220) <br />
								Caldas8 (158) <br />
								Atlántico (148) <br />
								Tolima (127)
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
							<img src={img11} alt='Banana' />
							<p>
								$ 4.050 <br />
								Bananas, Banano, Platanos <br />
								1 kilo <br />
								Ciudad Arauca
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Bananas',
										precio: 4050,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>

						<div className='img-frutas'>
							<img src={img12} alt='Manzana' />
							<p>
								$ 9.641 <br />
								Manzanas <br />
								1 kilo <br />
								Ciudad Antioquia
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Manzanas',
										precio: 9641,
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
							<img src={img13} alt='Zapote' />
							<p>
								$ 6.500 <br />
								Zapote <br />
								1 kilo <br />
								Ciudad Cordoba
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Zapote',
										precio: 6500,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
						<div className='img-frutas'>
							<img src={img14} alt='Pera' />
							<p>
								$ 13.960 <br />
								Pera <br />
								1 kilo <br />
								Ciudad Boyaca
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Pera',
										precio: 13960,
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
