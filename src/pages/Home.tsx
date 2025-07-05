// src/pages/Home.tsx
import { AnimatedButton } from "../components/Button";
import { DarkModeSwitch } from "../components/Theme";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { useToast } from "../components/Toast";
import { Copy } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const { addToast } = useToast();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors px-6 py-8">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Toolbox UI</h1>
        <DarkModeSwitch />
      </header>

      <section className="space-y-4 max-w-3xl mx-auto">
        <ComponentCard title="Botão Animado">
          <AnimatedButton>Abrir Modal</AnimatedButton>
        </ComponentCard>

        <ComponentCard title="Modal">
          <AnimatedButton onClick={() => setOpen(true)}>Abrir Modal</AnimatedButton>
          <Modal isOpen={open} onClose={() => setOpen(false)} title="Título do Modal">
            <p>Conteúdo do modal aqui. Pode colocar o que quiser.</p>
          </Modal>
        </ComponentCard>

        <ComponentCard title="Toast">
          <AnimatedButton onClick={() => addToast("Toast de sucesso!", "success")}>
            Toast Sucesso
          </AnimatedButton>
          <AnimatedButton onClick={() => addToast("Toast de erro", "error")}>
            Toast Erro
          </AnimatedButton>
        </ComponentCard>
      </section>
    </main>
  );
}

function ComponentCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow-sm bg-white dark:bg-zinc-800 transition-colors">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-medium">{title}</h2>
        {/* <Copy size={16} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer" />*/}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
