"use client";

import { createContext, useEffect, useState } from "react";
import decode from "jwt-decode";
import { notifyError, notifySuccess } from "@/components/Notifications";

type User = {
  username: string;
  password: string;
};

type SignInData = {
  username: string;
  password: string;
};

type SignUpData = {
  username: string;
  password: string;
  office: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<boolean|void>;
  signUp: (data: SignUpData) => Promise<boolean|void>;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const userToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("nextAuth.token="))
      ?.split("=")[1];

    if (userToken) {
      const decodedToken: any = decode(userToken);

      setUser({
        username: decodedToken.name,
        password: decodedToken.email,
      });
    }
  }, []);

  async function signIn({ username, password }: SignInData) {
    try {
      let positiveResponse = false;
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return notifyError("Falha ao realizar o login");
      }

      const { User, token, Error } = await response.json();

      if (Error) {
        return notifyError(Error);
      }

      const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
      document.cookie = `nextAuth.token=${token}; path=/; expires=${twoHoursFromNow.toUTCString()}`;

      setUser(User);

      notifySuccess("Login feito com sucesso!","/home")
      positiveResponse = true
      return positiveResponse;
    } catch (error: any) {
      console.log(error);
    }
  }

  async function signUp({ username, password, office }: SignUpData) {
    try {
      let positiveResponse = false;
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
          office: office,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return notifyError("Falha ao realizar o cadastro");
      }

      const { User, token, Error } = await response.json();

      if (Error) {
        return notifyError(Error);
      }

      const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
      document.cookie = `nextAuth.token=${token}; path=/; expires=${twoHoursFromNow.toUTCString()}`;

      setUser(User);
      
      notifySuccess("Usuário registrado com sucesso!","/home")
      positiveResponse = true
      return positiveResponse;
    } catch (error: any) {
      alert(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}