import React, {
	useState,
	useEffect,
} from "react";
import { Navigate } from "react-router-dom";
import {
	auth,
	db,
} from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const ProtectedRoute = ({ role, children }) => {
	const [userRole, setUserRole] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(
			auth,
			async (user) => {
				if (user) {
					const userDoc = await getDoc(
						doc(db, "users", user.uid)
					);
					if (userDoc.exists()) {
						setUserRole(userDoc.data().role);
					} else {
						setUserRole("guest");
					}
				} else {
					setUserRole(null);
				}
				setLoading(false);
			}
		);

		return () => unsubscribe();
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (userRole === role) {
		return children;
	}

	return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
