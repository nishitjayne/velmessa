import { BackgroundBlobs } from './components/BackgroundBlobs';

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#D1D5DB] overflow-hidden selection:bg-indigo-100">
      <BackgroundBlobs />
      
      {/* Visual Reference Guide (Hidden/Minimal) */}
      <div className="absolute inset-0 pointer-events-none opacity-0">
        <div id="anchor-a" style={{ top: 40, right: 120 }}>Small Sphere</div>
        <div id="anchor-b" style={{ top: 260, right: 160 }}>Large Sphere</div>
        <div id="anchor-c" style={{ top: -40, left: -50 }}>Irregular Blob</div>
      </div>
    </main>
  );
}
