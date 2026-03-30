# 🏎️ RedLine Hub — Vitrine de Performance

O **RedLine Hub** é uma aplicação web progressiva (PWA) de alta performance desenvolvida para entusiastas automotivos. O app funciona como uma vitrine inteligente de carros esportivos, utilizando dados em tempo real e recursos nativos de hardware para oferecer uma experiência imersiva e fluida.

> **Status do Desafio:** Concluído com nota máxima (Strikes: PWA, Hardware, Lighthouse e UI). ✅

---

## 🔗 Demonstração
Acesse a aplicação no ar através do link abaixo:
👉 **[CLIQUE AQUI PARA VER O REDLINE HUB](https://pedrolucas1804.github.io/RedLine-Hub/)**

---

## 🚀 Diferenciais e Pontos de "Strike"

### 1. 📱 UI Mobile-First Premium
Design desenvolvido com foco total na visualização em dispositivos móveis (Mobile-First).
* **Estética Dark Mode:** Interface em tons de grafite e vermelho racing, reduzindo o cansaço visual.
* **Upgrade Visual:** Inclusão de fotos reais e descrições técnicas detalhadas para marcas como Ferrari, Porsche e Lamborghini.

### 2. 📦 PWA (Progressive Web App)
O RedLine Hub é instalável e robusto.
* **Offline Ready:** Utiliza *Service Workers* para cachear arquivos essenciais, garantindo que o app abra mesmo sem conexão.
* **Manifesto:** Configurado com `manifest.json` para ser adicionado à tela inicial do smartphone com ícone próprio.

### 3. ⚡ Recurso de Hardware: Vibration API
Para aumentar a imersão sensorial, o app utiliza a **Vibration API**. Ao realizar uma busca bem-sucedida, o dispositivo emite um feedback tátil (vibração) que simula o "ronco" e a partida de um motor esportivo.

### 4. 📈 Métricas do Lighthouse
O projeto foi otimizado para atingir altos scores nas auditorias do Google Chrome:
* **Performance:** Carregamento otimizado de imagens e scripts.
* **Acessibilidade:** Uso de tags semânticas, ARIA labels e contrastes validados.
* **SEO:** Meta tags configuradas para melhor indexação.

---

## 🛠️ Tecnologias e Comunicação

Este projeto foi um exercício de **Comunicação Profissional** aplicada:
* **Redução de Ruído Tecnológico:** Implementação de tratamento de erros (`try/catch`) com mensagens claras ao usuário em caso de falha na API.
* **Objetividade e Clareza:** Interface limpa que elimina informações desnecessárias, focando na telemetria e nos dados técnicos do veículo.


---

## 📦 Como rodar o projeto
1. Clone este repositório.
2. Certifique-se de manter os arquivos `sw.js` e `manifest.json` na raiz.
3. Abra o `index.html` preferencialmente através de um servidor local (como a extensão *Live Server* do VS Code) para que o Service Worker seja registrado corretamente.

---
**Desenvolvido por:** [Seu Nome]  
**Curso:** Análise e Desenvolvimento de Sistemas (ADS) - Faculdade Senac PE  
**UC:** Comunicação Empresarial
