import { onSchedule } from "firebase-functions/v2/scheduler";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Inisialisasi Firebase
initializeApp();
const db = getFirestore();

// Fungsi update status toko setiap 1 menit
export const updateStoreStatus = onSchedule(
    {
        schedule: "every 1 minutes",
        timeZone: "Asia/Jakarta",
    },
    async () => {
        const now = new Date();
        const hours = now.getHours();

        let storeStatus = "closed";
        if (hours >= 17 && hours < 22) {
            storeStatus = "open";
        }

        try {
            await db.collection("store").doc("status").set({ status: storeStatus });
            console.log(`✅ Store status updated to ${storeStatus}`);
        } catch (error) {
            console.error("❌ Error updating store status:", error);
        }
    }
);
