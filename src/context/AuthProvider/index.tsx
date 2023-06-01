import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUseLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  const authenticate = async (email: string, password: string) => {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };

    setUser(payload);
    setUseLocalStorage(payload);
  };

  const logout = async () => {
    setUser(null);
    setUseLocalStorage(null);
  };

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
