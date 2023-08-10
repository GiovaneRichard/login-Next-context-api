import { ProtectedLayot } from "@/components/ProtectedLayout";
import { Profile } from "./Profile";

export default function Home() {
  return (
    <>
      <ProtectedLayot>
        <Profile />
      </ProtectedLayot>
    </>
  );
}
