"use client"
import Auth from "@/components/auth/Auth";
import Header from "@/components/header/Header";
import HomeSection from "@/components/home/HomeSection";
import { useGlobal } from "@/context/GlobalContext";

export default function Home() {
  const {isAuthOpen} = useGlobal();
  return (
      <main className="flex min-h-screen">
        {isAuthOpen && <Auth />}
        <Header />
        <HomeSection />
      </main>
  );
}
