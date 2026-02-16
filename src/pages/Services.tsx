import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const categories = [
  {
    id: "facial",
    label: "Facial",
    treatments: [
      { name: "Limpeza de Pele", desc: "Convencional e Biofotônica para uma pele renovada e luminosa." },
      { name: "Revitalização", desc: "Devolve o viço e a hidratação profunda da pele." },
      { name: "Microagulhamento", desc: "Estimula colágeno para redução de rugas e cicatrizes." },
      { name: "Dermo Clareamento", desc: "Tratamento para manchas e uniformização do tom da pele." },
      { name: "Jato de Plasma", desc: "Tecnologia avançada para rejuvenescimento e lifting sem cirurgia." },
      { name: "Radiofrequência", desc: "Estímulo de colágeno para firmeza e combate à flacidez." },
      { name: "Radiofracionada", desc: "Renovação intensa da pele com micropontos de calor." },
      { name: "Peeling Químico", desc: "Renovação celular controlada para pele mais jovem." },
      { name: "Acne Off", desc: "Protocolo completo para controle e tratamento da acne." },
      { name: "Red Laser + Nutrição", desc: "Laser vermelho associado à nutrição para resultados potencializados." },
      { name: "Microfocado Full Face", desc: "Ultrassom microfocado para lifting facial não invasivo." },
    ],
  },
  {
    id: "corporal",
    label: "Corporal",
    treatments: [
      { name: "Flacidez — Kratos", desc: "Protocolo intensivo para firmeza e tonificação da pele." },
      { name: "Flacidez — Radiofrequência", desc: "Estímulo de colágeno profundo para combater a flacidez corporal." },
      { name: "Gordura — Criolipólise", desc: "Congelamento de gordura localizada de forma não invasiva." },
      { name: "Gordura — Drenagem Linfática", desc: "Eliminação de toxinas e redução de retenção de líquidos." },
      { name: "Gordura — Hidrolipoclasia", desc: "Técnica com ultrassom para destruição de células de gordura." },
      { name: "Gordura — Ozônio", desc: "Ozonioterapia aplicada à redução de medidas." },
      { name: "Celulite", desc: "Protocolos combinados para suavizar a aparência da celulite." },
      { name: "Estrias", desc: "Tratamentos para regeneração e melhora das estrias." },
      { name: "Harmonização Glútea", desc: "Definição e melhora do contorno glúteo sem cirurgia." },
    ],
  },
  {
    id: "intima",
    label: "Íntima",
    treatments: [
      { name: "Gino Skin", desc: "Tratamentos especializados para flacidez genital, ressecamento, perda urinária, traumas pós-parto, região escurecida, frouxidão vulvar, vaginismo e gordura localizada." },
    ],
  },
  {
    id: "spa",
    label: "SPA Terapy",
    treatments: [
      { name: "Pedras Quentes", desc: "Massagem relaxante com pedras aquecidas para alívio de tensões." },
      { name: "Banho de Lua Glamourosa", desc: "Banho hidratante com brilho e maciez para a pele." },
      { name: "Banho de Chocolate", desc: "Hidratação profunda com propriedades antioxidantes." },
      { name: "Banho de Argila", desc: "Detox e remineralização da pele." },
      { name: "Massagem Turbinada", desc: "Massagem modeladora intensiva para definir o corpo." },
      { name: "Massagem Redutora", desc: "Técnica para redução de medidas e gordura localizada." },
      { name: "Drenagem Linfática", desc: "Estímulo do sistema linfático para desintoxicação." },
      { name: "Detox Corporal", desc: "Protocolo completo de desintoxicação e renovação." },
      { name: "Kiberon com Toalhas Quentes", desc: "Relaxamento profundo com compressas quentes." },
      { name: "Maderoterapia", desc: "Massagem com instrumentos de madeira para modelar o corpo." },
      { name: "Terapia Ozonizada", desc: "Ozônio para revitalização e oxigenação dos tecidos." },
    ],
  },
  {
    id: "intensive",
    label: "Intensive Op Viê",
    treatments: [
      { name: "Jornada da Cirurgia Plástica", desc: "Programa de cuidado integral que acompanha você desde o pré-consulta, passando pelo pré e pós-operatório, até o retorno completo à sua rotina. Suporte multidisciplinar em cada etapa." },
    ],
  },
];

const Services = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="font-body text-sm tracking-[0.2em] text-primary uppercase">
            Tratamentos
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Nossos Serviços
          </h1>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Conheça todos os nossos tratamentos e encontre o cuidado ideal para você.
          </p>
        </motion.div>

        <Tabs defaultValue="facial" className="max-w-4xl mx-auto">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-10">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="rounded-full px-5 py-2.5 font-body text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md border border-border"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.treatments.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={i}
                    className="bg-card rounded-2xl p-6 border border-border shadow-sm"
                  >
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
