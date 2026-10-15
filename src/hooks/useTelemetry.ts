import { useState, useEffect } from "react";

export interface TelemetryData {
  cpu: number;
  ram: number;
  lat: number;
  cpuBars: number[];
  ramBars: number[];
}

/**
 * Custom hook simulating dynamic real-time Cyberpunk telemetry HUD metrics:
 * - CPU usage percentage and 4-core meter bars
 * - RAM usage in GB and 4-slot capacity bars
 * - Network latency in ms with jitter and ping pulse
 */
export const useTelemetry = (): TelemetryData => {
  const [cpu, setCpu] = useState<number>(42);
  const [ram, setRam] = useState<number>(12.1);
  const [lat, setLat] = useState<number>(2);

  useEffect(() => {
    const interval = setInterval(() => {
      // CPU: Mean-reverting random walk centered around ~42%, clamp 26% - 76%
      setCpu((prev) => {
        const pullToCenter = (42 - prev) * 0.15;
        const jitter = (Math.random() - 0.5) * 16;
        const next = Math.round(Math.min(76, Math.max(26, prev + pullToCenter + jitter)));
        return next;
      });

      // RAM: Subtle drift around ~12.1 GB, clamp 11.6GB - 12.6GB
      setRam((prev) => {
        const pullToCenter = (12.1 - prev) * 0.15;
        const jitter = (Math.random() - 0.5) * 0.4;
        const next = parseFloat(Math.min(12.6, Math.max(11.6, prev + pullToCenter + jitter)).toFixed(1));
        return next;
      });

      // LAT: Low-latency jitter mostly 1-3ms, with occasional spike up to 5-6ms
      setLat(() => {
        const r = Math.random();
        if (r < 0.5) return 2;
        if (r < 0.78) return 1;
        if (r < 0.92) return 3;
        return Math.floor(Math.random() * 3) + 4; // 4, 5, or 6ms
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Compute 4 dynamic CPU core meter heights (2px to 12px)
  const cpuBars = [
    Math.round(Math.min(12, Math.max(3, (cpu / 100) * 12 + 1))),
    Math.round(Math.min(12, Math.max(4, (cpu / 100) * 14 - 1))),
    Math.round(Math.min(12, Math.max(2, (cpu / 100) * 11 + 2))),
    Math.round(Math.min(12, Math.max(2, (cpu / 100) * 13 - 3))),
  ];

  // Compute 4 dynamic RAM bank heights (2px to 12px)
  const bank3Height = Math.round(Math.min(12, Math.max(5, ((ram - 8) / 4) * 12)));
  const bank4Height = Math.round(Math.min(12, Math.max(2, Math.max(0.1, (ram - 11.6) / 1.5) * 8 + 2)));
  const ramBars = [12, 12, bank3Height, bank4Height];

  return {
    cpu,
    ram,
    lat,
    cpuBars,
    ramBars,
  };
};
