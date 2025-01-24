"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

import { projects } from "@/data";

const RecentProjects = () => {
  const cards = projects.map((card, index) => (
    <Card key={card.img} card={card} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <Carousel items={cards} />
      </div>
    </div>
  );
};

export default RecentProjects;
