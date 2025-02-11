import { useState } from "react";
import { handleLogin } from "../utils";

const useLogin = () => {
    const [name, setName] = useState(""); // Nama pengguna (opsional)
    const [email, setEmail] = useState(""); // Email pengguna
    const [password, setPassword] = useState(""); // Password pengguna
    const [showPassword, setShowPassword] = useState(false); // Tampilkan atau sembunyikan password
    const [isSuccess, setIsSuccess] = useState(false); // Notifikasi keberhasilan login

    const login = (e) => handleLogin(e, email, password, setIsSuccess);

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        isSuccess,
        login,
    };
};

export default useLogin;