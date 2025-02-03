const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

exports.updateStoreStatus = functions.pubsub.schedule("every 1 minutes").onRun(async (context) => {
    const now = new Date();
    const currentHour = now.getHours();

    // Periksa jam dan tentukan status
    const storeStatus = currentHour >= 17 && currentHour < 22 ? "is_open" : "is_closed";

    try {
        // Perbarui status toko di Firestore
        await db.collection("store").doc("status").set({ status: storeStatus });
        console.log(`Store status updated to ${storeStatus}`);
    } catch (error) {
        console.error("Error updating store status:", error);
    }

    return null;
});
