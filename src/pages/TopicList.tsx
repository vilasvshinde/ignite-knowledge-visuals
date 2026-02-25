import { Link, useParams } from "react-router-dom";
import { getSubjectsForClass } from "@/data/curriculum";
import { Play, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const TopicList = () => {
  const { board, classId, subject } = useParams<{ board: string; classId: string; subject: string }>();
  const classNum = parseInt(classId?.replace("class-", "") || "8");
  const subjects = getSubjectsForClass(classNum);
  const subjectData = subjects.find((s) => s.id === subject);
  const boardLabel = board?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "";

  if (!subjectData) {
    return <Layout><p className="text-muted-foreground">Subject not found.</p></Layout>;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2">{boardLabel} · Class {classNum}</p>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{subjectData.icon}</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold">{subjectData.name}</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            {subjectData.topics.length} topics · {subjectData.topics.reduce((a, t) => a + t.animationCount, 0)} animations available
          </p>
        </div>

        {/* Topic Cards */}
        <div className="space-y-4">
          {subjectData.topics.map((topic, i) => (
            <Link
              key={topic.id}
              to={`/${board}/${classId}/${subject}/${topic.id}`}
              className="group flex items-center gap-5 bg-card rounded-2xl border p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className={`w-14 h-14 rounded-xl ${subjectData.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                <Play className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">{topic.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{topic.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs bg-muted rounded-full px-3 py-1.5 text-muted-foreground font-medium hidden sm:inline-block">
                  {topic.animationCount} animations
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopicList;
