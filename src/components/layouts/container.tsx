import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full px-4",
        "md:px-6",
        "lg:px-8 lg:max-w-7xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
