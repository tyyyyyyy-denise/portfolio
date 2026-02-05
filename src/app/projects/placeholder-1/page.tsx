import Sidebar from "@/components/Sidebar";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

export default function Placeholder1Page() {
  const project = projects.find((p) => p.href === "/projects/placeholder-1")!;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-[20vw]">
        <ProjectDetail
          title={project.name}
          description={project.description}
          mediaItems={project.mediaItems}
        />
      </main>
    </div>
  );
}
