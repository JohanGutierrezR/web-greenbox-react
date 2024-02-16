import React from 'react'; // Importa React
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate de react-router-dom
import { useForm } from '../components/hook/useForm'; // Importa useForm
import '../components/css/Login.css';
import logo from '../img/Logo.png';

export const Login = () => {
	const navigate = useNavigate();

	const { name, email, password, onInputChange, onResetForm } = useForm({
		name: '',
		email: '',
		password: '',
	});

	const onLogin = e => {
		e.preventDefault();
		navigate('/dashboard', {
			replace: true,
			state: {
				logged: true,
				name,
			},
		});
		onResetForm();
	};

	return (
		<div className='encabezado-login'>
			<div className='logo-login'>
				<Link to='/'>
					<img src={logo} alt='logo' />
				</Link>
				<h2>
					GreenBox <br />
					<span>Te conecta con el campo</span>
				</h2>
			</div>
			<div className='formulario'>
				<form onSubmit={onLogin}>
					<h1>Inicio de sesión</h1> {/* Corregido "seccion" por "sesión" */}
					<div className='input-group'>
						<input
							type='text'
							name='name'
							id='name'
							value={name}
							onChange={onInputChange}
							required
							autoComplete='off'
							placeholder='Nombre de usuario'
						/>
						<label htmlFor='name'></label>
					</div>
					<div className='input-group'>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={onInputChange}
							required
							autoComplete='off'
							placeholder='Correo electrónico'
						/>
						<label htmlFor='email'></label>
					</div>
					<div className='input-group'>
						<input
							type='password'
							name='password'
							id='password'
							value={password}
							onChange={onInputChange}
							required
							autoComplete='off'
							placeholder='Contraseña'
						/>
						<label htmlFor='password'></label>
					</div>
					<div className='recordar'>¿Olvidó su contraseña?</div>{' '}
					{/* Corregido "¿Olvido su contraseña?" por "¿Olvidó su contraseña?" */}
					<button className='iniciar'>Iniciar sesión</button>
				</form>
			</div>
		</div>
	);
};

export default Login; // Exporta Login para poder usarlo en otros archivos
