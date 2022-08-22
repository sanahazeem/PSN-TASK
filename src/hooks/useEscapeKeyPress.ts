import { useEffect } from "react";

/**
 * pass the function you want to execute on every escape keypress
 */
export const useEscapeKeypress = (fn: () => void): void => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") fn();
    };

    document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [fn]);
};
