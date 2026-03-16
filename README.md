<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0ea5e9,100:6366f1&height=200&section=header&text=Gerenciador%20de%20Tarefas%20e%20Projetos&fontSize=40&fontColor=ffffff"/>
</p>

# Gerenciador de Tarefas e Projetos
Projeto desenvolvido como trabalho final do curso de Desenvolvimento Front-End com React. Este Gerenciador permite ao usuário administrar tarefas e projetos de forma organizada e prática, facilitando o planejamento das atividades da semana. O sistema conta com as seguintes páginas:
- **Home** – exibe as tarefas isoladas
- **Projetos** – exibe os projetos e suas tarefas
- **Feitos** – exibe o histórico de tarefas concluídas
- **Sobre** – exibe informações sobre a aplicação
- **Estatísticas** – apresenta estatísticas sobre tarefas e projetos

Além disso, o projeto utiliza um Back-End simulado com a biblioteca JSON Server, para fins de aprendizado sobre APIs e Web Services.

## Tecnologias 
<div>
  <img align="center" height="40" width="40"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
  <img align="center" height="40" width="40"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
  <img align="center" height="40" width="40"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
  <img align="center" height="40" width="40"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
  <img align="center" height="40" width="40"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"/>
  <img align="center" height="40" width="40"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"/>
  <img align="center" height="40" width="40"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
</div>

##

![preview](./screenshot.png)

## :hammer: Funcionalidades do projeto
- `Funcionalidade 1`: Adicionar projetos e tarefas, vinculadas ou não a um projeto
- `Funcionalidade 2`: Adicionar descrição e categoria relacionada à tarefa e/ou projeto
- `Funcionalidade 3`: Editar e deletar tarefas e projetos existentes
- `Funcionalidade 3`: Marcar tarefas e projetos como concluídos
- `Funcionalidade 3`: Alternar entre tema claro e escuro

## Estrutura do Projeto

```
src
 ├── components
 ├── pages
 ├── contexts
 ├── routes
 └── tests
```

## Como executar o projeto

1. Clone o repositório
```
git clone https://github.com/seuusuario/gerenciador-tarefas
```
2. Entre na pasta do projeto
```
cd gerenciador-tarefas
cd my-react-app
```
3. Instale as dependências
```
npm install
```
4. Execute o projeto
```
npm run dev
```
5. Em outro terminal, execute o backend simulado
```
npm run backend
```

## Deploy

Acesse a aplicação:  
[https://gerenciador-de-tarefas-web-service.vercel.app](https://gerenciador-de-tarefas-web-service.vercel.app/)

⚠️ Observação: este projeto utiliza um backend simulado com JSON Server executado localmente. 
Por isso, algumas funcionalidades que dependem da API podem não funcionar corretamente na versão publicada.

## Objetivo
Este projeto foi desenvolvido com o objetivo de desenvolver e aprimorar meus conhecimentos em React e seus conceitos como componentes, hooks, Context API, rotas e gerenciamento de estado, além de noções de frameworks com Tailwind CSS e noções de Web Services.
