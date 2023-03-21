# Estudos em QA 
Este repositório foi criado com o intuito de fazer pequenos commits de estudos na área de QA. 
  
## Conteúdo 
O conteúdo estudado segue a linha da automação e testes.
Utilizando Puppeteer, Jest, Mocha e etc. 

## Arquivo device.test.js 
- Roda o navegador no modo anônimo
- Segue navegando pela página example.com enquanto altera o viewport da tela para diferentes devices a cada reload

## Arquivo example.test.js
- Navega até a página example.com onde efetua diversas verificações se está no domínio certo   
por meio da biblioteca de asserção Chai 
- Também utiliza alguns comandos customizados do arquivo helpers.js como: click, getText e getCount
- O teste também navega até a página Gran Cursos, clica em login (via botão customizado) e verifica se foi redirecionado  
procurando a ausência do seletor de login utilizado inicialmente. 

## Pré-requisitos 
- Node.js e NPM instalados na máquina

## Instalação
1 - Clone o repositório em sua máquina: git clone ttps://github.com/felipeportugalll/Estudos-qa

2 - Navegue até a pasta do projeto: cd seu-repositorio

3 - Instale as dependências do projeto: npm install

## Executando os testes
 - Teste example.test.js - no terminal rode o comando npm run test:example
 - Teste device.test.js -  no terminal rode o comando npm run test:device
