/**
 * Sub-path the site is served from (e.g. "/gesfinc" on GitHub Pages, "" locally).
 * Next.js prefixes <Link> and its own assets automatically, but not plain <a href>, <img src>,
 * inline styles or files in /public, so those go through withBase().
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string): string {
  return path.startsWith("/") && !path.startsWith("//")
    ? `${BASE_PATH}${path}`
    : path;
}
