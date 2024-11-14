import { Button } from "@/components/ui/button";

export function SecondaryButton({ ...props }) {
  return (
    <Button
      variant="ghost"
      className="
        text-black rounded-none px-[50px] py-[30px] lowercase text-[18px]
        relative overflow-hidden shadow-none bg-white
        before:absolute before:inset-0 before:bg-black before:z-[1]
        before:translate-x-full before:transition-transform before:duration-300
        hover:before:translate-x-0
        [&>*]:relative [&>*]:z-[2]
        group
        border border-black
      "
      {...props}
    >
      <span className="relative z-[2] transition-colors duration-300 group-hover:text-white">
        {props.children}
      </span>
    </Button>
  );
}
