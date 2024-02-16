import React from 'react'; // Importa React
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import {
	Dashboard,
	Home,
	Login,
	Lugares,
	Productos,
	Registro,
	Perfil,
	Ayuda,
	Categorias,
	Comprar,
	Frutas,
	Vegetales,
	Cereales,
	Legumbres,
	Especias,
	Calendario,
	Venta,
} from '../pages';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='home' element={<Home />} />
				<Route path='/' element={<Navbar />}>
					<Route path='login' element={<Login />} />
					<Route path='registro' element={<Registro />} />
					<Route
						path='dashboard'
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
				</Route>

				<Route path='productos' element={<Productos />} />
				<Route path='lugares' element={<Lugares />} />
				<Route path='categorias' element={<Categorias />} />
				<Route path='perfil' element={<Perfil />} />
				<Route path='ayuda' element={<Ayuda />} />
				<Route path='comprar' element={<Comprar />} />
				<Route path='frutas' element={<Frutas />} />
				<Route path='vegetales' element={<Vegetales />} />
				<Route path='cereales' element={<Cereales />} />
				<Route path='legumbres' element={<Legumbres />} />
				<Route path='especias' element={<Especias />} />
				<Route path='calendario' element={<Calendario />} />
				<Route path='venta' element={<Venta />} />
			</Routes>
		</>
	);
};

export default AppRouter; // Exporta AppRouter para poder usarlo en otros archivos
