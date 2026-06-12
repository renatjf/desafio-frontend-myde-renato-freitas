# Desafio Frontend - Renato Freitas

## Visão geral

Este projeto é um cliente Next.js para uma aplicação de mensagens e chat, com sidebar de conversas, visualização de mensagens e sugestões de texto geradas por IA.

## Arquitetura do projeto

O projeto é organizado para separar responsabilidades e facilitar manutenção:

- `src/app/`
  - `page.tsx` — ponto de entrada da interface; monta `Sidebar` e `Chat` e controla a conversa selecionada.
  - `layout.tsx` — define o layout global do app.
  - `globals.css` — estilos globais e layout responsivo.
- `src/components/`
  - `Sidebar.tsx` — lista de conversas e seletor de conversa.
  - `Chat.tsx` — painel de chat, envio de mensagens e sugestão de IA.
  - `ChatHeader.tsx` — cabeçalho de conversa com título e informações de status.
- `src/features/`
  - `conversations/` — hooks e serviços para buscar lista de conversas.
  - `messages/` — hooks e serviços para buscar mensagens e enviar novas mensagens.
  - `ai/` — hooks e serviços para solicitar sugestões de texto ao endpoint de IA.
- `src/lib/api.ts` — cliente `axios` com `baseURL` configurado a partir de `NEXT_PUBLIC_API_URL`.
- `src/providers/ReactQueryProvider.tsx` — provedor do React Query para gerenciar cache e estado remoto.

Fluxo de dados:

1. `page.tsx` carrega a lista de conversas usando `useConversations`.
2. Ao selecionar uma conversa, `Chat` consulta mensagens com `useMessages`.
3. O envio de mensagens acontece via `useSendMessage` com atualização otimista.
4. A sugestão de texto é obtida por `useAiSuggestion` no endpoint `/ai/suggest`.

## Como rodar

1. Instale dependências:
   ```bash
   npm install
   ```
2. Crie o arquivo de ambiente:
   ```bash
   cat > .env.local <<'EOF'
   NEXT_PUBLIC_API_URL=https://8tymn68hp9.execute-api.us-east-1.amazonaws.com
   EOF
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o app em:
   ```
   http://localhost:3000
   ```

## Scripts

- `npm run dev` — executa o Next.js em modo de desenvolvimento
- `npm run build` — constrói a aplicação para produção
- `npm run start` — inicia o servidor de produção

## Variáveis de ambiente

- `NEXT_PUBLIC_API_URL` — URL base da API usada pelos serviços de conversa, mensagem e sugestão de IA.

## Decisões de arquitetura

- **Next.js App Router** para roteamento moderno e componentes server/client.
- **React Query (TanStack Query v5)** para cache, refetch automático e gerenciamento de estado de dados remotos.
- **Estrutura por feature** em `src/features/`, separando `conversations`, `messages` e `ai` para manter código organizado.
- **Componentização limpa** em `src/components/`, com `Sidebar`, `Chat`, `ChatHeader` e item de conversa.
- **Otimização UX** com atualização otimista de envio de mensagem e estado de carregamento de mutação.
- **CSS global simples** para layout responsivo e visual de chat.

## O que eu faria diferente com mais tempo

- Adicionar **tipagem TypeScript mais rigorosa** para os modelos de API e respostas de mutation.
- Criar **componentes reusáveis de UI** (botões, inputs, carregamento) e um design system leve.
- Implementar **testes automatizados**: unitários para hooks e componentes, e2e para fluxo de chat.
- Melhorar **tratamento de erros** com mensagens de feedback claras para falhas de rede e formulário.
- Adicionar **acessibilidade** completa (ARIA, navegação por teclado e foco no chat).
- Extrair o provedor de dados para um módulo de contexto mais claro, e potencialmente usar `zustand`/`jotai` para estado local mais previsível.

## Observações

- O projeto usa `axios` para chamadas HTTP e o endpoint de mensagem espera payload `{ text }`.
- Arquivos gerados como `node_modules/` e `.next/` estão ignorados pelo `.gitignore`.
  - Obrigado pela oportunidade
  - Projeto funcionando - https://desafio-front-myde-next.netlify.app/
  - Github do projeto publico: https://github.com/renatjf/desafio-frontend-myde-renato-freitas
