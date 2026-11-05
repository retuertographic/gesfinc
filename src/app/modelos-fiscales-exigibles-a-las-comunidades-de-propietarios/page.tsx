import { PostPage, postMetadata } from "@/components/sites/gesfinc/blog/post-page";

const SLUG = "modelos-fiscales-exigibles-a-las-comunidades-de-propietarios";

export const metadata = postMetadata(SLUG);

export default function Page() {
  return <PostPage slug={SLUG} />;
}
