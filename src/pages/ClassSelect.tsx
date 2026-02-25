import { Link, useParams } from "react-router-dom";
import { classes } from "@/data/curriculum";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const classColors = ["text-physics", "text-chemistry", "text-math", "text-biology", "text-primary"];

const ClassSelect = () => {
  const { board } = useParams<{ board: string }>();
  const boardLabel = board?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "";

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2">{boardLabel}</p>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">Select Your Class</h1>
          <p className="text-muted-foreground text-lg">Choose your class to explore subjects and animated topics.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {classes.map((cls, i) => (
            <Link
              key={cls}
              to={`/${board}/class-${cls}`}
              className="group bg-card rounded-2xl border p-8 text-center hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className={`text-4xl font-display font-bold ${classColors[i]} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {cls}
              </div>
              <div className="text-sm text-muted-foreground font-medium">Class {cls}</div>
              <ArrowRight className="w-4 h-4 mx-auto mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ClassSelect;
