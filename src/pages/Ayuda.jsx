import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../img/Logo.png';

export const Ayuda = ({ state }) => {
	return (
		<>
			<div className='contenido-navegacion-ayuda'>
				<div className='logo'>
					<img src={logo} alt='logo' />
					<h2>
						GreenBox <br />
						<span>Te conecta con el campo</span>
					</h2>
				</div>
				<div className='navegacion-ayuda'>
					<nav>
						<Link to='/perfil'>Perfil</Link>
						<Link to='/compras'>Mis compras</Link>
						<Link to='/categorias'>Categorias</Link>
						<Link to='/comprar'>Comprar</Link>
						{state && <span className='username'>{state?.name}</span>}
						<Link to='/dashboard'>
							<button className='btn-logout'>Cerrar sesión</button>
						</Link>
					</nav>
				</div>
			</div>
			<div className='encabezado-ayudas'>
				<div className='formulario'>
					<h1>Ayuda</h1>
					<p>¿Con qué podemos ayudarte?</p>
					<form method='post'>
						<div className='ayuda'>
							<input type='text' required />
							<label>Escribe lo que necesitas que te ayudemos</label>
						</div>
						<div className='menu-container'>
							<div className='menu'>
								<a href='#'>Ventas</a>
								<ul className='submenu'>
									<li>
										<a href='#'>Cancelar publicación</a>
									</li>
									<li>
										<a href='#'>Cancelar venta</a>
									</li>
									<li>
										<a href='#'>Preguntas sobre ventas</a>
									</li>
								</ul>
							</div>
							<div className='menu'>
								<a href='#'>Compras</a>
								<ul className='submenu'>
									<li>
										<a href='#'>Devoluciones y reembolsos</a>
									</li>
									<li>
										<a href='#'>Cancelar compra</a>
									</li>
									<li>
										<a href='#'>Preguntas sobre compras</a>
									</li>
								</ul>
							</div>
							<div className='menu'>
								<a href='#'>Transporte</a>
								<ul className='submenu'>
									<li>
										<a href='#'>Información del conductor</a>
									</li>
									<li>
										<a href='#'>No llega el producto</a>
									</li>
									<li>
										<a href='#'>Preguntas de transporte</a>
									</li>
								</ul>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

Ayuda.propTypes = {
	state: PropTypes.shape({
		name: PropTypes.string,
	}),
};

export default Ayuda;
