# Beecrowd em TypeScript

Repositório de estudos de lógica de programação e prática de TypeScript por meio dos exercícios da plataforma Beecrowd.

## Objetivos

- Praticar lógica de programação
- Ganhar fluência com TypeScript
- Revisar fundamentos da linguagem
- Registrar minha evolução nos exercícios

## Ambiente

- Node.js
- TypeScript 5.1
- tsx

## Organização dos exercícios

Os exercícios ficam armazenados na pasta `src` e organizados por categoria.

Exemplo:

```text
src/
├── iniciante/
│   ├── bee1000.ts
│   ├── bee1001.ts
│   └── bee1002.ts
├── strings/
└── ad-hoc/
```

## Executando os exercícios

Para executar um exercício localmente:

```bash
npm run dev -- src/categoria/nome-do-arquivo.ts
```

Exemplo:

```bash
npm run dev -- src/iniciante/bee1000.ts
```

O projeto utiliza `tsx` para executar os arquivos TypeScript diretamente, sem necessidade de compilação manual.

## Testando exercícios com entrada

Para exercícios que recebem valores pela entrada padrão, é possível enviar os dados diretamente pelo PowerShell.

Exemplo com dois valores em linhas diferentes:

```powershell
"2`n2" | npm run dev -- src/iniciante/bee1001.ts
```

Nesse comando, `` `n `` representa uma quebra de linha no PowerShell.

Assim, a entrada enviada para o programa equivale a:

```text
2
2
```