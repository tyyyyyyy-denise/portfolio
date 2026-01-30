import Sidebar from "@/components/Sidebar";
import MediaGrid from "@/components/MediaGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar - hidden on mobile, 20vw on desktop */}
      <Sidebar />
      
      {/* Main Content Area - full width on mobile, offset on desktop */}
      <main className="flex-1 pt-14 md:pt-0 md:ml-[20vw]">
        <MediaGrid />
      </main>
    </div>
  );
}
