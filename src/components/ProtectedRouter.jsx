import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ role, email, children }) => {
  const adminEmails = ["admin@example.com", "superadmin@example.com"]; // Daftar email khusus admin

  if (role === null) {
    return <p>Loading...</p>; // Menampilkan loading jika role belum diketahui
  }

  // Periksa apakah email user adalah email admin
  const isAdmin = adminEmails.includes(email);

  return role === "admin" && isAdmin ? (
    children
  ) : (
    <Navigate to="../pages/admin/Dashboard" />
  );
};

export default ProtectedRoute;
