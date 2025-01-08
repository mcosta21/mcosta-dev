import { FC, useState, useEffect } from "react";
import clsx from "clsx";
import { Button } from "@nextui-org/button";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import { useThemeContext } from "@/hooks/use-theme";
export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = useThemeContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <Button
      isIconOnly
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      className={clsx(
        "rounded-full transition-opacity hover:opacity-80 text-default-500",
        className,
      )}
      variant="light"
      onPress={toggleTheme}
    >
      {theme === "light" ? (
        <SunFilledIcon size={22} />
      ) : (
        <MoonFilledIcon size={22} />
      )}
    </Button>
  );
};
