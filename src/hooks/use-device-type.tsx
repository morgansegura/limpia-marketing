"use client";

import { useEffect, useState } from "react";

type DeviceType = "sm" | "md" | "lg" | "xl" | null;

export function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(null);

  useEffect(() => {
    const getDeviceType = (width: number): DeviceType => {
      if (width < 768) return "sm";
      if (width < 1024) return "md";
      if (width < 1280) return "lg";
      return "xl";
    };

    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}
