"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

type FormData = {
  email: string;
  password: string;
};

export default function Signin() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signin logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white flex items-center justify-center">
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/path-to-your-anime-themed-background.jpg')] bg-cover bg-center opacity-20"></div>
      <Card className="w-full max-w-lg shadow-2xl bg-opacity-90 bg-gray-900 relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-pink-400">Welcome Back!</CardTitle>
          <p className="text-sm text-gray-400">Sign in to continue exploring Anime World!</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-lg">Sign In</Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-400">
          Don't have an account? <a href="/signup" className="text-pink-400 hover:underline">Sign Up</a>
        </CardFooter>
      </Card>
    </div>
  </div>
  );
}
