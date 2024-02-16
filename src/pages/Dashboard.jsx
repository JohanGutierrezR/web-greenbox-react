import React from 'react'; // Importa React

import { Link } from 'react-router-dom';
import '../components/css/Dashboard.css';

export const Dashboard = () => {
	return (
		<>
			<div className='categorias'>
				{' '}
				{/* Usa className en lugar de class */}
				<h1>Categorias Disponibles</h1>
				<div className='botones-categorias'>
					{' '}
					{/* Usa className en lugar de class */}
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
					{' '}
					{/* Usa className en lugar de class */}
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

export default Dashboard; // Exporta Dashboard para poder usarlo en otros archivos
