import { whatsappNumber } from "./content";
import { IconWhatsApp } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
