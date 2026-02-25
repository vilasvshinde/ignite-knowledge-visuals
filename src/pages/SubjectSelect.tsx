import { Link, useParams } from "react-router-dom";
import { getSubjectsForClass } from "@/data/curriculum";
import Layout from "@/components/Layout";

const SubjectSelect = () => {
  const { board, classId } = useParams<{ board: string; classId: string }>();
  const classNum = parseInt(classId?.replace("class-", "") || "8");
  const subjects = getSubjectsForClass(classNum);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-display font-bold mb-2 animate-fade-in">Class {classNum} Subjects</h1>
        <p className="text-muted-foreground mb-8 animate-fade-in">Pick a subject to explore animated topics.</p>

        <div className="grid gap-5 sm:grid-cols-2">
          {subjects.map((subject, i) => (
            <Link
              key={subject.id}
              to={`/${board}/${classId}/${subject.id}`}
              className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className={`${subject.gradient} h-2 w-full`} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{subject.icon}</span>
                  <h2 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                    {subject.name}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {subject.topics.length} topics · {subject.topics.reduce((a, t) => a + t.animationCount, 0)} animations
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SubjectSelect;
