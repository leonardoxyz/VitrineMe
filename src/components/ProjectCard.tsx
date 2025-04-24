
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  client: string;
  type: string;
  thumbnail: string;
  tags: string[];
}

const ProjectCard = ({ id, title, client, type, thumbnail, tags }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group rounded-xl overflow-hidden hover-card glassmorphism"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <p className="text-xs font-medium text-white/70 mb-1">{type}</p>
            <h3 className="text-xl font-display text-white mb-4">{title}</h3>
            <Button 
              asChild 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-black" 
              size="sm"
            >
              <Link to={`/projeto/${id}`} className="flex items-center gap-2">
                Ver Projeto <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">Cliente: {client}</p>
          </div>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Link to={`/projeto/${id}`}>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-muted text-xs px-2 py-1 rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
