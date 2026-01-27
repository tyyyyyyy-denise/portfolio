import Sidebar from "@/components/Sidebar";
import MediaGrid from "@/components/MediaGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar - 20vw */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 ml-[20vw]">
        <MediaGrid />
      </main>
    </div>
  );
}
