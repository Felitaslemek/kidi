import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// Fungsi untuk mendapatkan status toko
export const getStoreStatus = async () => {
    try {
        const storeRef = doc(db, "store", "EMQVnvYaxnwqnUiPQZsG");
        const storeSnap = await getDoc(storeRef);

        if (storeSnap.exists()) {
            return storeSnap.data().status;
        } else {
            console.error("No store status found. Defaulting to 'closed'.");
            return "closed";
        }

    } catch (error) {
        console.error("Error fetching store status:", error);
        throw error;
    }
};

// Fungsi untuk mengubah status toko secara manual
export const toggleStoreStatus = async (currentStatus) => {
    try {
        const newStatus = currentStatus === "open" ? "closed" : "open";
        const storeRef = doc(db, "store", "EMQVnvYaxnwqnUiPQZsG");
        await updateDoc(storeRef, { status: newStatus });
        return newStatus;
    } catch (error) {
        console.error("Error toggling store status:", error);
        throw error;
    }
};
