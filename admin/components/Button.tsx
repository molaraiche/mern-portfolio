import Link from "next/link";

const Button = ({
  type,
  className,
  label,
  linkPath,
  EType,
  target,
}: {
  type?: "submit";
  EType: string;
  className?: string;
  label?: React.ReactNode;
  linkPath?: string;
  target?: string;
}) => {
  return EType === "button" ? (
    <button
      type={type}
      className={`${className} w-[152px] h-[53px] rounded-[10px] border-2 flex items-center justify-center font-semibold`}>
      {label}
    </button>
  ) : (
    <Link
      href={linkPath || "/"}
      target={target}
      className={`${className} w-[152px] h-[53px] rounded-[10px] border-2 flex items-center justify-center font-semibold`}>
      {label}
    </Link>
  );
};

export default Button;
