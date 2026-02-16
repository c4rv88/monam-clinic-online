import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="font-body text-sm tracking-[0.2em] text-primary uppercase">
            Contato
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Fale Conosco
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              Informações de Contato
            </h2>
            <div className="space-y-5">
              <a
                href="tel:+5585988628871"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Telefone / WhatsApp</p>
                  <p className="font-body font-medium text-foreground">(85) 98862-8871</p>
                </div>
              </a>
              <a
                href="mailto:monameclinic@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Email</p>
                  <p className="font-body font-medium text-foreground">monameclinic@gmail.com</p>
                </div>
              </a>
              <a
                href="https://instagram.com/monameclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center">
                  <Instagram size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Instagram</p>
                  <p className="font-body font-medium text-foreground">@monameclinic</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Endereço</p>
                  <p className="font-body font-medium text-foreground">Fortaleza, CE</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              Envie uma Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Seu nome" required className="rounded-xl" />
              <Input type="email" placeholder="Seu email" required className="rounded-xl" />
              <Input placeholder="Assunto" className="rounded-xl" />
              <Textarea placeholder="Sua mensagem" required className="rounded-xl min-h-[120px]" />
              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
