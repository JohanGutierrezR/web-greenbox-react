import React from 'react'; // Importa React
import perfil from '../img/foto de perfil.webp';
import logo from '../img/Logo.png';
import '../components/css/Perfil.css';
import { Link } from 'react-router-dom';

export const Perfil = () => {
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
						<Link to='/categorias'>Categorias</Link>
						<Link to='/ayuda'>Ayuda</Link>
					</nav>
				</div>
			</div>
			<div className='container'>
				<div className='columna-1'>
					<h1>Tu información personal</h1>{' '}
					{/* Corregido "informacion" por "información" */}
					<img src={perfil} alt='perfil' />
					<div className='columna'>
						<button>Cambiar foto</button>
					</div>
					<p>Nombres</p>
					<input
						type='text'
						name='name'
						id='name'
						required
						autoComplete='off'
						placeholder='Nombres '
					/>
					<label htmlFor='name'></label>
					<p>Apellidos</p>
					<input
						type='text'
						name='name'
						id='name'
						required
						autoComplete='off'
						placeholder='Apellidos'
					/>
					<label htmlFor='name'></label>
					<p>Tipo de Documento</p>
					<select name='documentType' id='documentType' required>
						<option value='dni'>Cedula de Ciudadanía</option>{' '}
						{/* Corregido "Ciudadania" por "Ciudadanía" */}
						<option value='passport'>Pasaporte</option>
						<option value='license'>Documento Extranjero</option>
					</select>
					<p>Número</p> {/* Corregido "Numero" por "Número" */}
					<input
						type='int'
						name='name'
						id='int'
						required
						autoComplete='off'
						placeholder='Número de Documento '
					/>
					<label htmlFor='Numero de Documento'></label>
					<p>Fecha de nacimiento</p>
					<input
						type='date'
						name='name'
						id='date'
						required
						autoComplete='off'
						placeholder='Fecha de nacimiento '
					/>
					<label htmlFor='date'></label>
					<p>Género</p> {/* Corregido "Genero" por "Género" */}
					<select name='documentType' id='documentType' required>
						<option value='dni'>Masculino</option>
						<option value='passport'>Femenino</option>
						<option value='license'>Otro</option>
					</select>
				</div>
				<div className='columna-2'>
					<div className='log1'>
						<img src={logo} alt='logo' />
						<h2>GreenBox 2</h2>
					</div>
					<p>Estado civil</p>
					<select name='documentType' id='documentType' required>
						<option value='dni'>Soltero</option>
						<option value='passport'>Casado</option>
						<option value='license'>Unión Libre</option>{' '}
						{/* Corregido "Union Libre" por "Unión Libre" */}
						<option value='license'>Viudo</option>
					</select>
					<p>País</p> {/* Corregido "Pais" por "País" */}
					<input
						type='text'
						name='country'
						id='country'
						required
						autoComplete='off'
						placeholder='País'
					/>
					<label htmlFor='country'></label>
					<p>Ciudad</p>
					<input
						type='text'
						name='city'
						id='city'
						required
						autoComplete='off'
						placeholder='Ciudad'
					/>
					<label htmlFor='city'></label>
					<p>Dirección</p> {/* Corregido "Direccion" por "Dirección" */}
					<input
						type='text'
						name='address'
						id='address'
						required
						autoComplete='off'
						placeholder='Dirección'
					/>
					<label htmlFor='address'></label>
					<p>Teléfono</p> {/* Corregido "Telefono" por "Teléfono" */}
					<input
						type='tel'
						name='phone'
						id='phone'
						required
						autoComplete='off'
						placeholder='Teléfono'
					/>
					<label htmlFor='phone'></label>
					<div className='columna2'>
						<button>Guardar</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Perfil; // Exporta Perfil para poder usarlo en otros archivos
