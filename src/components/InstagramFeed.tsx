import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

const posts = [
  "https://www.instagram.com/p/DW1zrVPFCWY/",
  "https://www.instagram.com/reel/DNGPTJWRHoS/",
  "https://www.instagram.com/reel/DAiutM4R-JF/",
  "https://www.instagram.com/reel/DRwxKnDgM8s/",
  "https://www.instagram.com/reel/DOEeig4D3Ej/",
];

const InstagramFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tryProcess = () => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
        return true;
      }
      return false;
    };

    if (!tryProcess()) {
      // Script ainda não carregou — tenta novamente em intervalos curtos
      const interval = setInterval(() => {
        if (tryProcess()) clearInterval(interval);
      }, 400);
      const timeout = setTimeout(() => clearInterval(interval), 8000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm tracking-[0.2em] text-primary uppercase">
            @monameclinic
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Siga-nos no Instagram
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-xl mx-auto">
            Acompanhe bastidores, dicas e novidades dos nossos tratamentos.
          </p>
        </motion.div>

        <div ref={containerRef} className="px-4 md:px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="items-start">
              {posts.map((url) => (
                <CarouselItem
                  key={url}
                  className="basis-full md:basis-1/3 lg:basis-1/4"
                >
                  <div className="rounded-xl overflow-hidden bg-background border border-border/40 min-h-[340px]">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={url}
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: 0,
                        margin: 0,
                        maxWidth: "100%",
                        minWidth: "auto",
                        width: "100%",
                      }}
                    >
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 text-center font-body text-sm text-primary"
                      >
                        Ver post no Instagram
                      </a>
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-taupe text-cream border-taupe hover:bg-taupe/90 hover:text-cream" />
            <CarouselNext className="bg-taupe text-cream border-taupe hover:bg-taupe/90 hover:text-cream" />
          </Carousel>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com/monameclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md"
          >
            <Instagram size={18} />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
