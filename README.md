# 🧰 Toolbox UI

**Toolbox UI** é uma coleção autoral de componentes modernos, acessíveis e reutilizáveis construídos com **React + TailwindCSS**.  
O objetivo é demonstrar habilidade em UI/UX, animações, responsividade e boas práticas de frontend.

---

## 🔗 Acesse o projeto

👉 [Deploy no Vercel (em breve)](https://...)

---

## ✨ Tecnologias usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animações)
- [Figma](https://figma.com/) (layout original)

---

## 📦 Como rodar o projeto localmente

### Pré-requisitos

- Node.js (sugestão: usar [Volta](https://volta.sh))
- Git

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/toolbox-ui.git
cd toolbox-ui

# Instale as dependências
npm install

# Rode o projeto local
npm run dev

Acesse em http://localhost:5173

🗂️ Estrutura do projeto
toolbox-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   └── index.ts
│   │   └── ...
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   │   └── index.css
│   ├── theme/
│   ├── utils/
│   └── main.tsx
├── .gitignore
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── README.md


🧪 Componentes disponíveis
Componente	Descrição	Ações
Button	Botão com loading e animação	🔍 Visualizar / 📋 Copiar código
Modal	Modal com fundo desfocado	🔍 / 📋
Toast	Notificações animadas	🔍 / 📋
Switch	Dark mode toggle	🔍 / 📋
...	novos em breve	...

💻 Interface interativa
Cada componente possui:

Visualização real

Botão "Copiar código" ✅

Código-fonte disponível no próprio site

Responsividade mobile e desktop

🔒 O código é open-source e pode ser usado em projetos pessoais e comerciais.

📐 Layout no Figma
Figma - Toolbox UI (em breve)

🧾 Licença
Este projeto está licenciado sob a licença MIT.
Pode usar, modificar, copiar e contribuir. Só não esquece os créditos. 😉

🙋‍♀️ Autora
Giovanna Tarzia – Front-end Developer
LinkedIn • GitHub



---

## 🔧 E sobre "copiar e colar" e "ver código" no próprio site?

Sim, **funciona e dá pra fazer**:

### 🔹 Opção 1: Botão "📋 Copiar código"
Use o hook `navigator.clipboard.writeText()` pra copiar o código-fonte do componente.

### 🔹 Opção 2: Mostrar o JSX em um `pre > code`
Usar destaque com lib tipo `prismjs` ou `shiki` (estilo CodeSandbox).

### 🔹 Opção 3: Permitir exportar
Pode ter um botão "Exportar para seu projeto" que apenas abre uma modal com instruções ou copia os arquivos.

---

## 👉 Próximo passo:

1. Confirma se posso gerar os arquivos iniciais com base nesse README.
2. Você quer que eu já monte o exemplo do primeiro componente (tipo `AnimatedButton`) com visualização + copiar código?
3. Quer usar ícones tipo lucide/react ou outro?

Só falar **“bora montar o projeto”** que eu já entrego o esqueleto 100% pronto pra você subir no GitHub.
