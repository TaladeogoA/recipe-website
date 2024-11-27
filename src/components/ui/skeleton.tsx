import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-fast-pulse rounded-md bg-primary/20 hover:bg-primary/30 transition-colors",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
