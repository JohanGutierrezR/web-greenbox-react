import React, { useState } from 'react';
import { Navegacion } from '../components/Navegacion';
import img15 from '../img/Vegetales/Ahuyama/ahuyama1.jpeg';
import img16 from '../img/Vegetales/Tomate/image1.jpeg';
import img17 from '../img/Vegetales/Calabaza/images.jpeg';
import img18 from '../img/Vegetales/Lechuga/descarga.jpeg';
import '../components/css/ProductosGeneral.css';
import { Link } from 'react-router-dom';

export const Vegetales = () => {
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
						<h1>Vegetales</h1>
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
								Bogotá D.C. (3.290) <br />
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
							<img src={img15} alt='Ahuyama' />
							<p>
								$ 14.320 <br />
								Ahuyama <br />
								1 kilo <br />
								Ciudad Cundinamarca
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Ahuyama',
										precio: 14320,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
						<div className='img-frutas'>
							<img src={img16} alt='Tomate' />
							<p>
								$ 4.214 <br />
								Tomate <br />
								1 kilo <br />
								Ciudad Caldas
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Tomate',
										precio: 4214,
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
							<img src={img17} alt='Calabaza' />
							<p>
								$ 5.500 <br />
								Calabaza <br />
								1 kilo <br />
								Ciudad Boyaca
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Calabaza',
										precio: 5500,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
						<div className='img-frutas'>
							<img src={img18} alt='Lechuga' />
							<p>
								$ 7.960 <br />
								Lechuga
								<br />
								1 kilo <br />
								Ciudad Boyaca
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Lechuga',
										precio: 7960,
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
