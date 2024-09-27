// /app/pages/index.tsx
import React from "react";
import Leaderboard from "@/components/Leaderboard";
import TaskList from "@/components/TaskList";
import ReferralSection from "@/components/ReferralSection";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to $COCKS Airdrop App</h1>
      <Leaderboard />
      <TaskList />
      <ReferralSection />
    </main>
  );
};

export default Home;
