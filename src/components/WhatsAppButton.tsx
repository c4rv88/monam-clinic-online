import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5585988628871";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os tratamentos da Monamê Clinic.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[hsl(28,28%,38%)] via-taupe to-taupe text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
