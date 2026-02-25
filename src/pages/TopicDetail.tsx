import { useParams } from "react-router-dom";
import { getSubjectsForClass } from "@/data/curriculum";
import { Play, Lock } from "lucide-react";
import Layout from "@/components/Layout";

const TopicDetail = () => {
  const { board, classId, subject, topicId } = useParams<{
    board: string; classId: string; subject: string; topicId: string;
  }>();
  const classNum = parseInt(classId?.replace("class-", "") || "8");
  const subjects = getSubjectsForClass(classNum);
  const subjectData = subjects.find((s) => s.id === subject);
  const topic = subjectData?.topics.find((t) => t.id === topicId);

  if (!subjectData || !topic) {
    return <Layout><p className="text-muted-foreground">Topic not found.</p></Layout>;
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2 animate-fade-in">
          <span className="text-3xl">{subjectData.icon}</span>
          <div>
            <h1 className="text-3xl font-display font-bold">{topic.name}</h1>
            <p className="text-muted-foreground">{topic.description}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Array.from({ length: topic.animationCount }, (_, i) => (
            <div
              key={i}
              className="animation-placeholder aspect-video flex flex-col items-center justify-center gap-3 animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <Play className="w-7 h-7 text-muted-foreground animate-pulse-soft" />
              </div>
              <div className="text-center">
                <p className="font-display font-semibold text-foreground">Animation {i + 1}</p>
                <p className="text-xs text-muted-foreground mt-0.5">Coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopicDetail;
