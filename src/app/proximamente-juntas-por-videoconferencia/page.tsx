import {
  PostPage,
  postMetadata,
} from "@/components/sites/gesfinc/blog/post-page";

const SLUG = "proximamente-juntas-por-videoconferencia";

export const metadata = postMetadata(SLUG);

export default function Page() {
  return <PostPage slug={SLUG} />;
}
