"use client";

import { navItems } from "@/data/index";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import TechStack from "@/components/stack";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { NavigationBar } from "@/components/FloatingDock";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavigationBar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <TechStack />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
