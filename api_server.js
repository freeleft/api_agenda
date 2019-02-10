/** 
 * Arquivo: api_server.js
 * Author: Free Left
 * Descrição: Programa responsável pelo lado do servidor da API da Agenda, rodando em Node.Js
 * Data de Criação: 10/02/2019
**/

// Modulos necessário para API
var express     = require('express'); 
var app         = express(); 
var Contato     = require('./app/models/contato');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

// Conexão no mongodb do mlab
mongoose.connect('mongodb://agenda:agenda12345678@ds331135.mlab.com:31135/api_agenda',{useNewUrlParser: true}); 

// Conexão local
//mongoose.connect('mongodb://localhost:27017/api_agenda',{useNewUrlParser: true});

mongoose.set();

// Configuração de parametros vindo via POST (aceita application/x-www-form-urlencoded ou json)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Porta TCP da API, se não tiver várivel do ambiente pré definida use a porta 8080
var port = process.env.PORT || 8080;

// Váriavel para pegar as Rotas do Express module
var router = express.Router();

// Prefixo de todas rotas
app.use('/api_agenda', router);

// Processamento para tratar todas as requisições feita a API
router.use(function(req, res, next) {
    console.log('Entrou na API...');
    next();
});

// Rota para verificar se a API esta online (acessar através: GET: http://localhost:8000/api)
router.get('/', function(req, res) {
    res.json({ message: 'API esta online!!!' });
});

// Requisições com sufixos '/contatos'
router.route('/contatos')

    // Criar Contato http://localhost:8080/api/contatos (POST)
    .post(function(req, res) {
        var contato = new Contato();

        // Aqui setamos os campos do contato (que virá do request)
        contato.nome = req.body.nome;
        contato.email = req.body.email;
        contato.telefone = req.body.telefone;

        console.log(req.body);

        contato.save(function(error) {
            if(error){
                res.send(error);
                return;             
            }
                        
            res.json({ message: 'Contato criado!' });
        });
    })

    // Selecionar Todos Contatos http://locahost:8080/api/contatos (GET)
    .get(function(req, res) {

        // Buscar e retornar todos os contatos
        Contato.find(function(err, contatos) {
            if(err){
                res.send(error);
                return;                             
            }

            res.json(contatos);
        });
    });

// Requisições com sufixos '/contatos/:contato_id'
router.route('/contatos/:contato_id')

    // Selecionar Por Id http://localhost:8080/api/contatos/:contato_id (GET)
    .get(function(req, res) {

        //Função para Selecionar Por Id e verificar se há algum erro:
        Contato.findById(req.params.contato_id, function(error, contato) {
            if(error) {
                res.send(error);
                return;                             
            }
            if(!contato){
                res.json({ message: 'Id não encontrato.' });
                return;
            }            

            res.json(contato);
        });
    })

    // Atualizar um contato http://localhost:8080/api/contatos/:contato_id (PUT)
    .put(function(req, res) {

        //Função para Selecionar Por Id e verificar se há algum erro:
        Contato.findById(req.params.contato_id, function(error, contato) {
            if(error) {
                res.send(error);
                return;                             
            }               
            if(!contato){
                res.json({ message: 'Id não encontrato.' });
                return;
            }
            
            // Trazendo os dados a serem atualizados e fazendo alguns verificações
            if (req.body.nome)
                contato.nome = req.body.nome;
            if (req.body.email)
                contato.email = req.body.email;
            if (req.body.telefone)
                contato.telefone = req.body.telefone;

            // Salvando no banco o modelo
            contato.save(function(error) {
                if(error){
                    res.send(error);
                    return;                                 
                }

                res.json({ message: 'Contato Atualizado!' });
            });
        });
    })

    // Excluir Um Contato http://localhost:8080/api/contatos/:contato_id (DELETE)
    .delete(function(req, res) {
        
        // Excluindo contato
        Contato.deleteOne({
        _id: req.params.contato_id
        }, function(error, resp) {
            if(error){
                res.send(error);
                return;                             
            }
            if(resp.deletedCount==1){
                res.json({ message: 'Contato excluído com Sucesso! '});
            }            
            else{
                res.json({ message: 'Id não encontrato.' });            
                return;
            }
        });
    });

//Abrindo servidor
app.listen(port);
console.log('A API foi iniciado na porta ' + port);