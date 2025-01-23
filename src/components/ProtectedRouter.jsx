import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, children }) => {
	if (role === null) {
		return <p>Loading...</p>; // Menampilkan loading jika role belum diketahui
	}

	return role === "admin" ? (
		children
	) : (
		<Navigate to="../pages/admin/Dashboard" />
	);
};

export default ProtectedRoute;
