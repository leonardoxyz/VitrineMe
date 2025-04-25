import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useContent } from "@/contexts/ContentContext";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { TemplateForm } from "@/components/admin/TemplateForm";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";

const Admin = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { projects, templates, addProject, updateProject, deleteProject, addTemplate, updateTemplate, deleteTemplate } = useContent();
  const [activeTab, setActiveTab] = useState("projects");
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showTemplateForm, setShowTemplateForm] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [editingTemplate, setEditingTemplate] = useState<any>(null);
  const [deleteProjectId, setDeleteProjectId] = useState<string | null>(null);
  const [deleteTemplateId, setDeleteTemplateId] = useState<string | null>(null);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, [isAdmin, navigate]);

  const handleProjectSubmit = (data: any) => {
    if (editingProject) {
      updateProject(editingProject.id, data);
      toast({
        title: "Sucesso!",
        description: "Projeto atualizado com sucesso!",
      });
    } else {
      addProject(data);
      toast({
        title: "Sucesso!",
        description: "Projeto criado com sucesso!",
      });
    }
    setShowProjectForm(false);
    setEditingProject(null);
  };

  const handleTemplateSubmit = (data: any) => {
    if (editingTemplate) {
      updateTemplate(editingTemplate.id, data);
      toast({
        title: "Sucesso!",
        description: "Template atualizado com sucesso!",
      });
    } else {
      addTemplate(data);
      toast({
        title: "Sucesso!",
        description: "Template criado com sucesso!",
      });
    }
    setShowTemplateForm(false);
    setEditingTemplate(null);
  };

  const handleDeleteProject = (id: string) => {
    deleteProject(id);
    toast({
      title: "Sucesso!",
      description: "Projeto deletado com sucesso!",
    });
    setDeleteProjectId(null);
  };

  const handleDeleteTemplate = (id: string) => {
    deleteTemplate(id);
    toast({
      title: "Sucesso!",
      description: "Template deletado com sucesso!",
    });
    setDeleteTemplateId(null);
  };

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Painel de <span className="gradient-text">Administração</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Gerencie seus projetos, templates e conteúdo do site
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="projects">Projetos</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>

              <TabsContent value="projects" className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-display font-bold">Projetos</h2>
                  <Button 
                    className="flex items-center gap-2"
                    onClick={() => {
                      setEditingProject(null);
                      setShowProjectForm(true);
                    }}
                  >
                    <PlusCircle className="h-4 w-4" />
                    Novo Projeto
                  </Button>
                </div>

                <div className="grid gap-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-4 rounded-lg border bg-card"
                    >
                      <div>
                        <h3 className="font-medium">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Cliente: {project.client}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => {
                            setEditingProject(project);
                            setShowProjectForm(true);
                          }}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="icon"
                          onClick={() => setDeleteProjectId(project.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="templates" className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-display font-bold">Templates</h2>
                  <Button 
                    className="flex items-center gap-2"
                    onClick={() => {
                      setEditingTemplate(null);
                      setShowTemplateForm(true);
                    }}
                  >
                    <PlusCircle className="h-4 w-4" />
                    Novo Template
                  </Button>
                </div>

                <div className="grid gap-4">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      className="flex items-center justify-between p-4 rounded-lg border bg-card"
                    >
                      <div>
                        <h3 className="font-medium">{template.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {template.type}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => {
                            setEditingTemplate(template);
                            setShowTemplateForm(true);
                          }}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="icon"
                          onClick={() => setDeleteTemplateId(template.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />

      {/* Dialog de Formulário de Projeto */}
      <Dialog open={showProjectForm} onOpenChange={setShowProjectForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProject ? "Editar Projeto" : "Novo Projeto"}
            </DialogTitle>
          </DialogHeader>
          <ProjectForm
            initialData={editingProject}
            onSubmit={handleProjectSubmit}
            onCancel={() => {
              setShowProjectForm(false);
              setEditingProject(null);
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Dialog de Formulário de Template */}
      <Dialog open={showTemplateForm} onOpenChange={setShowTemplateForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingTemplate ? "Editar Template" : "Novo Template"}
            </DialogTitle>
          </DialogHeader>
          <TemplateForm
            initialData={editingTemplate}
            onSubmit={handleTemplateSubmit}
            onCancel={() => {
              setShowTemplateForm(false);
              setEditingTemplate(null);
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Dialog de Confirmação de Exclusão de Projeto */}
      <AlertDialog open={!!deleteProjectId} onOpenChange={() => setDeleteProjectId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este projeto? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteProjectId && handleDeleteProject(deleteProjectId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Dialog de Confirmação de Exclusão de Template */}
      <AlertDialog open={!!deleteTemplateId} onOpenChange={() => setDeleteTemplateId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este template? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteTemplateId && handleDeleteTemplate(deleteTemplateId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Admin; 