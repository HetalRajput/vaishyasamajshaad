// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element, redirectTo }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to={redirectTo} /> : element;
};

export default ProtectedRoute;
