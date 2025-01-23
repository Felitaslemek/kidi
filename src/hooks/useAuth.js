import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseAuth";
import { getUserRole } from "../firebase/firebaseDB";

const useAuth = () => {
	const [user, setUser] = useState(null);
	const [role, setRole] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(
			auth,
			async (currentUser) => {
				if (currentUser) {
					setUser(currentUser);
					const userRole = await getUserRole(
						currentUser.uid
					);
					setRole(userRole);
				} else {
					setUser(null);
					setRole(null);
				}
				setLoading(false);
			}
		);

		return () => unsubscribe();
	}, []);

	return { user, role, loading };
};

export default useAuth;
