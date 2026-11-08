/* eslint-disable @next/next/no-img-element */
import { withBase } from "@/lib/base-path";
import { IMG } from "../data";
import { posts } from "./posts";

/** Noticias category archive: one full-width card per post (Avante "blog_f" list). */
export function NoticiasArchive() {
  return (
    <div className="gf-bl-wrap gf-bl-archive">
      {posts.map((p) => (
        <article key={p.slug} className="gf-bl-card">
          <a
            className="gf-bl-card-img"
            href={withBase(`/${p.slug}`)}
            aria-label={p.title}
          >
            <img
              src={p.archiveImage.src}
              alt=""
              width={p.archiveImage.width}
              height={p.archiveImage.height}
              loading="lazy"
            />
          </a>
          <div className="gf-bl-card-cat">
            <a href={withBase("/category/noticias")}>Noticias</a>
          </div>
          <h2>
            <a href={withBase(`/${p.slug}`)} title={p.title}>
              {p.title}
            </a>
          </h2>
          <p className="gf-bl-card-excerpt">{p.excerpt}</p>
          <div className="gf-bl-card-foot">
            <div className="gf-bl-author">
              <img
                src={`${IMG}/gravatar-mm-200.jpg`}
                alt=""
                width={25}
                height={25}
              />
              <span>by&nbsp;X-Net</span>
            </div>
            <a
              className="gf-bl-more"
              href={withBase(`/${p.slug}`)}
              title={p.title}
            >
              Continue Reading
              <i aria-hidden="true" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
