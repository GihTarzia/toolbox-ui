import { motion } from "framer-motion";

interface ToastProps {
  toast: {
    id: string;
    message: string;
    type?: "success" | "error" | "info";
  };
  onClose: () => void;
}

export default function Toast({ toast, onClose }: ToastProps) {
  const bgColor =
    toast.type === "success"
      ? "bg-green-500"
      : toast.type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`text-white px-4 py-2 rounded shadow cursor-pointer select-none ${bgColor}`}
      onClick={onClose}
      role="alert"
      aria-live="assertive"
    >
      {toast.message}
    </motion.div>
  );
}
