import React, { useState } from 'react';
import { Navegacion } from '../components/Navegacion';
import img27 from '../img/Especias/Canela/image3.webp';
import img28 from '../img/Especias/Comino/imagen1.jpeg';
import img29 from '../img/Especias/Cilantro/image2.png';
import img30 from '../img/Especias/Curcuma/image1.jpg';
import '../components/css/ProductosGeneral.css';
import { Link } from 'react-router-dom';

export const Especias = () => {
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
						<h1>Especias</h1>
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
								Isla Pacifico. (1.055) <br />
								Magdalena (536) <br />
								Valle Del Cauca (680) <br />
								Putumayo (341) <br />
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
							<img src={img27} alt='Canela' />
							<p>
								$ 51.500 <br />
								Canela <br />
								1 kilo <br />
								Ciudad Isla Pacifico
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Canela',
										precio: 51500,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
						<div className='img-frutas'>
							<img src={img28} alt='Comino' />
							<p>
								$ 60.900 <br />
								Comino <br />
								1 kilo <br />
								Ciudad Magdalena
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Comino',
										precio: 60900,
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
							<img src={img29} alt='Cilantro' />
							<p>
								$ 11.901 <br />
								Cilantro <br />
								1 kilo <br />
								Ciudad Valle del Cauca
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Cilantro',
										precio: 11901,
										cantidad: 1,
									})
								}
							>
								Agregar al Carrito
							</button>
						</div>
						<div className='img-frutas'>
							<img src={img30} alt='Curcuma' />
							<p>
								$ 31.341 <br />
								Curcuma
								<br />
								1 kilo <br />
								Ciudad Putumayo
							</p>
							<button
								onClick={() =>
									agregarAlCarrito({
										nombre: 'Curcuma',
										precio: 31341,
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
