export default function MediaGrid() {
  return (
    <div className="min-h-screen p-6">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[calc(100vh-48px)]">
        {/* Top Left - Video Demo (spans 5 cols, 2 rows) */}
        <div className="col-span-5 row-span-2 rounded-2xl bg-[#4a6fa5] overflow-hidden flex items-center justify-center">
          <MediaPlaceholder label="Video Demo" />
        </div>

        {/* Top Right - Phone Mockup (spans 4 cols, 4 rows) */}
        <div className="col-span-4 row-span-4 rounded-2xl bg-white overflow-hidden flex items-center justify-center shadow-sm">
          <MediaPlaceholder label="Phone UI Mockup" />
        </div>

        {/* Far Right - Feature Card (spans 3 cols, 3 rows) */}
        <div className="col-span-3 row-span-3 rounded-2xl bg-[#d4e5f7] overflow-hidden flex items-center justify-center">
          <MediaPlaceholder label="Feature Card" />
        </div>

        {/* Middle Left - Phone with Translation UI (spans 3 cols, 3 rows) */}
        <div className="col-span-3 row-span-3 rounded-2xl bg-[#d4e5f7] overflow-hidden flex items-center justify-center">
          <MediaPlaceholder label="Translation UI" />
        </div>

        {/* Middle Center - Chat Interface (spans 2 cols, 2 rows) */}
        <div className="col-span-2 row-span-2 rounded-2xl bg-[#2d3748] overflow-hidden flex items-center justify-center">
          <MediaPlaceholder label="Chat UI" light />
        </div>

        {/* Bottom Row - Various Cards */}
        <div className="col-span-3 row-span-2 rounded-2xl bg-[#e8e5a3] overflow-hidden flex items-center justify-center">
          <MediaPlaceholder label="Screenshot 1" />
        </div>

        <div className="col-span-4 row-span-2 rounded-2xl bg-[#3d4a5c] overflow-hidden flex items-center justify-center">
          <MediaPlaceholder label="Audio Waveform" light />
        </div>

        <div className="col-span-2 row-span-3 rounded-2xl bg-[#5a6b5a] overflow-hidden flex items-center justify-center">
          <MediaPlaceholder label="Video Clip" light />
        </div>

        <div className="col-span-3 row-span-2 rounded-2xl bg-[#c9c5ba] overflow-hidden flex items-center justify-center">
          <MediaPlaceholder label="Feature Image" />
        </div>
      </div>
    </div>
  );
}

function MediaPlaceholder({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div className={`text-center p-4 ${light ? 'text-white/40' : 'text-black/20'}`}>
      <div className="w-12 h-12 mx-auto mb-3 rounded-lg border-2 border-dashed border-current flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}
