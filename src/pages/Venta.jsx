import React from 'react'; // Importa React
import { Link } from 'react-router-dom';
import { Navegacion } from '../components/Navegacion';
import '../components/css/Venta.css';

export const Venta = () => {
	return (
		<div>
			<Navegacion />
			<div className='venta'>
				<form className='formulario-venta '>
					<h1>Indica tu producto y tipo de producto</h1>
					<div className='input-formulario-venta'>
						<input
							type='text'
							name='descripcion'
							id='descripcion'
							required
							autoComplete='off'
							placeholder='Ej, Fruta, Manzana'
						/>
						<label htmlFor='descripcion'></label>
					</div>
					<div className='input-formulario-venta'>
						<input
							type='float'
							name='float'
							id='float'
							required
							autoComplete='off'
							placeholder='Precio '
						/>
						<label htmlFor='Float'></label>
					</div>
					<div className='input-formulario-venta'>
						{' '}
						<input
							type='text'
							name='Lugar'
							id='Lugar'
							required
							autoComplete='off'
							placeholder='Lugar '
						/>
						<label htmlFor='Lugar'></label>
					</div>
					<div className='input-formulario-venta'>
						<input
							type='text'
							name='name'
							id='name'
							required
							autoComplete='off'
							placeholder='Nombres '
						/>
						<label htmlFor='name'></label>
					</div>
					<div className='input-formulario-venta'>
						<input
							type='text'
							name='descripcion'
							id='descripcion'
							required
							autoComplete='off'
							placeholder='Descripcion '
						/>
						<label htmlFor='Descripcion'></label>
					</div>
					<div className='input-formulario-venta'>
						<input
							type='int'
							name='cantidad'
							id='cantidad'
							required
							autoComplete='off'
							placeholder='Cantidad'
						/>
						<label htmlFor='Cantidad'></label>
					</div>
					<button className='registrarse'>
						<Link to='/categorias' className='no-underline'>
							Vender
						</Link>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Venta; // Exporta Venta para poder usarlo en otros archivos
