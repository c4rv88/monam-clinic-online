import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Flower2, Bath, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const serviceHighlights = [
  { icon: Sparkles, title: "Estética Facial", desc: "Limpeza, revitalização, peelings e muito mais", path: "/servicos" },
  { icon: Heart, title: "Estética Corporal", desc: "Tratamentos para flacidez, gordura e celulite", path: "/servicos" },
  { icon: Flower2, title: "Estética Íntima", desc: "Gino Skin — cuidado especializado", path: "/servicos" },
  { icon: Bath, title: "SPA Terapy", desc: "Massagens, banhos e relaxamento", path: "/servicos" },
  { icon: Star, title: "Intensive Op Viê", desc: "Jornada completa da cirurgia plástica", path: "/servicos" },
];

const testimonials = [
  { name: "Maria S.", text: "A Monamê transformou minha autoestima! Atendimento impecável e resultados incríveis." },
  { name: "Ana Paula", text: "Profissionais maravilhosas, ambiente acolhedor. Me sinto renovada a cada visita!" },
  { name: "Juliana R.", text: "25 anos de experiência fazem toda a diferença. Confio de olhos fechados!" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-taupe-light/80 via-background/70 to-accent/60" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block font-body text-sm tracking-[0.3em] text-primary uppercase mb-4">
              Há 25 anos cuidando de você
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Sua beleza merece{" "}
              <span className="text-primary italic">cuidado especial</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Tecnologia avançada e atendimento personalizado para realçar a sua beleza natural com segurança e carinho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/agendamento"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-base hover:bg-primary/90 transition-colors shadow-lg"
              >
                Agendar Consulta
              </Link>
              <Link
                to="/servicos"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-medium text-base hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Nossos Serviços
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.2em] text-primary uppercase">
              Nossos Tratamentos
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Cuidado completo para você
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {serviceHighlights.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Link
                  to={service.path}
                  className="block bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border group"
                >
                  <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="font-body text-xs text-muted-foreground">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.2em] text-primary uppercase">
                Sobre Nós
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                25 anos de experiência e dedicação
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground leading-relaxed text-lg">
                A Monamê Clinic nasceu do desejo de oferecer o melhor da estética com um toque humano e acolhedor. 
                Com duas décadas e meia de atuação, combinamos as mais avançadas tecnologias com o cuidado personalizado 
                que cada cliente merece. Nossa equipe multidisciplinar trabalha para que você se sinta bem consigo mesma, 
                realçando sua beleza natural com segurança e carinho.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <Link
                  to="/equipe"
                  className="inline-block mt-8 text-primary font-medium border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
                >
                  Conheça nossa equipe →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} custom={0} className="font-body text-sm tracking-[0.2em] text-primary uppercase">
              Depoimentos
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              O que nossas clientes dizem
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-taupe-light to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronta para se cuidar?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="font-body text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Agende sua consulta e descubra o tratamento ideal para você.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/agendamento"
                className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                Agendar Agora
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
