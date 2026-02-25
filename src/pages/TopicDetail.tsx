import { useParams } from "react-router-dom";
import { getSubjectsForClass } from "@/data/curriculum";
import { Play, MonitorPlay } from "lucide-react";
import Layout from "@/components/Layout";

const TopicDetail = () => {
  const { board, classId, subject, topicId } = useParams<{
    board: string; classId: string; subject: string; topicId: string;
  }>();
  const classNum = parseInt(classId?.replace("class-", "") || "8");
  const subjects = getSubjectsForClass(classNum);
  const subjectData = subjects.find((s) => s.id === subject);
  const topic = subjectData?.topics.find((t) => t.id === topicId);
  const boardLabel = board?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "";

  if (!subjectData || !topic) {
    return <Layout><p className="text-muted-foreground">Topic not found.</p></Layout>;
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
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

        {/* Animation Count Info */}
        <div className="bg-card rounded-2xl border p-5 mb-8 flex items-center gap-3 animate-fade-in">
          <Play className="w-5 h-5 text-primary" />
          <p className="text-sm">
            <span className="font-semibold text-foreground">{topic.animationCount} animations</span>
            <span className="text-muted-foreground"> available for this topic</span>
          </p>
        </div>

        {/* Animation Placeholders */}
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: topic.animationCount }, (_, i) => (
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
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopicDetail;
