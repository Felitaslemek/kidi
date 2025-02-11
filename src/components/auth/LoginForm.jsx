import React from "react";

const LoginForm = ({
	name,
	setName,
	email,
	setEmail,
	password,
	setPassword,
	showPassword,
	setShowPassword,
	login,
	isSuccess,
}) => (
	<div className="bg-white w-full max-w-5xl rounded-lg shadow-lg overflow-hidden relative">
		{/* Notifikasi berhasil */}
		{isSuccess && <div>Login successful!</div>}
		<form onSubmit={login}>
			{/* Form fields */}
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Name"
			/>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
			/>
			<input
				type={showPassword ? "text" : "password"}
				value={password}
				onChange={(e) =>
					setPassword(e.target.value)
				}
				placeholder="Password"
			/>
			<button type="submit">Login</button>
		</form>
	</div>
);

export default LoginForm;
