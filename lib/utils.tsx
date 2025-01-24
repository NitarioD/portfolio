import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { BiLogoRedux, BiLogoTailwindCss } from "react-icons/bi";
import {
  SiGraphql,
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiSupabase,
} from "react-icons/si";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIconNode = (icon: string, className?: string) => {
  switch (icon) {
    case "FaNodeJs":
      return <FaNodeJs className={className} />;
    case "BiLogoTailwindCss":
      return <BiLogoTailwindCss className={className} />;
    case "TbBrandNextjs":
      return <TbBrandNextjs className={className} />;
    case "GrReactjs":
      return <GrReactjs className={className} />;
    case "SiTypescript":
      return <SiTypescript className={className} />;
    case "BiLogoRedux":
      return <BiLogoRedux className={className} />;
    case "SiGraphql":
      return <SiGraphql className={className} />;
    case "SiMongodb":
      return <SiMongodb className={className} />;
    case "SiExpress":
      return <SiExpress className={className} />;
    case "SiSupabase":
      return <SiSupabase className={className} />;
    default:
      return <div></div>;
  }
};
