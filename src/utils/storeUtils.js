import { collection, addDoc, query, orderBy, limit, getDocs, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
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

// Fungsi untuk mendapatkan list testimoni
export const getTestimoniList = async () => {
    try {
        const testimoniRef = collection(db, "testimoni");

        // Ambil maksimal 10 testimoni terbaru
        const testimoniQuery = query(testimoniRef, orderBy("timestamp", "desc"), limit(10));
        const querySnapshot = await getDocs(testimoniQuery);

        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return data;
    } catch (error) {
        console.error("Error fetching testimonies:", error);
        throw error;
    }
};


// Fungsi untuk menghapus testimoni
export const deleteTestimoni = async (id) => {
    try {
        const testimoniRef = doc(db, "testimoni", id);
        await deleteDoc(testimoniRef);
        console.log(`Testimoni dengan ID ${id} telah dihapus.`);
    } catch (error) {
        console.error("Error deleting testimony:", error);
        throw error;
    }
};

// Fungsi untuk menambahkan testimoni baru
export const addTestimoni = async (nama, email, rating, pesan) => {
    try {
        let testimoniData = {
            name: nama,
            email: email,
            rating: rating,
            pesan: pesan
        };
        const docRef = await addDoc(collection(db, "testimoni"), testimoniData);
        return docRef.id;
    } catch (error) {
        console.error("Error adding testimoni:", error);
        throw error;
    }
};

export const addTestimoniWithLimit = async (nama, email, rating, pesan) => {
    try {
        const testimoniRef = collection(db, "testimoni");

        // Ambil testimoni terbaru (dengan timestamp)
        const testimoniQuery = query(testimoniRef, orderBy("timestamp", "desc"), limit(10));
        const querySnapshot = await getDocs(testimoniQuery);

        let data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        // **Tambahkan batasan jika sudah ada 10 testimoni**
        if (data.length >= 10) {
            console.log("Testimoni sudah mencapai batas 10, menghapus yang paling lama...");

            // Query untuk mencari testimoni paling lama
            const oldestQuery = query(testimoniRef, orderBy("timestamp", "asc"), limit(1));
            const oldestSnapshot = await getDocs(oldestQuery);

            if (!oldestSnapshot.empty) {
                const oldestDoc = oldestSnapshot.docs[0];
                await deleteDoc(doc(db, "testimoni", oldestDoc.id));
                console.log(`Testimoni lama dengan ID ${oldestDoc.id} dihapus.`);
            }
        }

        // **Tambahkan testimoni baru**
        const docRef = await addDoc(testimoniRef, {
            name: nama,
            email: email,
            rating: rating,
            pesan: pesan,
            timestamp: new Date(), // **Pastikan timestamp ada**
        });

        return docRef.id;
    } catch (error) {
        console.error("Error adding testimoni:", error);
        throw error;
    }
};

