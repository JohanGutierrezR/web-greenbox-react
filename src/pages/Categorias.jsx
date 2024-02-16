import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes
import '../components/css/Dashboard.css';
import logo from '../img/Logo.png';

export const Categorias = ({ state }) => {
	return (
		<>
			<div className='contenido-navegacion'>
				<div className='logo'>
					<img src={logo} alt='logo' />
					<h2>
						GreenBox <br />
						<span>Te conecta con el campo</span>
					</h2>
				</div>
				<div className='navegacion'>
					<nav>
						<Link to='/perfil'>Perfil</Link>
						<Link to='/compras'>Mis compras</Link>
						<Link to='/ayuda'>Ayuda</Link>
						<span className='username'>{state?.name}</span>
						<Link to='/dashboard'>
							<button className='btn-logout'>Cerrar sesión</button>
						</Link>
					</nav>
				</div>
			</div>
			<div className='categorias'>
				<h1>Categorias Disponibles</h1>
				<div className='botones-categorias'>
					<Link to='/frutas'>
						<button>Frutas</button>
					</Link>
					<Link to='/vegetales'>
						<button>Vegetales</button>
					</Link>
					<Link to='/cereales'>
						<button>Cereales</button>
					</Link>
				</div>
				<div className='botones-categorias'>
					<Link to='/legumbres'>
						<button>Legumbres</button>
					</Link>
					<Link to='/especias'>
						<button>Especias</button>
					</Link>
				</div>
			</div>
		</>
	);
};

// Define las validaciones de PropTypes
Categorias.propTypes = {
	state: PropTypes.shape({
		name: PropTypes.string,
	}),
};
