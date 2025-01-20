"use client";

import { useState } from "react";
import { z } from "zod";
import { signInSchema, SignInFormData } from "@/app/(auth)/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Signin() {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate form data using the schema
      signInSchema.parse(formData);
      console.log("Form submitted", formData);
      setErrors({});
    } catch (err) {
      // Catch and handle Zod validation errors
      if (err instanceof z.ZodError) {
        const formattedErrors: { [key: string]: string } = {};
        err.errors.forEach((issue) => {
          if (issue.path[0]) {
            formattedErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/path-to-your-anime-themed-background.jpg')] bg-cover bg-center opacity-20"></div>
        <Card className="w-full max-w-lg shadow-2xl bg-opacity-90 bg-gray-900 relative z-10">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-extrabold text-pink-400">
              Welcome Back!
            </CardTitle>
            <p className="text-sm text-gray-400">
              Sign in to continue exploring Anime World!
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="bg-gray-800 border border-gray-700 text-white"
                />
                {errors.email && (
                  <p className="text-pink-500 text-sm">{errors.email}</p>
                )}
              </div>
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
                  className="bg-gray-800 border border-gray-700 text-white"
                />
                {errors.password && (
                  <p className="text-pink-500 text-sm">{errors.password}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-lg"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-pink-400 hover:underline">
              Sign Up
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
