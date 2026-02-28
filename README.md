# ⚡ Lex Traffic — Agente de Tráfego

Sistema de gestão de tráfego pago e orgânico com IA para **Mauro Monção Advogados**.

## 🚀 Funcionalidades

- **Dashboard** — KPIs em tempo real: leads, CPL, ROAS, investimento
- **Campanhas** — Google Ads + Meta Ads gerenciados por IA
- **Analytics** — Gráficos de performance detalhados (14/30 dias)
- **Conteúdo IA** — Blog, redes sociais, copies gerados pelo Lex Conteúdo
- **Leads** — CRM integrado com pipeline de conversão
- **Agentes IA** — 6 agentes automatizados (Lex Conteúdo, Campanhas, Marketing, Relatório, Criativo, Monitor)
- **Palavras-chave** — Pesquisa e monitoramento de keywords
- **Configurações** — Integração com Google Ads API, Meta API, Gemini, Genspark

## 🤖 Agentes IA

| Agente | Modelo | Agendamento |
|--------|--------|-------------|
| Lex Conteúdo | Gemini 2.5 Pro | Diário 07:00 |
| Lex Campanhas | GPT-5 (Genspark) | Diário 08:00 e 18:00 |
| Lex Marketing | Claude Opus + Flux | Diário 07:05 |
| Lex Relatório | Gemini 2.5 Pro | Segunda 09:00 |
| Lex Criativo | Flux 2 + Imagen 4 | Sob demanda |
| Lex Monitor | Gemini 2.5 Flash | A cada 2h |

## 🛠️ Instalação

```bash
npm install
cp .env.example .env
# Preencher variáveis no .env
npm run dev
```

## 🚀 Deploy (Vercel)

```bash
git push origin main  # Deploy automático via CI/CD
```

## 📊 Stack Técnico

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js serverless (Vercel Functions)
- **IA**: Gemini 2.5 Pro/Flash + GPT-5 (Genspark) + Claude Opus
- **Ads**: Google Ads API v23 + Meta Marketing API v21
- **DB**: PostgreSQL (Neon.tech) + Drizzle ORM
- **CI/CD**: GitHub → Vercel auto-deploy
- **Cron**: Vercel Cron Jobs (4 schedules)

## 📋 Variáveis de Ambiente

Ver `.env.example` para lista completa.

## 🔗 URLs

- **Produção**: `https://lex-traffic.vercel.app`
- **Domínio customizado**: `https://trafico.mauromoncao.adv.br`
