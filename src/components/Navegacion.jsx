import React from 'react'; // Importa React
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes
import logo from '../img/Logo.png';

export const Navegacion = ({ state }) => {
	return (
		<div>
			<div className='contenido-navegacion'>
				<div className='logo'>
					<img src={logo} alt='logo' />
					<h2>
						GreenBox <br />
						<span>Te conecta con el campo</span>
					</h2>
					<input
						type='text'
						id='buscar'
						placeholder='Busca tus productos'
						required
					/>
					<a href=''>
						<input type='submit' value='Buscar' />
					</a>
				</div>
				<div className='navegacion-ayuda'>
					<nav>
						<Link to='/perfil'>Perfil</Link>
						<Link to='/categorias'>Categorias</Link>
						<Link to='/venta'>Vender</Link>
						<span className='username'>{state?.name}</span>
						<Link to='/dashboard'>
							<button className='btn-logout'>Cerrar sesión</button>
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};

// Define las validaciones de PropTypes
Navegacion.propTypes = {
	state: PropTypes.shape({
		name: PropTypes.string,
	}),
};
