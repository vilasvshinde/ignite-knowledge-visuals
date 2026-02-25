import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center h-16 gap-3">
          <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-xl text-foreground hover:text-primary transition-colors">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            AnimateLearn
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <Breadcrumbs />
        {children}
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        AnimateLearn — Interactive animations for deeper understanding
      </footer>
    </div>
  );
};

export default Layout;
