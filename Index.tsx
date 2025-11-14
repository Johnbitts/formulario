import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent mb-6 shadow-soft">
          <Mail className="w-10 h-10 text-primary-foreground" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
          Sistema de Contato
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Página de contato moderna e funcional com validação completa e integração via API
        </p>
        
        <Link to="/contato">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:shadow-hover transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
          >
            Acessar Formulário
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        
        <div className="mt-12 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-soft">
          <h2 className="text-lg font-semibold mb-3 text-foreground">Recursos Implementados</h2>
          <ul className="text-muted-foreground space-y-2">
            <li>✓ Validação completa de formulário com Zod</li>
            <li>✓ Integração com API Resend para envio de emails</li>
            <li>✓ Design responsivo e moderno</li>
            <li>✓ Feedback visual com toasts</li>
            <li>✓ Animações suaves e elegantes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
