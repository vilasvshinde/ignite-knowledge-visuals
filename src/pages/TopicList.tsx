import { Link, useParams } from "react-router-dom";
import { getSubjectsForClass } from "@/data/curriculum";
import { Play } from "lucide-react";
import Layout from "@/components/Layout";

const TopicList = () => {
  const { board, classId, subject } = useParams<{ board: string; classId: string; subject: string }>();
  const classNum = parseInt(classId?.replace("class-", "") || "8");
  const subjects = getSubjectsForClass(classNum);
  const subjectData = subjects.find((s) => s.id === subject);

  if (!subjectData) {
    return <Layout><p className="text-muted-foreground">Subject not found.</p></Layout>;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2 animate-fade-in">
          <span className="text-3xl">{subjectData.icon}</span>
          <h1 className="text-3xl font-display font-bold">{subjectData.name}</h1>
        </div>
        <p className="text-muted-foreground mb-8 animate-fade-in">Class {classNum} — {subjectData.topics.length} topics</p>

        <div className="space-y-4">
          {subjectData.topics.map((topic, i) => (
            <Link
              key={topic.id}
              to={`/${board}/${classId}/${subject}/${topic.id}`}
              className="group flex items-center gap-5 bg-card rounded-xl border p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className={`w-12 h-12 rounded-lg ${subjectData.gradient} flex items-center justify-center shrink-0`}>
                <Play className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">{topic.name}</h3>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </div>
              <span className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground shrink-0">
                {topic.animationCount} animations
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopicList;
