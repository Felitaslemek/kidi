import {
	getFirestore,
	doc,
	getDoc,
} from "firebase/firestore";
import app from "./firebaseConfig";

const db = getFirestore(app);

const getUserRole = async (userId) => {
	const userDoc = await getDoc(
		doc(db, "users", userId)
	);
	return userDoc.exists()
		? userDoc.data().role
		: null;
};

export { db, getUserRole };
