import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const Contact = () => {
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
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Estamos à disposição para tirar dúvidas e ajudar no seu agendamento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
            Informações de Contato
          </h2>
          <div className="space-y-5">
            <a
              href="https://wa.me/5585988628871"
              target="_blank"
              rel="noopener noreferrer"
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
      </div>
    </div>
  );
};

export default Contact;
