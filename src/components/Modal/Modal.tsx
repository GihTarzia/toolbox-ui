import { useEffect } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const modalRoot = document.getElementById("modal-root") || document.body;

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Fecha modal no ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Bloqueia scroll quando aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg max-w-lg w-full p-6 relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <h2 id="modal-title" className="text-xl font-semibold mb-4">
                {title}
              </h2>
            )}

            <div className="mb-6">{children}</div>

            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className="absolute top-3 right-3 text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300 transition"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  );
}
