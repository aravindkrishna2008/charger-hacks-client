"use client";
import PfpAndWelcome from "./components/pfpandwelcome";
import Card from "./components/card";
import ThreeButtons from "./components/3buttons";
import SwipeUp from "./components/swipeUp";

export default function Home() {
  return (
    <div className="h-[100vh] pb-0 flex flex-col flex-1">
      <div className="p-[25px]">
        <PfpAndWelcome />
        <Card />
        <ThreeButtons />
      </div>
      <SwipeUp />
    </div>
  );
}
