import {
  PostPage,
  postMetadata,
} from "@/components/sites/gesfinc/blog/post-page";

const SLUG = "felices-fiestas-y-prospero-ano-2018";

export const metadata = postMetadata(SLUG);

export default function Page() {
  return <PostPage slug={SLUG} />;
}
