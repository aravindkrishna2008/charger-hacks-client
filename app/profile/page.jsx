import { ProfileForm } from "../components/inputform";
import { ModeToggle } from "../components/ui/darkmode";

export default function ProfilePage() {
  return (
    <div>
        <ModeToggle />
        <ProfileForm method='su' />
    </div>
  );
}