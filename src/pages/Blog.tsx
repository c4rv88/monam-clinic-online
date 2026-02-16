import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 cuidados essenciais com a pele no verão",
    summary: "Descubra como proteger e manter sua pele hidratada durante os dias mais quentes do ano.",
    date: "10 Fev 2026",
  },
  {
    id: 2,
    title: "Microagulhamento: o que é e para quem é indicado",
    summary: "Entenda como esse procedimento estimula o colágeno e rejuvenesce a pele de forma natural.",
    date: "28 Jan 2026",
  },
  {
    id: 3,
    title: "Os benefícios da drenagem linfática",
    summary: "Saiba como a drenagem linfática pode ajudar na desintoxicação e redução de medidas.",
    date: "15 Jan 2026",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
};

const Blog = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <span className="font-body text-sm tracking-[0.2em] text-primary uppercase">Blog</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Dicas & Novidades
          </h1>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Fique por dentro das últimas tendências e cuidados em estética.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-rose-light to-accent flex items-center justify-center">
                <BookOpen size={40} className="text-primary/40" />
              </div>
              <div className="p-6">
                <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{post.summary}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-sm text-muted-foreground">
            Em breve, mais conteúdos serão publicados aqui!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
