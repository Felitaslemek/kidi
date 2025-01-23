/components/auth/LoginPage.jsx
import React from "react";
import ErrorBoundary from "../../errors/errorBoundary";
import useLogin from "../../hooks/useLogin";
import LoginForm from "../LoginForm";

const LoginPage = () => {
    const {
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
    } = useLogin();

    return (
        <ErrorBoundary>
            <LoginForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                login={login}
                isSuccess={isSuccess}
            />
        </ErrorBoundary>
    );
};

export default LoginPage;