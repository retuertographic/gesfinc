import {
  PostPage,
  postMetadata,
} from "@/components/sites/gesfinc/blog/post-page";

const SLUG = "gesfinc-por-el-deporte-canario";

export const metadata = postMetadata(SLUG);

export default function Page() {
  return <PostPage slug={SLUG} />;
}
