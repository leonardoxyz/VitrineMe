import { createContext, useContext, useState, ReactNode } from "react";
import { projects as initialProjects } from "@/data/projects";
import { templates as initialTemplates } from "@/data/templates";

interface Project {
  id: string;
  title: string;
  client: string;
  type: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  technologies: string[];
  testimonial?: {
    name: string;
    position: string;
    content: string;
    avatar: string;
  };
  link: string;
  featured: boolean;
}

interface Template {
  id: string;
  title: string;
  type: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  features: string[];
  technologies: string[];
  link: string;
  featured: boolean;
}

interface ContentContextType {
  projects: Project[];
  templates: Template[];
  addProject: (project: Omit<Project, "id">) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addTemplate: (template: Omit<Template, "id">) => void;
  updateTemplate: (id: string, template: Partial<Template>) => void;
  deleteTemplate: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [templates, setTemplates] = useState<Template[]>(initialTemplates);

  const generateId = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const addProject = (project: Omit<Project, "id">) => {
    const id = generateId(project.title);
    setProjects(prev => [...prev, { ...project, id }]);
  };

  const updateProject = (id: string, project: Partial<Project>) => {
    setProjects(prev =>
      prev.map(p => (p.id === id ? { ...p, ...project } : p))
    );
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const addTemplate = (template: Omit<Template, "id">) => {
    const id = generateId(template.title);
    setTemplates(prev => [...prev, { ...template, id }]);
  };

  const updateTemplate = (id: string, template: Partial<Template>) => {
    setTemplates(prev =>
      prev.map(t => (t.id === id ? { ...t, ...template } : t))
    );
  };

  const deleteTemplate = (id: string) => {
    setTemplates(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ContentContext.Provider
      value={{
        projects,
        templates,
        addProject,
        updateProject,
        deleteProject,
        addTemplate,
        updateTemplate,
        deleteTemplate,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
} 