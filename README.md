# Challenge Next.js

Esse projeto é um desafio usando Next.js 15 com API Routes. A ideia foi manter tudo no mesmo repositório (frontend e backend), facilitando o deploy na Vercel sem depender de serviços externos.

## 🔗 Acesse o projeto

<a href="https://SEU-LINK-AQUI.vercel.app" target="_blank">
  <img src="https://img.shields.io/badge/Ver%20Projeto-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Ver Projeto na Vercel" />
</a>

## Estrutura do projeto

A estrutura está organizada pra deixar claro o que é cada parte do sistema e facilitar a manutenção:

- **app/**: onde ficam as rotas da aplicação.
- **api/**: rotas do backend (rodando como serverless functions).
- **features/**: onde ficam os componentes e hooks específicos de cada funcionalidade (ex: produtos).
- **components/**: componentes visuais reutilizáveis e genéricos.
- **domain/**: definição de modelos, schemas e regras de negócio.
- **hooks/**: hooks reutilizáveis e independentes de feature.
- **services/**: camada de acesso a dados (poderia ser API externa, aqui usa arquivo local).
- **utils/**: funções utilitárias pequenas e genéricas.

## Tecnologias

- **Next.js 15** com App Router e API Routes
- **TypeScript**
- **React 19**
- **Zod** para validação
- **React Hook Form** para formulários
- **React Query** para controle de cache e requisições
- **TailwindCSS** para estilização
- **Radix UI/Shadcn** para componentes acessíveis

## Por que essa estrutura?

Essa organização separa bem responsabilidades:

- O domínio da aplicação (regras e dados) fica isolado.
- Cada feature tem seu próprio espaço, o que facilita a leitura e manutenção.
- O backend fica no próprio projeto e já sobe junto no deploy.
- O frontend é separado por responsabilidade (components, hooks, services etc).

A ideia é deixar o projeto simples de entender, escalar e dar manutenção.
