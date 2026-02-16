import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoHeader from "@/assets/logo-header.png";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Serviços", path: "/servicos" },
  { label: "Equipe", path: "/equipe" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-taupe backdrop-blur-md border-b border-taupe">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoHeader} alt="Monamê Clinic" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm tracking-wide transition-colors hover:text-gold ${
                location.pathname === item.path
                  ? "text-gold font-semibold"
                  : "text-white/90"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/agendamento"
            className="bg-gold text-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Agendar
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-taupe border-b border-taupe"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-base transition-colors ${
                    location.pathname === item.path
                      ? "text-gold font-semibold"
                      : "text-white/90"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/agendamento"
                onClick={() => setIsOpen(false)}
                className="bg-gold text-foreground px-6 py-3 rounded-full text-sm font-medium text-center hover:bg-gold/90 transition-colors"
              >
                Agendar
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
