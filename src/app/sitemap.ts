import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const priority = (r: string) =>
  r === "/"
    ? 1
    : r.startsWith("/servicios") ||
        r === "/contactar" ||
        r === "/pedir-presupuesto"
      ? 0.8
      : 0.5;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r === "/" ? "/" : `${r}/`}`,
    changeFrequency: r === "/noticias" || r === "/" ? "weekly" : "monthly",
    priority: priority(r),
  }));
}
