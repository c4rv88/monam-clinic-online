import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { CalendarDays } from "lucide-react";

const services = [
  "Estética Facial",
  "Estética Corporal",
  "Estética Íntima (Gino Skin)",
  "SPA Terapy",
  "Intensive Op Viê",
];

const Appointment = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Solicitação de agendamento enviada! Entraremos em contato para confirmar.");
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
            Agendamento
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Agende sua Consulta
          </h1>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar seu horário.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gold-light flex items-center justify-center">
                <CalendarDays size={22} className="text-primary" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">Solicitar Agendamento</h2>
                <p className="font-body text-xs text-muted-foreground">Confirmamos por WhatsApp ou telefone</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Nome completo" required className="rounded-xl" />
              <Input placeholder="Telefone com DDD" required className="rounded-xl" />
              <Input type="email" placeholder="Email" className="rounded-xl" />
              
              <Select required>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Serviço desejado" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="grid grid-cols-2 gap-4">
                <Input type="date" placeholder="Data preferida" className="rounded-xl" />
                <Input type="time" placeholder="Horário preferido" className="rounded-xl" />
              </div>

              <Textarea placeholder="Observações (opcional)" className="rounded-xl min-h-[80px]" />

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
              >
                {loading ? "Enviando..." : "Solicitar Agendamento"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Appointment;
