import { Link } from "react-router-dom";
import { Instagram, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-branco.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Voltar ao início"
              className="inline-block"
            >
              <img
                src={logo}
                alt="Monamê Clinic"
                className="h-14 w-auto mb-4 brightness-0 opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Há 25 anos levando tecnologia e cuidado personalizado em cada tratamento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Serviços", path: "/servicos" },
                { label: "Equipe", path: "/equipe" },
                { label: "Blog", path: "/blog" },
                { label: "Agendamento", path: "/agendamento" },
                { label: "Contato", path: "/contato" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+5585988628871" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} />
                (85) 98862-8871
              </a>
              <a href="mailto:monameclinic@gmail.com" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                monameclinic@gmail.com
              </a>
              <a href="https://instagram.com/monameclinic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={16} />
                @monameclinic
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Monamê Clinic. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
