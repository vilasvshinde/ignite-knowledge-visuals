import { Link, useParams } from "react-router-dom";
import { getSubjectsForClass } from "@/data/curriculum";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const SubjectSelect = () => {
  const { board, classId } = useParams<{ board: string; classId: string }>();
  const classNum = parseInt(classId?.replace("class-", "") || "8");
  const subjects = getSubjectsForClass(classNum);
  const boardLabel = board?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "";

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2">{boardLabel} · Class {classNum}</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">Choose a Subject</h1>
          <p className="text-muted-foreground text-lg">Pick a subject to explore animated topics and concepts.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {subjects.map((subject, i) => (
            <Link
              key={subject.id}
              to={`/${board}/${classId}/${subject.id}`}
              className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              {/* Gradient Top Bar */}
              <div className={`${subject.gradient} h-1.5 w-full`} />

              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{subject.icon}</span>
                    <div>
                      <h2 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                        {subject.name}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {subject.topics.length} topics
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-1" />
                </div>

                {/* Stats pills */}
                <div className="flex gap-2">
                  <span className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground">
                    {subject.topics.reduce((a, t) => a + t.animationCount, 0)} animations
                  </span>
                  <span className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground">
                    Class {classNum}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SubjectSelect;
