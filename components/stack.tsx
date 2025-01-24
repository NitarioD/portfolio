"use client";

import React from "react";

import { companies, stackDetails } from "@/data";
import { InfiniteMovingCards, StarsParams } from "./ui/InfiniteCards";
import Image from "next/image";

const TechStack = () => {
  return (
    <section id="stack" className="py-20">
      <h1 className="heading">
        Tech
        <span className="text-purple"> stack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="md:h-[50vh] h-[27vh] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={stackDetails as StarsParams[]}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  width={40}
                  height={40}
                  className="md:w-40 w-15"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
