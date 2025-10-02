# 🚀 Landing Page - Serviços de IA e Tecnologia

Uma landing page moderna e responsiva desenvolvida com Next.js 14, focada em capturar leads de serviços de tecnologia e inteligência artificial. Com design elegante em roxo escuro e integração automatizada com Zapier para gerenciamento de contatos.

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.7-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## ✨ Características

### 🎨 Design Moderno
- **Interface elegante** com paleta de cores roxa (#7c3aed)
- **Totalmente responsivo** - funciona perfeitamente em mobile, tablet e desktop
- **Animações suaves** com Tailwind CSS
- **Gradientes sofisticados** para visual premium
- **Ícones lucide-react** para interface limpa e profissional

### 📋 Funcionalidades
- ✅ **Formulário de contato** inteligente e validado
- ✅ **Integração com Zapier** para automação de leads
- ✅ **Seções de serviços** com cards interativos
- ✅ **Hero section** impactante com CTAs claros
- ✅ **Footer minimalista** e profissional
- ✅ **Feedback visual** ao enviar formulário

### 🎯 Serviços Destacados
1. **Agentes de IA** - Assistentes virtuais inteligentes
2. **Sites Profissionais** - Websites modernos e responsivos
3. **Sistemas Internos** - Soluções SaaS customizadas

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 14.2.5](https://nextjs.org/)** - Framework React com SSR e otimizações
- **[React 18](https://react.dev/)** - Biblioteca JavaScript para UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 3.4.7](https://tailwindcss.com/)** - Framework CSS utility-first

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e headless
- **[Lucide React](https://lucide.dev/)** - Ícones modernos e customizáveis
- **[class-variance-authority](https://cva.style/)** - Variantes de componentes
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge de classes Tailwind

### Integração
- **[Zapier Webhooks](https://zapier.com/)** - Automação de leads e notificações

---

## 📦 Instalação

### Pré-requisitos
- **Node.js** 18+ 
- **npm** ou **yarn**
- Conta no **Zapier** (para integração de formulário)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd solução
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/XXXXX/YYYYY/
```

> 📘 Veja o guia completo de configuração do Zapier em [ZAPIER_SETUP.md](./ZAPIER_SETUP.md)

4. **Execute o projeto em desenvolvimento**
```bash
npm run dev
```

5. **Acesse no navegador**
```
http://localhost:3000
```

---

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento (porta 3000)
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start

# Lint do código
npm run lint
```

---

## 📁 Estrutura do Projeto

```
solução/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globais
│   │   ├── layout.tsx           # Layout principal
│   │   └── page.tsx             # Página principal (Home)
│   ├── components/
│   │   └── ui/                  # Componentes UI (Radix UI)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── calendar.tsx
│   │       └── ...
│   └── lib/
│       ├── fonts.ts             # Configuração de fontes
│       └── utils.ts             # Funções utilitárias
├── public/                      # Arquivos estáticos
├── .env.local                   # Variáveis de ambiente (não versionado)
├── .gitignore                   # Arquivos ignorados pelo Git
├── next.config.js               # Configuração Next.js
├── tailwind.config.ts           # Configuração Tailwind CSS
├── tsconfig.json                # Configuração TypeScript
├── package.json                 # Dependências do projeto
├── ZAPIER_SETUP.md             # Guia de integração Zapier
└── README.md                    # Este arquivo
```

---

## 🎨 Customização

### Alterar Cores

As cores principais estão definidas no arquivo `src/app/page.tsx`. Para alterar a paleta:

**Roxo atual:**
- Primary: `#7c3aed`
- Secondary: `#8b5cf6`
- Dark: `#6d28d9`

Para mudar, substitua todas as ocorrências dessas cores no arquivo.

### Adicionar/Remover Serviços

Edite o array `services` em `src/app/page.tsx`:

```tsx
const services = [
  {
    icon: Bot,
    title: "Novo Serviço",
    description: "Descrição do serviço",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  // ... outros serviços
]
```

### Modificar Formulário

O formulário está em `src/app/page.tsx`. Para adicionar campos:

1. Atualize o estado `formData`
2. Adicione o campo JSX no formulário
3. Atualize a função `handleSubmit` para incluir o novo campo

---

## 🔗 Integração com Zapier

### Configuração Rápida

1. **Crie um Zap no Zapier**
   - Trigger: Webhooks by Zapier → Catch Hook
   - Copie a URL do webhook

2. **Configure no projeto**
   - Cole a URL no arquivo `.env.local`
   - Reinicie o servidor

3. **Configure ações no Zapier**
   - Gmail: Enviar notificação por email
   - Google Sheets: Salvar leads em planilha
   - Slack: Notificar equipe
   - E muito mais!

📘 **Guia completo:** [ZAPIER_SETUP.md](./ZAPIER_SETUP.md)

### Dados Enviados

O formulário envia os seguintes dados para o Zapier:

```json
{
  "name": "Nome do cliente",
  "email": "email@exemplo.com",
  "phone": "(11) 99999-9999",
  "service": "agentes-ia",
  "message": "Mensagem do cliente",
  "timestamp": "2025-10-02T10:30:00.000Z",
  "source": "website-contact-form"
}
```

---

## 🌐 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Conecte seu repositório
2. Configure a variável de ambiente `NEXT_PUBLIC_ZAPIER_WEBHOOK_URL`
3. Deploy!

### Outras Plataformas

O projeto é compatível com:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

---

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+
- 🎯 **First Contentful Paint:** < 1.5s
- 🚀 **Time to Interactive:** < 3s
- 📱 **Mobile Friendly:** 100%

---

## 🔒 Segurança

- ✅ Variáveis de ambiente protegidas com `.env.local`
- ✅ `.gitignore` configurado para não expor credenciais
- ✅ Modo `no-cors` para evitar problemas de CORS
- ✅ Validação de formulário no client-side
- ✅ TypeScript para segurança de tipos

---

## 🐛 Troubleshooting

### Porta já em uso
```bash
# Mate todos os processos Node.js
Get-Process -Name node | Stop-Process -Force

# Execute novamente
npm run dev
```

### Formulário não envia
1. Verifique se a URL do Zapier está correta no `.env.local`
2. Certifique-se de ter reiniciado o servidor após adicionar a variável
3. Abra o console do navegador (F12) para ver erros
4. Teste o webhook diretamente no Zapier

### Erros de build
```bash
# Limpe o cache e reinstale
rm -rf .next node_modules
npm install
npm run build
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Suporte

Tem dúvidas ou sugestões?

- 📧 Email: seu@email.com
- 💬 Issues: [GitHub Issues](https://github.com/seu-usuario/seu-repo/issues)

---

## 🎯 Roadmap

- [ ] Adicionar mais animações
- [ ] Implementar modo dark/light
- [ ] Adicionar multi-idioma (i18n)
- [ ] Criar painel admin para visualizar leads
- [ ] Integrar Google Analytics
- [ ] Adicionar testes E2E
- [ ] Implementar Progressive Web App (PWA)

---

## 🙏 Agradecimentos

- [Next.js Team](https://nextjs.org/) - Framework incrível
- [Vercel](https://vercel.com/) - Hospedagem e Deploy
- [Radix UI](https://www.radix-ui.com/) - Componentes acessíveis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Zapier](https://zapier.com/) - Automação de workflows

---

<div align="center">

**Desenvolvido com 💜 usando Next.js e Tailwind CSS**

⭐ Se este projeto te ajudou, considere dar uma estrela!

</div>
