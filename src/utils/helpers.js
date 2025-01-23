export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
        });
    }
};

export const openSignupPage = (setIsSignupPageVisible) => {
    setIsSignupPageVisible(true);
};

export const closeSignupPage = (setIsSignupPageVisible) => {
    setIsSignupPageVisible(false);
};

export const handleLogin = async (e, email, password, setIsSuccess) => {
    e.preventDefault(); // Mencegah form submit default
    try {
        await signInWithEmailAndPassword(auth, email, password);
        setIsSuccess(true); // Login berhasil
        alert("Login successful!");
        // Lakukan redirect atau aksi lain setelah login berhasil
    } catch (error) {
        console.error("Login failed:", error.message);
        setIsSuccess(false); // Reset status keberhasilan
        alert("Login failed. Please try again.");
    }
};