import { useParams } from "react-router-dom";
import { getSubjectsForClass } from "@/data/curriculum";
import { Play, MonitorPlay, Maximize, Minimize } from "lucide-react";
import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const animationFiles: Record<string, { title: string; src: string }[]> = {
  "conic-sections": [
    { title: "Parabola", src: "/animations/conic-sections/parabola.html" },
  ],
};

const TopicDetail = () => {
  const { board, classId, subject, topicId } = useParams<{
    board: string; classId: string; subject: string; topicId: string;
  }>();
  const classNum = parseInt(classId?.replace("class-", "") || "8");
  const subjects = getSubjectsForClass(classNum);
  const subjectData = subjects.find((s) => s.id === subject);
  const topic = subjectData?.topics.find((t) => t.id === topicId);
  const boardLabel = board?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "";
  const files = topicId ? animationFiles[topicId] || [] : [];
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const iframeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggleFullscreen = (index: number) => {
    const el = iframeRefs.current[index];
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setFullscreenIndex(null);
    } else {
      el.requestFullscreen();
      setFullscreenIndex(index);
    }
  };

  if (!subjectData || !topic) {
    return <Layout><p className="text-muted-foreground">Topic not found.</p></Layout>;
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2">{boardLabel} · Class {classNum} · {subjectData.name}</p>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-12 h-12 rounded-xl ${subjectData.gradient} flex items-center justify-center shadow-sm`}>
              <MonitorPlay className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">{topic.name}</h1>
              <p className="text-muted-foreground mt-1">{topic.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl border p-5 mb-8 flex items-center gap-3 animate-fade-in">
          <Play className="w-5 h-5 text-primary" />
          <p className="text-sm">
            <span className="font-semibold text-foreground">{topic.animationCount} animations</span>
            <span className="text-muted-foreground"> available for this topic</span>
          </p>
        </div>

        <div className="grid gap-6">
          {Array.from({ length: topic.animationCount }, (_, i) => {
            const file = files[i];
            if (file) {
              return (
                <div
                  key={i}
                  ref={(el) => { iframeRefs.current[i] = el; }}
                  className="rounded-2xl overflow-hidden border bg-card animate-fade-in-up"
                  style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
                >
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Play className="w-4 h-4 text-primary" />
                      <p className="font-display font-bold text-foreground">{file.title}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleFullscreen(i)}
                      title={fullscreenIndex === i ? "Exit fullscreen" : "Fullscreen"}
                    >
                      {fullscreenIndex === i ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                    </Button>
                  </div>
                  <iframe
                    src={file.src}
                    title={file.title}
                    className="w-full border-0"
                    style={{ height: "80vh" }}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              );
            }
            return (
              <div
                key={i}
                className="animation-placeholder aspect-video rounded-2xl flex flex-col items-center justify-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
              >
                <div className={`w-16 h-16 rounded-2xl ${subjectData.gradient} flex items-center justify-center shadow-md opacity-60`}>
                  <Play className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-foreground text-lg">Animation {i + 1}</p>
                  <p className="text-sm text-muted-foreground mt-1">Coming soon — stay tuned!</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default TopicDetail;
