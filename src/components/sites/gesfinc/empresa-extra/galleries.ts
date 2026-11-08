import type { GalleryImage } from "./gallery";

/** Horizontal gallery contents per page (source order, natural sizes). */
export const galleries: Record<
  "porQue" | "recursos" | "filosofia",
  GalleryImage[]
> = {
  porQue: [
    { src: "SLA_7464-700x460-1.jpg", width: 700, height: 460 },
    { src: "DSC_1780-700x460-1.jpg", width: 700, height: 460 },
    { src: "SLA_7474-700x460-1.jpg", width: 700, height: 460 },
    { src: "DSC_1853-700x460-1.jpg", width: 700, height: 460 },
    { src: "SLA_7376-300x200-1.jpg", width: 300, height: 200 },
    {
      src: "GESFINC-170509-64-1170x548-1-1024x480.jpg",
      width: 1024,
      height: 480,
    },
  ],
  recursos: [
    { src: "SLA_7464-700x460-1.jpg", width: 700, height: 460 },
    { src: "GESFINC-170104-2-300x200-1.jpg", width: 300, height: 200 },
    { src: "GESFINC-170509-141-300x200-1.jpg", width: 300, height: 200 },
    { src: "GESFINC-170509-83-300x200-1.jpg", width: 300, height: 200 },
    { src: "GESFINC-170509-121-300x200-1.jpg", width: 300, height: 200 },
  ],
  filosofia: [
    { src: "SLA_7385.jpg", width: 2048, height: 1365 },
    { src: "SLA_7415-300x200-1.jpg", width: 300, height: 200 },
    { src: "SLA_7345-300x200-1.jpg", width: 300, height: 200 },
    { src: "SLA_7371-300x200-1.jpg", width: 300, height: 200 },
    { src: "SLA_7376-300x200-1-1.jpg", width: 300, height: 200 },
    { src: "SLA_7417-300x200-1.jpg", width: 300, height: 200 },
  ],
};
