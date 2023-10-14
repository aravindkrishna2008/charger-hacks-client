import Image from "next/image";
import PfpAndWelcome from "./components/pfpandwelcome";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="p-[25px]">
      <PfpAndWelcome />
      <Card />
    </div>
  );
}
