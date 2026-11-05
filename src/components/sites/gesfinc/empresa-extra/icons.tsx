/** Themify "ti-arrow-left" / "ti-arrow-right" glyphs (from the theme's themify.svg font, units-per-em 512, ascent 480). */
const TI = {
  left: "M481.882 209.784h-385.295l185.103-185.103-21.293-21.293-221.455 221.455 221.485 221.485 21.293-21.293-185.133-185.133h385.295v-30.118z",
  right:
    "M473.058 224.844l-221.485-221.485-21.293 21.293 185.103 185.103h-385.265v30.118h385.295l-185.133 185.163 21.293 21.293 221.485-221.485z",
} as const;

export function TiArrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path transform="matrix(1 0 0 -1 0 480)" d={TI[dir]} />
    </svg>
  );
}
