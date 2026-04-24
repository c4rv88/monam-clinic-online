import { motion } from "framer-motion";

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
      </div>
    </div>
  );
};

export default Contact;
