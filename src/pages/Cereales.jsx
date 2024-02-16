import React, { useState } from 'react';
import { Navegacion } from '../components/Navegacion';
import img19 from '../img/Cereales/Arroz/imagen1.webp';
import img20 from '../img/Cereales/Cebada/image1.jpg';
import img21 from '../img/Cereales/Avena/image1.jpeg';
import img22 from '../img/Cereales/Maiz/imagen1.jpg';
import '../components/css/ProductosGeneral.css';
import { Link } from 'react-router-dom';

export const Cereales = () => {
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
						<h1>Cereales</h1>
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
								Cajica (5.290) <br />
								Cordoba (3.636) <br />
								Boyaca (680) <br />
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
							<img src={img19} alt='Arroz' />
							<p>
								$ 4.590 <br />
								Arroz <br />
								1 kilo <br />
								Ciudad Cordoba
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Arroz',
										precio: 4590,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
						<div className='img-frutas'>
							<img src={img20} alt='Cebada' />
							<p>
								$ 12.400 <br />
								Cebada <br />
								1 kilo <br />
								Ciudad Nariño
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Cebada',
										precio: 12400,
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
							<img src={img21} alt='Avena' />
							<p>
								$ 11.400 <br />
								Avena <br />
								1 kilo <br />
								Ciudad Cajica
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Avena',
										precio: 11400,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
						<div className='img-frutas'>
							<img src={img22} alt='Maiz' />
							<p>
								$ 6.694 <br />
								Maiz
								<br />
								1 kilo <br />
								Ciudad Tolima
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Maiz',
										precio: 6694,
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
