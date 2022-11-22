/*
import React, { createContext, useState, useContext, useCallback } from "react";
import { api } from "../services/api";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  id: string;
  name: string;
  email: string;
}

interface RefreshToken {
  id: string;
  expires_in: number;
  adminId: string;
}

interface AuthState {
  token: string;
  user: User;
  refreshToken: RefreshToken;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type Props = {
  children?: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const refreshToken = localStorage.getItem("@MyReplenisher:refreshToken");
    const token = localStorage.getItem("@MyReplenisher:token");
    const user = localStorage.getItem("@MyReplenisher:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
        refreshToken: JSON.parse(refreshToken!),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("sessions", { email, password });
    const { refreshToken, token, user } = response.data;

    localStorage.setItem("@MyReplenisher:token", token);
    localStorage.setItem("@MyReplenisher:user", JSON.stringify(user));
    localStorage.setItem("@MyReplenisher:refreshToken", JSON.stringify(refreshToken));

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setData({ refreshToken, token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@MyReplenisher:refreshToken");
    localStorage.removeItem("@MyReplenisher:token");
    localStorage.removeItem("@MyReplenisher:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used ithin a AuthProvideru");
  }

  return context;
}

// eslint-disable-next-line import/no-anonymous-default-export
export { AuthProvider, useAuth };
*/