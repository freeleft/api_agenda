# API em Node.Js com banco MongoDb, demonstrando o funcionamento de uma agenda de contatos simples.
Feito por: Mario, Otávio e Thiago.

## Tecnologias e modulos utilizados

- Node.Js
- Express.Js
- RestFul
- MongoDb via mlab.com
- Mongoose
- JSON
- Postman
- GIT
- Visual Studio Code

## Testando a Aplicação no Postman:

Para simular as chamadas da API recomendamos utilizar o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).

  ROTA                                               | TIPO |    Descrição      |      Observação       |
---------------------------------------------------- |----- | ------------------|-----------------------|
http://localhost:8080/api_agenda/contatos              |POST  | Inserir Contato   | x-www-form-urlencoded |
http://localhost:8080/api_agenda/contatos              |GET   | Selecionar Todos  |                       |
http://localhost:8080/api_agenda/contatos/:contato_id  |GET   | Selecionar Por Id |                       |
http://localhost:8080/api_agenda/contatos/:contato_id  |PUT   | Atualizar Por Id  | x-www-form-urlencoded |
http://localhost:8080/api_agenda/contatos/:contato_id  |DELETE| Excluir Por Id    |                       |

A API permite inserir os dados também via JSON, no passo a passo é dado um exemplo desse tipo de inserção.

### Pre-Requisitos

Para usar os recursos do GIT é necessária a instalação do [Git](https://git-scm.com/).

Necessário ter o [Node.js](https://nodejs.org/en/download/) instalado para rodar a aplicação.

Não é necessário ter instalado (embora seja possivel) o MongoDb localmente, uma vez que o projeto foi feito e testado com ajuda do site [MLab](https://mlab.com/)

## MLab usado no desenvolvimento, tela de gerenciamento
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/mlab.png)

## MLab usado no desenvolvimento, string de conexão
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/mlabc.png)


## Passos a Passo para executar a API com Visual Code

### Clonando o diretorio usando Visual Code

Abra uma instancia do visual code com projeto vazio e pressione shift+control+p

![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/vs1.png)

Cole no endereço o link repositorio https://github.com/freeleft/api_agenda e tecle enter

![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/vs2.png)

Escolha a paste destino de onde será clonado o repositorio

![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/vs3.png)

Após termino da cópia abra o repositorio

![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/vs4.png)

Abra o arquivo principal da api, o api_server.js

![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/vs5.png)

Abra o terminal e digite npm install para instalar as dependencias

![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/vs7.png)

por fim rode a api com o comando node .\api_server.js
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/vs8.png)

Alternativamente você pode rodar usando o menu do Visual Code
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/vs6.png)

Para testar a aplicação tente acessar [API](http://localhost:8080/api_agenda)      
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/vs9.png)

Caso decida rodar diretamente pelo prompt a mensagem será similar e o funcionanmento igual

## Mensagem da API ao iniciar
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/img1.png)


# Testando a API com PostMan

## Fazendo teste de inserção

  ROTA                                               | TIPO |
---------------------------------------------------- |----- | 
http://localhost:8080/api_agenda/contatos            |POST  |

```json
{
  "nome":"Mário",
  "email":"mario@sorocaba.ufscar.br",
  "telefone":"15911111111"
 }
```

![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/img2.png)


## Selecionando todos os contatos da agenda
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/img3.png)


## Selecionando por id de contato
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/img4.png)


## Atualizando um contato
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/img5.png)


## Excluindo um contato
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/img6.png)


## Exibindo que os contatos foi excluido
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/img7.png)

## Metodo de entrada alternativa com JSON, inserção de contato
![alt text](https://raw.githubusercontent.com/freeleft/api_agenda/master/images/img8.png)
