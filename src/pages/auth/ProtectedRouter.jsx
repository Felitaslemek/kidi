import React from "react";
import { Navigate } from "react-router-dom";
import ErrorBoundary from "../../errors/errorBoundary";

const ProtectedRoute = ({ role, children }) => {
	if (role === null) {
		return <p>Loading...</p>; // Menampilkan loading jika role belum diketahui
	}

	return role === "admin" ? (
		children
	) : (
		<ErrorBoundary>
			<Navigate to="../pages/admin/Dashboard" />
		</ErrorBoundary>
	);
};

export default ProtectedRoute;
