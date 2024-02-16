import React from 'react'; // Importa React
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes
import '../components/css/Calendario.css';
import logo from '../img/Logo.png';

export const Calendario = ({ state }) => {
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
			<div className='fecha'>
				<div className='texto-encabezado-izquierdo'>
					<p>
						Compra de productos 5 de Octubre del 2023. <br />
						<br />
						Entre estimada el 8 de Octubre del 2023. <br />
						<br />
						Productos 3 $ 60.823.
					</p>
					<i className='fa-solid fa-map-location-dot'></i>
					<div className='bta-calendario'>
						<Link to='/comprar'>
							<button>Entrega</button>
						</Link>
					</div>
				</div>
				<div className='texto-encabezado-derecho'>
					<div className='calendario'>
						<h1>Octubre 2023</h1>
						<ol>
							<li className='day-name'>Dom</li>
							<li className='day-name'>Lun</li>
							<li className='day-name'>Mar</li>
							<li className='day-name'>Mier</li>
							<li className='day-name'>Jue</li>
							<li className='day-name'>Vie</li>
							<li className='day-name'>Sab</li>
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li className='color'>5</li>
							<li className='color'>6</li>
							<li className='color'>7</li>
							<li className='color'>8</li>
							<li>9</li>
							<li>10</li>
							<li>11</li>
							<li>12</li>
							<li>13</li>
							<li>14</li>
							<li>15</li>
							<li>16</li>
							<li>17</li>
							<li>18</li>
							<li>19</li>
							<li>20</li>
							<li>21</li>
							<li>22</li>
							<li>23</li>
							<li>24</li>
							<li>25</li>
							<li>26</li>
							<li>27</li>
							<li>28</li>
							<li>29</li>
							<li>30</li>
							<li>31</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

// Define las validaciones de PropTypes
Calendario.propTypes = {
	state: PropTypes.shape({
		name: PropTypes.string,
	}),
};
