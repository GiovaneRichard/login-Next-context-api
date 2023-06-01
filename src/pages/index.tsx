import { Inter } from "next/font/google";
import { Login } from "./Login";
import { ProtectedLayot } from "@/components/ProtectedLayout";
import { Profile } from "./Profile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ProtectedLayot>
        <Profile />
      </ProtectedLayot>
    </>
  );
}
