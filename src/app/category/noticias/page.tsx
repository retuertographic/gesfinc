import type { Metadata } from "next";
import { BlogShell, PageTitle } from "@/components/sites/gesfinc/blog/layout";
import { NoticiasArchive } from "@/components/sites/gesfinc/blog/archive";

export const metadata: Metadata = {
  title: "Noticias – Gesfinc Canarias",
  description: "Noticias de Gesfinc Canarias, administración de fincas en La Orotava, Tenerife.",
};

export default function NoticiasCategoryPage() {
  return (
    <BlogShell>
      <PageTitle title="Noticias" />
      <NoticiasArchive />
    </BlogShell>
  );
}
