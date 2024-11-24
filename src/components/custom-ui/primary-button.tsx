import { Button } from "@/components/ui/button";

export function PrimaryButton({ ...props }) {
  return (
    <Button
      variant="ghost"
      className="
        text-white rounded-none px-[50px] py-[30px] lowercase text-[18px]
        relative overflow-hidden shadow-none bg-black
        before:absolute before:inset-0 before:bg-white before:z-[1]
        before:translate-x-full before:transition-transform before:duration-300
        hover:before:translate-x-0
        [&>*]:relative [&>*]:z-[2]
        group
        border border-black w-full
      "
      {...props}
    >
      <span className="relative z-[2] transition-colors duration-300 group-hover:text-black">
        {props.children}
      </span>
    </Button>
  );
}
