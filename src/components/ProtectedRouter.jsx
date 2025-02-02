import React, {useState,useEffect,} from "react";
import { Navigate } from "react-router-dom";
import {auth,db,} from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const ProtectedRoute = ({ role, children }) => {
	const [userRole, setUserRole] = useState(null); // Role pengguna
	const [loading, setLoading] = useState(true); // Status loading

	useEffect(() => {
		// Mengecek apakah user sudah login
		const unsubscribe = onAuthStateChanged(
			auth,
			async (user) => {
				if (user) {
					// Ambil data user dari Firestore
					const userDoc = await getDoc(
						doc(db, "users", user.uid)
					);
					if (userDoc.exists()) {
						setUserRole(userDoc.data().role); // Set role pengguna
					} else {
						setUserRole("guest"); // Default jika tidak ada data user
					}
				} else {
					setUserRole(null); // Jika tidak login
				}
				setLoading(false); // Selesai loading
			}
		);

		return () => unsubscribe(); // Cleanup listener
	}, []);

	if (loading) {
		return <p>Loading...</p>; // Sementara loading
	}

	if (userRole === role) {
		return children; // Izinkan akses jika role cocok
	}

	// Redirect jika tidak memiliki role yang sesuai
	return <Navigate to="admin/Dashboard" replace />;
};

export default ProtectedRoute;
