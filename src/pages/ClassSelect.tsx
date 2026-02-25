import { Link, useParams } from "react-router-dom";
import { classes } from "@/data/curriculum";
import Layout from "@/components/Layout";

const ClassSelect = () => {
  const { board } = useParams<{ board: string }>();

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-display font-bold mb-2 animate-fade-in">Select Your Class</h1>
        <p className="text-muted-foreground mb-8 animate-fade-in">Choose your class to see available subjects and topics.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {classes.map((cls, i) => (
            <Link
              key={cls}
              to={`/${board}/class-${cls}`}
              className="group bg-card rounded-xl border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="text-3xl font-display font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                {cls}
              </div>
              <div className="text-sm text-muted-foreground">Class {cls}</div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ClassSelect;
