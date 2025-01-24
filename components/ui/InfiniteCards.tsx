"use client";

import { cn, getIconNode } from "@/lib/utils";
import React, { useEffect, useState } from "react";

import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: StarsParams[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        // max-w-7xl to w-screen
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          // change gap-16
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map(({ review = 0, imgIcon, title }, idx) => (
          <li className="flex items-center gap-4" key={idx}>
            <span>
              {getIconNode(
                imgIcon,
                (className = "lg:w-32 md:w-20 w-16 text-[6rem]")
              )}
            </span>
            <div>
              <h2 className="text-[2rem] text-end text-purple">{title}</h2>
              <div className="flex">
                {reviewDefinition[review] &&
                  reviewDefinition[review].map((icon, index) => (
                    <span key={index} className="md:text-[4rem] text-[2rem]">
                      {icon === "FaRegStar" && (
                        <FaRegStar className="text-white" />
                      )}
                      {icon === "FaStar" && <FaStar className="text-white" />}
                      {icon === "FaStarHalfAlt" && (
                        <FaStarHalfAlt className="text-white" />
                      )}
                    </span>
                  ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

type ReviewDefinition = {
  0: string[];
  0.5: string[];
  1: string[];
  1.5: string[];
  2: string[];
  2.5: string[];
  3: string[];
  3.5: string[];
  4: string[];
  4.5: string[];
  5: string[];
};

const reviewDefinition: ReviewDefinition = {
  0: ["FaRegStar", "FaRegStar", "FaRegStar", "FaRegStar", "FaRegStar"],
  0.5: ["FaStarHalfAlt", "FaRegStar", "FaRegStar", "FaRegStar", "FaRegStar"],
  1: ["FaStar", "FaRegStar", "FaRegStar", "FaRegStar", "FaRegStar"],
  1.5: ["FaStar", "FaStarHalfAlt", "FaRegStar", "FaRegStar", "FaRegStar"],
  2: ["FaStar", "FaStar", "FaRegStar", "FaRegStar", "FaRegStar"],
  2.5: ["FaStar", "FaStar", "FaStarHalfAlt", "FaRegStar", "FaRegStar"],
  3: ["FaStar", "FaStar", "FaStar", "FaRegStar", "FaRegStar"],
  3.5: ["FaStar", "FaStar", "FaStar", "FaStarHalfAlt", "FaRegStar"],
  4: ["FaStar", "FaStar", "FaStar", "FaStar", "FaRegStar"],
  4.5: ["FaStar", "FaStar", "FaStar", "FaStar", "FaStarHalfAlt"],
  5: ["FaStar", "FaStar", "FaStar", "FaStar", "FaStar"],
};

type ReviewKey = keyof typeof reviewDefinition;

export type StarsParams = {
  review?: ReviewKey;
  imgIcon: string;
  title: string;
};
