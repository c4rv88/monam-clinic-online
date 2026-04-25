import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import oliviaLucenaImg from "@/assets/olivia-lucena.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

type TeamMember = {
  name: string;
  role: string;
  desc: string;
  image?: string;
};

const team: TeamMember[] = [
  {
    name: "Alexandra Azevedo",
    role: "Esteticista",
    desc: "Especialista em estética facial e corporal com anos de experiência em tratamentos avançados.",
  },
  {
    name: "Dra. Bianca Bezerra",
    role: "Nutróloga",
    desc: "Médica nutróloga focada em saúde e bem-estar integrados aos cuidados estéticos.",
  },
  {
    name: "Olívia Lucena",
    role: "Fisioterapia Dermato Funcional",
    desc: "Especialista em estética regenerativa, injetáveis e ozonioterapia.",
    image: oliviaLucenaImg,
  },
];

const Team = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="font-body text-sm tracking-[0.2em] text-primary uppercase">
            Nossa Equipe
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Profissionais que cuidam de você
          </h1>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Uma equipe multidisciplinar dedicada à sua beleza e bem-estar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm text-center"
            >
              <div className="h-48 bg-gradient-to-br from-taupe-light to-gold-light flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="font-body text-sm text-primary font-medium mt-1">{member.role}</p>
                <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
