import React from "react";
import { cn } from "@/lib/utils";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bgColor?: "white" | "gray" | "primary";
}

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: {
    default?: GridColumn;
    sm?: GridColumn;
    md?: GridColumn;
    lg?: GridColumn;
  };
  gap?: "small" | "medium" | "large";
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

type GridColumn = 1 | 2 | 3 | 4 | 6;

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
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
};

export const Page = ({
  children,
  fullWidth = false,
  className,
  ...props
}: PageProps) => {
  return (
    <main
      className={cn(
        "min-h-screen flex flex-col",
        !fullWidth && "max-w-7xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
};

export const Section = ({
  children,
  bgColor = "white",
  className,
  ...props
}: SectionProps) => {
  const bgColors = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-primary/5",
  };

  return (
    <section
      className={cn("py-12 md:py-16 lg:py-20", bgColors[bgColor], className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
};

export const Grid = ({
  children,
  columns = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = "medium",
  className,
  ...props
}: GridProps) => {
  const gaps = {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8",
  };

  const gridCols: Record<GridColumn, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    6: "grid-cols-6",
  };

  return (
    <div
      className={cn(
        "grid",
        gaps[gap],
        gridCols[columns.default || 1],
        columns.sm && gridCols[columns.sm],
        columns.md && gridCols[columns.md],
        columns.lg && gridCols[columns.lg],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
