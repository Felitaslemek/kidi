import { createContext, useContext, useState, useEffect } from "react";
import { getTestimoniList } from "../utils/storeUtils";

const TestimoniContext = createContext();

export const TestimoniProvider = ({ children }) => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const data = await getTestimoniList();
                setTestimonials(data);
            } catch (error) {
                console.error("Gagal mengambil testimoni:", error);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <TestimoniContext.Provider value={{ testimonials, setTestimonials }}>
            {children}
        </TestimoniContext.Provider>
    );
};

export const useTestimoni = () => useContext(TestimoniContext);
