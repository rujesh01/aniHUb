import React from "react";

const SignInPage: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          🔑 Welcome Back!
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Sign in to continue exploring the AniHub!
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="youremail@example.com"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="/sing-up" className="text-gray-300 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
