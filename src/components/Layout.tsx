import { ReactNode } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { GraduationCap, Home, ChevronRight, BookOpen, Github } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b bg-card/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-xl text-foreground hover:text-primary transition-colors">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="hidden sm:inline">AnimateLearn</span>
          </Link>

          <nav className="flex items-center gap-1 text-sm">
            <Link
              to="/"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                isHome ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Breadcrumb Bar (not on home) */}
        {!isHome && (
          <div className="border-b bg-muted/30">
            <div className="container py-3">
              <Breadcrumbs />
            </div>
          </div>
        )}

        {/* Page Content */}
        <div className="container py-8 md:py-12">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50">
        <div className="container py-10">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-lg">AnimateLearn</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Interactive visual animations that bring complex concepts to life for students in classes 8 through 12.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-sm mb-3">Boards</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/cbse" className="hover:text-primary transition-colors">CBSE</Link></li>
                <li><Link to="/icse" className="hover:text-primary transition-colors">ICSE</Link></li>
                <li><Link to="/state-board" className="hover:text-primary transition-colors">State Board</Link></li>
              </ul>
            </div>

            {/* Subjects */}
            <div>
              <h4 className="font-display font-semibold text-sm mb-3">Subjects</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">⚡ Physics</li>
                <li className="flex items-center gap-2">🧪 Chemistry</li>
                <li className="flex items-center gap-2">📐 Mathematics</li>
                <li className="flex items-center gap-2">🧬 Biology</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} AnimateLearn. Built for curious minds.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
