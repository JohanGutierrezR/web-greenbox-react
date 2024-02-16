import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
	const { state } = useLocation();

	return state?.logged ? children : <Navigate to='/login' />;
};

// Agrega la validación de propTypes
ProtectedRoute.propTypes = {
	children: PropTypes.node, // Asegúrate de que children sea de tipo 'node'
};

export default ProtectedRoute;
