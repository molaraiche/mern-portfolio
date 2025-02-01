"use client";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

const Mode: React.FC = () => {
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <div
      role='switch'
      aria-checked={isLightMode}
      aria-label='Toggle light and dark mode'
      tabIndex={0}
      onClick={toggleTheme}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "D" || e.key === "L" || e.key === "d" || e.key === "l") {
          toggleTheme();
        }
      }}>
      <div className={``}>
        {isLightMode ? (
          <Image
            src={"/light.svg"}
            height={32}
            width={32}
            alt='dark mode for molarache portfolio'
            className='cursor-pointer'
          />
        ) : (
          <Image
            src={"/dark.svg"}
            height={32}
            width={32}
            alt='dark mode for molarache portfolio'
            className='cursor-pointer'
          />
        )}
      </div>
    </div>
  );
};

export default Mode;
