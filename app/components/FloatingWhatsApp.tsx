import { whatsappNumber } from "./content";
import { IconWhatsApp } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white">
        <IconWhatsApp className="h-6 w-6" />
      </span>
      <span className="text-sm font-bold text-[#128C7E]">Get Quote</span>
    </a>
  );
}
