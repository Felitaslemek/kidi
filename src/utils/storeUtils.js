import { collection, addDoc, getDoc, doc, query, orderBy, limit, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// Format harga menjadi mata uang Rupiah
export const formatCurrency = (value) => {
    if (typeof value !== "string") {
        value = String(value); // Ubah ke string jika bukan string
    }
    const numberString = value.replace(/[^0-9]/g, ""); // Hanya angka
    const number = Number(numberString) || 0;
    return "Rp " + number.toLocaleString("id-ID"); // Format ke Rupiah
};

// Fungsi untuk memeriksa status login pengguna
export const isUserLoggedIn = () => {
    return localStorage.getItem("users") !== null;
};

// Fungsi untuk menyimpan data pengguna ke localStorage
export const saveUserToLocalStorage = (user) => {
    localStorage.setItem("users", JSON.stringify(user));
};

// Fungsi untuk mendapatkan data pengguna dari localStorage
export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("users");
    return user ? JSON.parse(user) : null;
};

// Fungsi untuk menghapus data pengguna dari localStorage
export const logoutUser = () => {
    localStorage.removeItem("users");
};

// Fungsi untuk mendapatkan data pengguna dari Firestore berdasarkan UID
export const getUserDataFromFirestore = async (uid) => {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};

// Fungsi untuk menambahkan testimoni jika pengguna sudah login
export const addTestimonial = async (message, rating) => {
    const user = getUserFromLocalStorage();
    if (!user) {
        alert("Anda harus login terlebih dahulu untuk memberikan testimoni.");
        return;
    }

    try {
        const userData = await getUserDataFromFirestore(user.uid);
        if (!userData) {
            alert("Data pengguna tidak ditemukan.");
            return;
        }

        await addDoc(collection(db, "testimonials"), {
            name: userData.name,
            email: userData.email,
            message,
            rating,
            createdAt: new Date()
        });
        alert("Testimoni berhasil ditambahkan!");
    } catch (error) {
        console.error("Error adding testimonial:", error);
        alert("Gagal menambahkan testimoni.");
    }
};


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

// Fungsi untuk menambahkan menu baru
export const addMenu = async (name, price, imageBase64) => {
    try {
        const docRef = await addDoc(collection(db, "product"), {
            name,
            price,
            image: imageBase64, // Simpan sebagai string base64
        });
        return docRef.id;
    } catch (error) {
        console.error("Error adding menu:", error);
        throw error;
    }
};

//Edit Menu
export const updateMenu = async (id, name, price, imageBase64) => {
    try {
        const menuRef = doc(db, "product", id);
        await updateDoc(menuRef, {
            name,
            price,
            image: imageBase64,
        });
        console.log(`Menu dengan ID ${id} telah diperbarui.`);
    } catch (error) {
        console.error("Error updating menu:", error);
        throw error;
    }
};

// Hapus menu
export const deleteMenu = async (id) => {
    try {
        const menuRef = doc(db, "product", id);
        await deleteDoc(menuRef);
        console.log(`Menu dengan ID ${id} telah dihapus.`);
    } catch (error) {
        console.error("Error deleting menu:", error);
        throw error;
    }
};

//Mengambil Menu
export const getMenuList = async () => {
    try {
        const menuRef = collection(db, "product");
        const menuQuery = query(menuRef);
        const querySnapshot = await getDocs(menuQuery);

        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return data;
    } catch (error) {
        console.error("Error fetching menus:", error);
        throw error;
    }
};


