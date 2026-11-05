/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { BlogShell } from "./layout";
import { getPost, type Post } from "./posts";

export function postMetadata(slug: string): Metadata {
  const { post } = getPost(slug);
  return {
    title: `${post.title} – Gesfinc Canarias`,
    description: post.description,
  };
}

function PostNav({ post, dir }: { post: Post; dir: "prev" | "next" }) {
  return (
    <div className={`gf-bl-pn gf-bl-pn--${dir}`}>
      <a href={`/${post.slug}`}>
        <div className="gf-bl-pn-card">
          <img src={post.navThumb} alt="" loading="lazy" />
          <span>{post.title}</span>
        </div>
        <div className="gf-bl-pn-anchor">
          {dir === "prev" ? "Previous Article" : "Next Article"}
        </div>
      </a>
    </div>
  );
}

/** Single post template (Avante "single post" with a featured image behind the title; no footer on the source). */
export function PostPage({ slug }: { slug: string }) {
  const { post, previous, next } = getPost(slug);
  return (
    <BlogShell>
      <div
        className="gf-bl-hero"
        style={{ backgroundImage: `url("${post.hero}")` }}
      >
        <div className="gf-bl-hero-inner">
          <div className="gf-bl-hero-text">
            <span className="gf-bl-hero-cat">
              <a href="/category/noticias">Noticias</a>
            </span>
            <h1>{post.title}</h1>
            <div className="gf-bl-hero-by">By&nbsp;X-Net</div>
          </div>
        </div>
      </div>
      <article className="gf-bl-body">{post.body}</article>
      {previous && <PostNav post={previous} dir="prev" />}
      {next && <PostNav post={next} dir="next" />}
    </BlogShell>
  );
}
