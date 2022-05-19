---
inject: true
append: true
to: components/index.ts
sh: yarn eslint --fix components/index.ts
---
export * from './<%=Name%>'