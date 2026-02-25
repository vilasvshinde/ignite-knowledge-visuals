import { Link } from "react-router-dom";
import { BookOpen, Sparkles, ArrowRight, Atom, FlaskConical, Calculator, Leaf } from "lucide-react";
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

const stats = [
  { icon: Atom, label: "Physics", count: "50+ animations", color: "text-physics" },
  { icon: FlaskConical, label: "Chemistry", count: "40+ animations", color: "text-chemistry" },
  { icon: Calculator, label: "Mathematics", count: "45+ animations", color: "text-math" },
  { icon: Leaf, label: "Biology", count: "35+ animations", color: "text-biology" },
];

const Index = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Interactive Learning for Class 8–12
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-5 tracking-tight leading-tight">
            Learn with{" "}
            <span className="text-primary relative">
              Animations
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Visual animations that transform complex concepts into simple, memorable experiences. Select your board to get started.
          </p>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl border p-4 text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <p className="font-display font-semibold text-sm">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.count}</p>
            </div>
          ))}
        </section>

        {/* Board Selection */}
        <section>
          <h2 className="text-2xl font-display font-bold mb-6 text-center">Choose Your Board</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {boards.map((board, i) => (
              <Link
                key={board}
                to={`/${board.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative bg-card rounded-2xl border p-8 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${200 + i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="text-5xl mb-5">{boardIcons[board]}</div>
                <h3 className="text-xl font-display font-bold mb-1.5 group-hover:text-primary transition-colors">
                  {board}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{boardDescriptions[board]}</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  <BookOpen className="w-4 h-4" />
                  Explore classes
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
