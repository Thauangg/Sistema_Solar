# Sistema Solar Interativo

Um projeto web interativo que simula o sistema solar com animações e controles interativos.

## 📝 Descrição

Este projeto é uma representação visual e interativa do sistema solar, mostrando o Sol e os planetas mais próximos (Mercúrio, Vênus, Terra e Marte) em suas órbitas, incluindo a Lua orbitando a Terra. O sistema possui controles de velocidade, pausa e um painel informativo.

## 🚀 Funcionalidades

- Animação contínua dos planetas em órbita
- Controle de pausa/continuação da animação
- Controle de velocidade das órbitas
- Painel lateral com lista de planetas
- Efeito de destaque ao passar o mouse sobre os planetas no painel
- Design responsivo e visual atraente

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Animações e Transformações)
- JavaScript (Vanilla)

## 📁 Estrutura do Projeto

sistema-solar/
│
├── solar_system.html
├── solar_system.css
├── solar_system.js
└── README.md

## 💻 Como Usar

1. Clone o repositório ou baixe os arquivos
2. Abra o arquivo `solar_system.html` em um navegador web moderno
3. Interaja com o sistema usando:
   - O botão "Pausar" para parar/continuar as animações
   - O controle deslizante para ajustar a velocidade
   - O painel lateral para identificar e destacar planetas

## 🔍 Detalhes de Implementação

### HTML (solar_system.html)
- Estrutura básica da página
- Controles de interação (botão de pausa e controle de velocidade)
- Painel lateral com lista de planetas
- Container principal com os elementos do sistema solar

### CSS (solar_system.css)
- Estilização geral e posicionamento dos elementos
- Animações das órbitas dos planetas
- Estilos do painel lateral e controles
- Efeitos visuais (sombras, brilho, etc.)
- Classes para interatividade (hover, active, etc.)

#### Principais Classes CSS:
- `.container`: Container principal do sistema solar
- `.sun`: Estilização do sol
- `.planet`: Estilização base dos planetas
- `.orbit`: Configuração das órbitas
- `.planet-panel`: Estilização do painel lateral
- `.color-dot`: Indicadores coloridos no painel

### JavaScript (solar_system.js)
- Controle de pausa/continuação das animações
- Ajuste de velocidade das órbitas
- Interatividade do painel lateral
- Efeitos de destaque nos planetas

#### Principais Funcionalidades:
1. **Controle de Pausa**
   ```javascript
   pauseBtn.addEventListener('click', () => {
       isPaused = !isPaused;
       // Toggle da classe paused
   });
   ```

2. **Controle de Velocidade**
   ```javascript
   speedControl.addEventListener('input', (e) => {
       const speed = e.target.value;
       // Ajuste da velocidade de animação
   });
   ```

3. **Interação com Planetas**
   ```javascript
   planetItems.forEach(item => {
       item.addEventListener('mouseenter', () => {
           // Destaque do planeta
       });
   });
   ```

## 🎨 Personalização

Você pode personalizar o projeto alterando:
- Cores dos planetas no CSS
- Velocidades das órbitas
- Tamanhos dos elementos
- Efeitos visuais
- Layout do painel lateral

## ⚠️ Requisitos

- Navegador web moderno com suporte a:
  - CSS3 Animations
  - CSS3 Transforms
  - JavaScript ES6+

## 🤝 Contribuição

Sinta-se à vontade para contribuir com o projeto:
1. Faça um Fork
2. Crie uma Branch para sua feature
3. Faça o Commit das mudanças
4. Faça o Push para a Branch
5. Abra um Pull Request

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## ✨ Melhorias Futuras Possíveis

- Adicionar mais planetas do sistema solar
- Incluir informações detalhadas sobre cada planeta
- Adicionar efeitos sonoros
- Implementar modo noturno/diurno
- Adicionar visualização em 3D
- Incluir estatísticas e dados reais dos planetas

## 👥 Thauan de Souza

[Thauan de Souza]

---

Feito com ❤️ e JavaScript

