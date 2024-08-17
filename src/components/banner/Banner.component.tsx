import { cn } from "@/lib/utils";

interface DiagonalBannerProps {
  text: string;
  className?: string;
}

const DiagonalBanner = ({ text, className }: DiagonalBannerProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 overflow-hidden pointer-events-none z-50",
        className
      )}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-destructive text-destructive-foreground text-5xl font-bold py-4 px-32">
        {text}
      </div>
    </div>
  );
};

export default DiagonalBanner;
