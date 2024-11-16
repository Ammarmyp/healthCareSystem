import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "./ui/button";

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={
        className ??
        "bg-green-500 hover:bg-green-500/60 w-full text-white h-11 "
      }
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src={"/assets/icons/loader.svg"}
            alt="loader"
            width={24}
            height={24}
            className=" animate-spin"
          />
          Just a sec...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
