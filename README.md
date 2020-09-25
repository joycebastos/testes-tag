# testes-tag

Testes e2e
Os cenários foram escritos com cypress
Não priorizei todos os cenários que julgava mais importante, porém o fluxo do Produto Checkout, com as caixinhas e os planos anuais e mensais eu julguei muito importante todas asetapas, pois tratasse de um fluxo de retenção do cliente, por isso escolhi alguns desses cenários para automatizar.
A estrutura dos testes são:
separar comandos que se repentem para que possa ser reaproveitado, em support/commands.js
separar elementos de tela do scrip em si, em arquivos na pasta pages
scripts de testes encontram-se na pasta integration

Para fazer os testes rodarem em cypres necessário instalar o node e o cypress.
Após a instalação rodar o comando npx cypress open



Cenários de Testes
Utilizei a escrita BDD (Behavior Driven Development) por ser uma linguagem mais simples e de fácil entendimento onde eu conseguiria expor pré condiçoes do teste, açao efetuada e resultado esperado após minha açao.
Escrevi alguns cenários (que foram automatizados no teste e2e) do produto Checkout e alguns cenários do produto Cabeceira.

Para fazer os testes rodarem em cypres necessário instalar o node e o cypress.
Após a instalação rodar o comando npx cypress open
