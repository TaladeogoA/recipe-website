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
  as: Component,
}: TextProps) {
  const variants = {
    h1: "text-[36px] md:text-[38px] lg:text-[40px] font-medium leading-tight",
    h2: "text-[28px] md:text-[30px] lg:text-[32px] font-semibold leading-snug",
    h3: "text-[22px] md:text-[24px] lg:text-[26px] font-medium leading-normal",
    body: "text-[16px] md:text-[18px] lg:text-[18px] font-normal leading-relaxed",
  };

  const ElementType = Component || (variant === "body" ? "p" : variant);

  return (
    <ElementType className={`${variants[variant]} ${className}`}>
      {children}
    </ElementType>
  );
}
