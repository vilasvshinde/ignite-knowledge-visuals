import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { boards } from "@/data/curriculum";
import Layout from "@/components/Layout";

const boardIcons: Record<string, string> = {
  CBSE: "🏛️",
  ICSE: "📘",
  "State Board": "🏫",
};

const boardDescriptions: Record<string, string> = {
  CBSE: "Central Board of Secondary Education",
  ICSE: "Indian Certificate of Secondary Education",
  "State Board": "State-level education boards",
};

const Index = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            Interactive Learning for Class 8–12
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Learn with <span className="text-primary">Animations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Visual animations that make complex concepts simple. Select your board to get started.
          </p>
        </div>

        {/* Board Selection */}
        <div className="grid gap-5 md:grid-cols-3">
          {boards.map((board, i) => (
            <Link
              key={board}
              to={`/${board.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative bg-card rounded-xl border p-7 hover:shadow-lg hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className="text-4xl mb-4">{boardIcons[board]}</div>
              <h2 className="text-xl font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                {board}
              </h2>
              <p className="text-sm text-muted-foreground">{boardDescriptions[board]}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <BookOpen className="w-4 h-4" />
                Explore classes →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
