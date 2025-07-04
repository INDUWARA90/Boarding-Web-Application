import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getValues() {
    if (!email.trim() || !password.trim()) {
      alert("All fields are required!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    const user = { email, newPassword: password };
    console.log(user);
    alert("Password reset successful!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl sm:p-10 md:max-w-lg lg:max-w-xl">

        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Reset Password
        </h1>

        <div className="grid gap-5">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter New Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300"
            onClick={getValues}
          >
            Reset Password
          </button>

          <p className="text-center text-sm text-gray-700 mt-2">
            Remember your password?{' '}
            <Link to="/" className="text-indigo-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
