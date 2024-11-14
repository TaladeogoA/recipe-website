import { cn } from "@/lib/utils";
import React from "react";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bgColor?: "white" | "gray" | "primary";
  direction?: {
    default?: "row" | "col";
    sm?: "row" | "col";
    md?: "row" | "col";
    lg?: "row" | "col";
  };
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

interface FlexContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "row" | "col";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between";
  gap?: "small" | "medium" | "large";
}

interface FlexContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: "row" | "col";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between";
  gap?: "small" | "medium" | "large";
}

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: "small" | "medium" | "large";
}

interface AspectBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  ratio?: "square" | "video" | "portrait" | "wide" | number;
  className?: string;
}

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
  direction,
  className,
  ...props
}: SectionProps) => {
  const bgColors = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-primary/5",
  };

  const flexDirections: Record<string, string> = {
    row: "flex-row",
    col: "flex-col",
  };

  return (
    <section
      className={cn(
        "py-12 md:py-16 lg:py-20",
        bgColors[bgColor],
        "flex flex-col sm:flex-row",
        direction?.default && flexDirections[direction.default],
        direction?.sm && `sm:${flexDirections[direction.sm]}`,
        direction?.md && `md:${flexDirections[direction.md]}`,
        direction?.lg && `lg:${flexDirections[direction.lg]}`,
        className
      )}
      {...props}
    >
      {children}
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

export const Flex = ({
  children,
  direction = "row",
  align = "start",
  justify = "start",
  gap = "medium",
  className,
  ...props
}: FlexContainerProps) => {
  const gaps = {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8",
  };

  const directions = {
    row: "flex-row",
    col: "flex-col",
  };

  const alignments = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  const justifications = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  return (
    <div
      className={cn(
        "flex",
        directions[direction],
        alignments[align],
        justifications[justify],
        gaps[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const Stack = ({
  children,
  gap = "medium",
  className,
  ...props
}: StackProps) => {
  const gaps = {
    small: "space-y-4",
    medium: "space-y-6",
    large: "space-y-8",
  };

  return (
    <div className={cn(gaps[gap], className)} {...props}>
      {children}
    </div>
  );
};

export const AspectBox = ({
  children,
  ratio = "video",
  className,
  ...props
}: AspectBoxProps) => {
  const ratios: Record<string, string> = {
    square: "aspect-[1/1]",
    video: "aspect-[16/9]",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  };

  const aspectRatio =
    typeof ratio === "number" ? `aspect-[${ratio}]` : ratios[ratio];

  return (
    <div
      className={cn("relative w-full overflow-hidden", aspectRatio, className)}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full">{children}</div>
    </div>
  );
};

// Usage:
// <AspectBox ratio="video">
//   <img src="..." className="object-cover w-full h-full" />
// </AspectBox>
//
// <AspectBox ratio={2.35}>
//   <video className="object-cover w-full h-full" />
// </AspectBox>
