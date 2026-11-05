import { PostPage, postMetadata } from "@/components/sites/gesfinc/blog/post-page";

const SLUG = "app-gesfinc";

export const metadata = postMetadata(SLUG);

export default function Page() {
  return <PostPage slug={SLUG} />;
}
