import { createFileRoute, notFound } from "@tanstack/react-router";
import v03Css from "@/components/v03/v03.css?url";
import { ProjectFeature } from "@/components/v03/ProjectFeature";
import { PROJECTS } from "@/components/v03/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS[params.slug];
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.name} | BARCODE Living` }],
    links: [{ rel: "stylesheet", href: v03Css }],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  return <ProjectFeature project={Route.useLoaderData()} />;
}
