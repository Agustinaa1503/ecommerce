"use client";

import { Switch } from "@nextui-org/react";
import React, { ReactNode, useEffect, useState } from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";
import { useTheme } from "next-themes";

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwitch = (isSelected: boolean, classname: string): ReactNode => {
    if (isSelected) {
      setTheme("light");
      localStorage.setItem("theme", "light");
      return <SunIcon className={classname} />;
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      return <MoonIcon className={classname} />;
    }
  };

  if (!mounted) return null;
  return (
    <Switch
      defaultSelected={theme === "light" ? true : false}
      size="sm"
      color="primary"
      thumbIcon={({ isSelected, className }) => handleSwitch(isSelected, className)}
    />
  );
};

export default Switcher;