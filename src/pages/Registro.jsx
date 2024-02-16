import React from 'react'; // Importa React
import { useForm } from '../components/hook/useForm';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/Logo.png';
import '../components/css/Registro.css';

export const Registro = () => {
	const navigate = useNavigate();

	const {
		name,
		email,
		password,
		date,
		pais,
		ciudad,
		direccion,
		telefono,
		onInputChange,
		onResetForm,
	} = useForm({
		name: '',
		email: '',
		password: '',
		date: '',
		pais: '',
		ciudad: '',
		direccion: '',
		telefono: '',
	});

	const onRegister = e => {
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

			<div onSubmit={onRegister} className='form-container'>
				<form className='form1'>
					<div className='column'>
						<h1>Registra tus datos</h1>
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
								placeholder='Correo eletronico'
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

						<div className='input-group'>
							<input
								type='date'
								name='date'
								id='date'
								value={date}
								onChange={onInputChange}
								required
								autoComplete='off'
								placeholder='Fecha de Nacimiento'
							/>
							<label htmlFor='date'></label>
						</div>
					</div>
					<div className='column1'>
						<div className='input-group'>
							<input
								type='text'
								name='pais'
								id='pais'
								value={pais}
								onChange={onInputChange}
								required
								autoComplete='off'
								placeholder='País'
							/>
							<label htmlFor='pais'></label>
						</div>
						<div className='input-group'>
							<input
								type='text'
								name='ciudad'
								id='ciudad'
								value={ciudad}
								onChange={onInputChange}
								required
								autoComplete='off'
								placeholder='Ciudad'
							/>
							<label htmlFor='ciudad'></label>
						</div>
						<div className='input-group'>
							<input
								type='text'
								name='direccion'
								id='direccion'
								value={direccion}
								onChange={onInputChange}
								required
								autoComplete='off'
								placeholder='Dirección'
							/>
							<label htmlFor='direccion'></label>
						</div>
						<div className='input-group'>
							<input
								type='text'
								name='telefono'
								id='telefono'
								value={telefono}
								onChange={onInputChange}
								required
								autoComplete='off'
								placeholder='Teléfono'
							/>
							<label htmlFor='telefono'></label>
						</div>
						<button type='submit' className='registrar'>
							Registrarse
						</button>{' '}
						{/* Agregué type="submit" al botón para que funcione el formulario */}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Registro; // Exporta Registro para poder usarlo en otros archivos
