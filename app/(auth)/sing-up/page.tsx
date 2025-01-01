"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

type FormData = {
  username: string;
  email: string;
  password: string;
};

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {/* Form Card */}
      <Card className="w-full max-w-lg shadow-2xl bg-gray-900 bg-opacity-95 relative z-10 p-6 rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold text-pink-400">
            Welcome to Anime World
          </CardTitle>
          <p className="text-sm text-gray-400 mt-2">
            Create your account to explore your favorite anime!
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="username" className="text-gray-300">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Your username"
                value={formData.username}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-lg transition duration-300"
            >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-pink-400 hover:underline">
            Log In
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
