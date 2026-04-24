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
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [obs, setObs] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nome || !telefone || !servico) {
      toast.error("Preencha nome, telefone e serviço.");
      return;
    }

    const linhas = [
      "Olá! Gostaria de agendar uma consulta na Monamê Clinic.",
      "",
      `*Nome:* ${nome}`,
      `*Telefone:* ${telefone}`,
      email ? `*Email:* ${email}` : null,
      `*Serviço:* ${servico}`,
      data ? `*Data preferida:* ${data}` : null,
      hora ? `*Horário preferido:* ${hora}` : null,
      obs ? `*Observações:* ${obs}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/5585988628871?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.open(url, "_blank");
    toast.success("Abrindo WhatsApp para confirmar seu agendamento...");
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
            Preencha os dados abaixo e enviaremos suas informações diretamente pelo WhatsApp para confirmação.
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
                <p className="font-body text-xs text-muted-foreground">Confirmação via WhatsApp</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Nome completo" required className="rounded-xl" value={nome} onChange={(e) => setNome(e.target.value)} />
              <Input placeholder="Telefone com DDD" required className="rounded-xl" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              <Input type="email" placeholder="Email (opcional)" className="rounded-xl" value={email} onChange={(e) => setEmail(e.target.value)} />

              <Select value={servico} onValueChange={setServico} required>
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
                <Input type="date" className="rounded-xl" value={data} onChange={(e) => setData(e.target.value)} />
                <Input type="time" className="rounded-xl" value={hora} onChange={(e) => setHora(e.target.value)} />
              </div>

              <Textarea placeholder="Observações (opcional)" className="rounded-xl min-h-[80px]" value={obs} onChange={(e) => setObs(e.target.value)} />

              <Button
                type="submit"
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6"
              >
                Enviar pelo WhatsApp
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Appointment;
