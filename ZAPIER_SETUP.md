# 🔗 Guia de Integração com Zapier

## 📋 Passo a Passo para Configurar

### 1️⃣ Criar um Webhook no Zapier

1. Acesse [zapier.com](https://zapier.com) e faça login
2. Clique em **"Create Zap"** (Criar Zap)
3. No gatilho (Trigger), procure por **"Webhooks by Zapier"**
4. Selecione **"Catch Hook"** como evento
5. Clique em **"Continue"**
6. Copie a **URL do Webhook** que aparece (será algo como: `https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/`)

### 2️⃣ Configurar a URL no Projeto

1. Abra o arquivo `.env.local` na raiz do projeto
2. Cole a URL do webhook que você copiou:
   ```
   NEXT_PUBLIC_ZAPIER_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/
   ```
3. Salve o arquivo

### 3️⃣ Reiniciar o Servidor

No terminal, pare o servidor (Ctrl+C) e execute novamente:
```bash
npm run dev
```

### 4️⃣ Testar a Integração

1. Abra o site em `http://localhost:3000`
2. Preencha o formulário de contato
3. Clique em "Enviar Mensagem"
4. Volte para o Zapier e clique em **"Test Trigger"**
5. Você verá os dados do formulário aparecerem no Zapier! ✨

### 5️⃣ Configurar Ações no Zapier

Agora você pode adicionar ações ao seu Zap, como:

- ✉️ **Enviar Email** (Gmail, Outlook, etc.)
- 📊 **Salvar no Google Sheets**
- 💬 **Notificação no Slack**
- 📝 **Criar tarefa no Trello/Notion**
- 📧 **Adicionar contato no MailChimp**
- 💾 **Salvar no Airtable**
- E muito mais!

## 📦 Dados Enviados para o Zapier

O formulário envia os seguintes dados:

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

## 🎯 Exemplos de Automações Populares

### Exemplo 1: Enviar Email de Notificação
1. Trigger: Webhooks by Zapier (Catch Hook)
2. Action: Gmail (Send Email)
   - To: seu@email.com
   - Subject: Novo Lead do Site: {name}
   - Body: Use os campos capturados

### Exemplo 2: Salvar no Google Sheets
1. Trigger: Webhooks by Zapier (Catch Hook)
2. Action: Google Sheets (Create Spreadsheet Row)
   - Spreadsheet: Selecione sua planilha
   - Worksheet: Selecione a aba
   - Mapeie os campos

### Exemplo 3: Notificar no Slack
1. Trigger: Webhooks by Zapier (Catch Hook)
2. Action: Slack (Send Channel Message)
   - Channel: #vendas
   - Message: Novo lead! {name} - {email}

## 🔒 Segurança

⚠️ **IMPORTANTE**: 
- Nunca compartilhe sua URL de webhook publicamente
- O arquivo `.env.local` já está no `.gitignore` e não será enviado ao GitHub
- Mantenha suas credenciais seguras

## ❓ Problemas Comuns

### O formulário não está enviando?
- Verifique se a URL do webhook está correta no `.env.local`
- Certifique-se de ter reiniciado o servidor após adicionar a URL
- Abra o console do navegador (F12) para ver mensagens de erro

### O Zapier não está recebendo dados?
- Certifique-se de que o Zap está **ativado** (ligado)
- Teste clicando em "Test Trigger" no Zapier após enviar o formulário
- Verifique se a URL do webhook não expirou

## 🚀 Próximos Passos

Após configurar, você pode:
1. Personalizar os campos enviados
2. Adicionar validações extras
3. Criar múltiplas automações
4. Integrar com CRM (HubSpot, Salesforce, etc.)

---

**Criado com 💚 usando Lasy AI**
