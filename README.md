## Explicação arquitetura ##
A arquitetura demonstrada é baseada em FDD(feature driven development), onde divido minha aplicação em modules e features.
Na nossa aplicação da marvel, tivemos apenas 1 module (Main), que corresponde as funcionalidades principais do app.
Tivemos 2 funcionalidades: Home e Welcome. A primeira lista todos os quadrinhos onde nossa querida Danvers aparece, e a segunda é uma tela de boas vindas da aplicação.

App está integrado ao OneSignal e pode receber push notification a qualquer momento.

O app está totalmente coberto pelo redux, persisto as comics na store, o app pode ser usado offline também, uma vez que tenha carregado qualquer comics;

Uma aplicação desse porte não precisaria da metade da estrutura apresentada aqui, mas fiz questão de densenvolve-la para fins de demonstração da escalabilidade que o produto pode ter, fora divisões de camadas que um app deve ter para melhor manutenibilidade;

Decidi fazer o modelo carrousel para as comics para fugir um pouco da lista tradicional.
As comics são carregadas de 20 em 20, ao chegar no final, carrega-se mais 20, cumprindo assim o requisito de lazyload.

ps: gostaria de ter feito algo mais bem acabado com animações e etc... mas pelo prazo de 2 dias, decidi fazer algo mais simples visualmente, mas com uma arquitetura bem sólida e construida. 

## Paços para executar a aplicação  ##

Ao baixar o codigo fonte, executar npm i ou yarn
Como foi usado cli, abrir a pasta android no Android Studio e esperar o gradle fazer todas configurações necessárias
Ao abrir o emulador ou dispositivo fisico, executar o comando react-native run-android no terminal, no nivel "/frontend-test"

Se não conseguirem rodar o projeto por alguma falha no ambiente, gerei o APK do app na raiz do projeto, é só instalar em qualquer aparelho android que vcs conseguirão testar o app.
Nome do apk front-end-test-marvel.apk