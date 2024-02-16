import React from 'react'; // Importar React
import PropTypes from 'prop-types'; // Importar PropTypes si no lo tienes ya
import '../components/css/Compras.css';
import ruta from '../img/ruta.jpg';
import { Link } from 'react-router-dom';
import logo from '../img/Logo.png';
import '../components/css/Comprar.css';
export { default as Comprar } from './Comprar';

// Agregar propTypes para state
const Comprar = ({ state }) => {
	return (
		<div>
			<div className='contenido-navegacion'>
				<div className='logo'>
					<img src={logo} alt='logo' />
					<h2>
						GreenBox <br />
						<span>Te conecta con el campo</span>
					</h2>
				</div>
				<div className='navegacion-ayuda'>
					<nav>
						<Link to='/compras'>Mis compras</Link>
						<Link to='/categorias'>Categorias</Link>
						<Link to='/ayuda'>Ayuda</Link>
						<span className='username'>{state?.name}</span>
						<Link to='/dashboard'>
							<button className='btn-logout'>Cerrar sesión</button>
						</Link>
					</nav>
				</div>
			</div>
			<div></div>
			<div className='ruta'>
				<h1>Ruta de entrega</h1>
				<Link to='/compras'>
					<img src={ruta} alt='logo' />
				</Link>
				<p>Salida 6 de octubre del 2023 - LLegada 8 de octubre del 2023</p>
			</div>
			<div className='bta-fecha'>
				<Link to='/calendario'>
					<button>Fecha de Entrega</button>
				</Link>
			</div>
		</div>
	);
};

// Definir propTypes para state
Comprar.propTypes = {
	state: PropTypes.object, // Ajustar el tipo según lo que esperas
};

export default Comprar;
