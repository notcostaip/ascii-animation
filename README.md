<!-- markdownlint-disable -->
<div align="center">

<!-- HEADER BANNER -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:7f1d1d,50:dc2626,100:991b1b&height=230&section=header&text=ASCII%20Animation&fontSize=70&fontColor=ffffff&animation=twinkling&fontAlignY=35&desc=Real-time%20Video%20to%20ASCII%20Render%20Engine&descAlignY=55&descSize=18&descColor=fca5a5" />

<br/>

<!-- BADGES -->
<div>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
</div>

<br/>

Uma engine de alta performance que transforma clipes de vídeo em animações **ASCII dinâmicas** em tempo real no navegador! A renderização atual roda o clipe **"Artista Genérico" do cantor Veigh**. 🎸

</div>

<br/>

<!-- RED ANIMATED DIVIDER -->
<img src="https://raw.githubusercontent.com/notcostaip/notcostaip/main/assets/red-divider.svg" width="100%">

<!-- COMO FUNCIONA -->
<div align="center">

### &nbsp; 🎬 Como funciona

</div>

O app lê os quadros de um vídeo local frame a frame e converte seus pixels em uma matriz ASCII vibrante. O nível de brilho de cada pixel define o caractere exibido, resultando num efeito dinâmico:

| Brilho | Categoria de Caractere |
|-------|--------------|
| 🔆 **Alto** | `@, #, W, M, 8, &, %` |
| 🔅 **Médio** | `a, c, e, x, z, 1, 7` |
| 🌑 **Escuro** | `., -, \`, ,, \'` |

Além disso, a matriz atualiza os caracteres a cada 150ms usando uma "semente" randômica baseada no tempo e nas coordenadas X/Y para criar um efeito de dados em movimento.

<!-- RED ANIMATED DIVIDER -->
<img src="https://raw.githubusercontent.com/notcostaip/notcostaip/main/assets/red-divider.svg" width="100%">

<!-- COMO RODAR -->
<div align="center">

### &nbsp; 🚀 Como rodar

</div>

### 1. Clone o repositório
```bash
git clone https://github.com/notcostaip/ascii-animation.git
cd ascii-animation
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute
```bash
npm run dev
```

> O projeto estará rodando localmente na porta do Vite.

<!-- RED ANIMATED DIVIDER -->
<img src="https://raw.githubusercontent.com/notcostaip/notcostaip/main/assets/red-divider.svg" width="100%">

<!-- TECNOLOGIAS -->
<div align="center">

### &nbsp; 🛠️ Tecnologias

<br/>

<img src="https://skillicons.dev/icons?i=ts,html,css,vite&theme=dark" alt="Tech" />

<br/><br/>

</div>

- **[Vite](https://vitejs.dev/)** — Build tool rápida
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem
- **Canvas API (HTML5)** — Manipulação de pixels

<!-- RED ANIMATED DIVIDER -->
<img src="https://raw.githubusercontent.com/notcostaip/notcostaip/main/assets/red-divider.svg" width="100%">

<!-- ESTRUTURA -->
<div align="center">

### &nbsp; 📁 Estrutura do Projeto

</div>

```
ascii-animation/
├── index.html           ← Ponto de entrada
├── src/
│   ├── main.ts          ← Engine de renderização ASCII
│   └── style.css        ← Design System
└── public/
    └── video.mp4        ← Vídeo (Veigh)
```

<br/>

<!-- FOOTER -->
<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:7f1d1d,50:dc2626,100:991b1b&height=130&section=footer" />

<br/>

**Created by [Costa](https://github.com/notcostaip)**

</div>
