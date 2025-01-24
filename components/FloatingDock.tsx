import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

export function NavigationBar({
  navItems,
  className,
}: {
  navItems: {
    title: string;
    href: string;
    icon: JSX.Element;
  }[];
  className?: string;
}) {
  return (
    <div className="flex items-end justify-center h-[10rem] w-full">
      <FloatingDock
        items={navItems}
        desktopClassName="fixed md:top-[5.5rem] top-10"
      />
    </div>
  );
}
