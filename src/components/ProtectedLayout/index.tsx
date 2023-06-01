import { useAuth } from "@/context/AuthProvider/useAuth";

export const ProtectedLayot = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>You don't have acess!</h1>;
  }

  return children;
};
