import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClassSelect from "./pages/ClassSelect";
import SubjectSelect from "./pages/SubjectSelect";
import TopicList from "./pages/TopicList";
import TopicDetail from "./pages/TopicDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:board" element={<ClassSelect />} />
          <Route path="/:board/:classId" element={<SubjectSelect />} />
          <Route path="/:board/:classId/:subject" element={<TopicList />} />
          <Route path="/:board/:classId/:subject/:topicId" element={<TopicDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
