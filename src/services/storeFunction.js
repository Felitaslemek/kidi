const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.updateStoreStatus = functions.pubsub.schedule("every 1 minutes").onRun(async (context) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    let storeStatus = "is_closed";
    let color = "blue"; // Default warna biru

    // Periksa jam dan tentukan status
    if ((hours === 17 && minutes >= 0) || (hours > 17 && hours < 7) || (hours === 23 && minutes < 30)) {
        storeStatus = "is_open";
        color = "red"; // Ubah warna menjadi merah
    }

    try {
        // Perbarui status toko di Firestore
        await db.collection("store").doc("status").set({ status: storeStatus });
        console.log(`Store status updated to ${storeStatus}`);
    } catch (error) {
        console.error("Error updating store status:", error);
    }

    return null;
});

