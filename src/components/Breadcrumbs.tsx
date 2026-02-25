import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  if (parts.length === 0) return null;

  const crumbs: { label: string; path: string }[] = [{ label: "Home", path: "/" }];

  let currentPath = "";
  for (const part of parts) {
    currentPath += `/${part}`;
    const label = decodeURIComponent(part)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ label, path: currentPath });
  }

  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6 flex-wrap">
      {crumbs.map((crumb, i) => (
        <span key={crumb.path} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
          {i === crumbs.length - 1 ? (
            <span className="text-foreground font-medium">{crumb.label}</span>
          ) : (
            <Link to={crumb.path} className="hover:text-primary transition-colors">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
