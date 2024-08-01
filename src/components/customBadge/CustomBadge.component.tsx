import React from "react";
import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CustomBadgeProps {
  color?: string;
  text: string;
  size?: "small" | "medium" | "large";
}

const CustomBadge: React.FC<CustomBadgeProps> = ({
  color,
  text,
  size = "medium",
}) => {
  const sizeClasses = {
    small: "text-xs px-2 py-0.5",
    medium: "text-sm px-2.5 py-0.5",
    large: "text-base px-3 py-1",
  };

  return (
    <ShadcnBadge
      style={{
        backgroundColor: color,
        width: "fit-content", // This ensures the badge only takes the width it needs
        display: "inline-flex", // This helps with alignment
      }}
      className={cn("text-white", sizeClasses[size])}
    >
      {text}
    </ShadcnBadge>
  );
};

export { CustomBadge };
