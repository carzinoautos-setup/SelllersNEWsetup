import { useEffect, useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { useToast } from "../hooks/use-toast";

type Block = {
  id: string;
  title: string;
  content: string;
};

const STORAGE_KEY = "usresprofile:design";

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export default function UsresProfile() {
  const { toast } = useToast();
  const [title, setTitle] = useState<string>("New Page");
  const [subtitle, setSubtitle] = useState<string>("Describe this page...");
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setTitle(parsed.title ?? "New Page");
        setSubtitle(parsed.subtitle ?? "Describe this page...");
        setBlocks(Array.isArray(parsed.blocks) ? parsed.blocks : []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAddBlock = () => {
    const b: Block = { id: genId(), title: "Block title", content: "Block content" };
    setBlocks((s) => [...s, b]);
  };

  const handleUpdateBlock = (id: string, patch: Partial<Block>) => {
    setBlocks((s) => s.map((b) => (b.id === id ? { ...b, ...patch } : b)));
  };

  const handleRemoveBlock = (id: string) => {
    setBlocks((s) => s.filter((b) => b.id !== id));
  };

  const handleSave = () => {
    try {
      const payload = { title, subtitle, blocks };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      toast({ title: "Saved", description: "Page design saved locally." });
    } catch (e) {
      toast({ title: "Save failed", description: "Unable to save page design." });
    }
  };

  const handleReset = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setTitle(parsed.title ?? "New Page");
        setSubtitle(parsed.subtitle ?? "Describe this page...");
        setBlocks(Array.isArray(parsed.blocks) ? parsed.blocks : []);
        toast({ title: "Reset", description: "Loaded last saved design." });
      } else {
        setTitle("New Page");
        setSubtitle("Describe this page...");
        setBlocks([]);
        toast({ title: "Reset", description: "Cleared to defaults." });
      }
    } catch (e) {
      toast({ title: "Reset failed", description: "Unable to reset page." });
    }
  };

  const handleExport = async () => {
    try {
      const payload = { title, subtitle, blocks };
      const json = JSON.stringify(payload, null, 2);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(json);
        toast({ title: "Exported", description: "Page JSON copied to clipboard." });
        return;
      }
      // fallback: create a blob and open in new window
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
      toast({ title: "Exported", description: "Opened page JSON in a new tab." });
    } catch (e) {
      toast({ title: "Export failed", description: "Unable to export page." });
    }
  };

  if (loading) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto">
        <div className="py-6 md:py-10 lg:px-[50px] px-4 sm:px-6">
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <input
                  aria-label="Page title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full text-2xl md:text-3xl font-bold border-0 focus:ring-0"
                />
                <textarea
                  aria-label="Page subtitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full mt-2 text-sm text-neutral-600 resize-none h-16 border-0 focus:ring-0"
                />
              </div>

              <div className="flex-shrink-0 flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="h-10 px-4 rounded-xl border border-[#D9D9D9] bg-white text-[14px]"
                >
                  Reset
                </button>
                <button
                  onClick={handleExport}
                  className="h-10 px-4 rounded-xl border border-[#D9D9D9] bg-white text-[14px]"
                >
                  Export JSON
                </button>
                <button
                  onClick={handleSave}
                  className="h-10 px-4 rounded-xl bg-[#E82121] text-white text-[14px]"
                >
                  Save
                </button>
              </div>
            </div>

            <div className="border border-[#E6E6E6] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Blocks</h3>
                <div>
                  <button
                    onClick={handleAddBlock}
                    className="h-9 px-3 rounded-lg bg-[#F3F3F3] text-sm"
                  >
                    + Add block
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {blocks.length === 0 && (
                  <div className="text-sm text-neutral-500">No blocks yet. Add blocks to design the page.</div>
                )}

                {blocks.map((b) => (
                  <div key={b.id} className="p-4 border border-[#E9E9E9] rounded-lg bg-white">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <input
                          value={b.title}
                          onChange={(e) => handleUpdateBlock(b.id, { title: e.target.value })}
                          className="w-full text-base font-semibold mb-2 border-0 focus:ring-0"
                          placeholder="Block title"
                        />
                        <textarea
                          value={b.content}
                          onChange={(e) => handleUpdateBlock(b.id, { content: e.target.value })}
                          className="w-full text-sm resize-none h-20 border-0 focus:ring-0"
                          placeholder="Block content"
                        />
                      </div>

                      <div className="flex-shrink-0 flex flex-col items-end gap-2">
                        <button
                          onClick={() => handleRemoveBlock(b.id)}
                          className="h-9 px-3 rounded-lg border border-[#E9E9E9] bg-white text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#E6E6E6] rounded-2xl p-6">
              <h3 className="text-lg font-medium mb-4">Preview</h3>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <p className="text-neutral-600 mt-1">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blocks.map((b) => (
                    <div key={b.id} className="p-4 border border-[#ECECEC] rounded-lg bg-white">
                      <h4 className="font-semibold mb-2">{b.title}</h4>
                      <p className="text-sm text-neutral-700">{b.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
