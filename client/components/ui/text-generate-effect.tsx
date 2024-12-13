"use client";
import { useEffect } from "react";
import { motion, MotionProps, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            className={cn("text-black dark:text-white opacity-0", className)}
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
            {...({
              className: cn("text-black dark:text-white opacity-0", className),
              style: {
                filter: filter ? "blur(10px)" : "none",
              },
            } as React.HTMLAttributes<HTMLSpanElement> & MotionProps)}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold")}>
      <div className='mt-4'>
        <div className='dark:text-white text-black text-2xl leading-snug tracking-wide'>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
