type TextVariant = "h1" | "h2" | "h3" | "body";
type TextProps = {
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export function Text({
  variant = "body",
  className = "",
  children,
  as: Component = "p",
}: TextProps) {
  const variants = {
    h1: "text-[36px] md:text-[48px] lg:text-[52px] font-bold leading-tight",
    h2: "text-[28px] md:text-[30px] lg:text-[32px] font-semibold leading-snug",
    h3: "text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-normal",
    body: "text-[16px] md:text-[18px] lg:text-[18px] font-normal leading-relaxed",
  };

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
}
