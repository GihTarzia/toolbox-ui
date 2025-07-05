// src/components/Button/AnimatedButton.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { Copy } from "lucide-react";
import { useCopyToClipboard } from "./useCopyToClipboard";
import type { HTMLMotionProps } from "framer-motion";

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}


export function AnimatedButton({ children, ...rest }: AnimatedButtonProps) {
  const [copied, setCopied] = useState(false);
  const copy = useCopyToClipboard();

  const codeToCopy = `<button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
  ${children}
</button>`;

  const handleCopy = () => {
    copy(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-flex items-center gap-2 group">
      <motion.button
        {...rest}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {children}
      </motion.button>

      <button
        onClick={handleCopy}
        
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
      >
        <Copy size={16} />
        {copied ? "Copiado!" : "Copiar código"}
      </button>
    </div>
  );
}
