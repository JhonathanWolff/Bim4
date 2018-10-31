var express = require('express'); //import do mÃƒÂ³dulo
var app = express(); //Cria uma instancia do express
var bodyParser = require('body-parser');
app.listen(8080); //App irÃƒÂ¡ responder na porta 5000

var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}





var Candidatos = require('./partidos.json')

var Vereadores = require('./Vereadores.json')

candi (Candidatos)
ver (Vereadores);



function ver(obj)
{
    var candi = []
 
  

    for (var i = 0; i < obj.length;i++ )
    {
        if(obj[i].numero != "\n")
        {
            var pessoa = {
                "name": obj[i].name,
                "deferimento": obj[i].deferimento,
                "numero": obj[i].numero,
                "presidente_nacional": obj[i].presidente_nacional,
                "id": obj[i].id,
                "sigla": obj[i].sigla
                ,"image": base64_encode(obj[i].image+".png")
            }

            candi.push(pessoa);
           
        }
    }

    Vereadores = candi;
    console.log(Candidatos.length + "   Vereadores");
}


function candi(obj)
{
    var candi = []
 
   

    for (var i = 0; i < obj.length;i++ )
    {
        if(obj[i].numero != "\n")
        {
            var pessoa = {
                "name": obj[i].name,
                "deferimento": obj[i].deferimento,
                "numero": obj[i].numero,
                "presidente_nacional": obj[i].presidente_nacional,
                "id": obj[i].id,
                "sigla": obj[i].sigla
                ,"image": base64_encode(obj[i].image+".png")
            }

            candi.push(pessoa);
           
        }
    }

    Candidatos = candi;
    console.log(Candidatos.length + "   Prefeitos");
}



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));








app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');    
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/candidatos', function(req, res) {
    

    
	res.end(JSON.stringify(Candidatos));
});
app.get('/vereadores', function(req, res) {
    

    
	res.end(JSON.stringify(Vereadores));
});

app.get('/testeGet/:id', function(req, res) {
	var id = req.param('id'); 
	res.end(id);
});

app.post('/voto', function(req, res) {
    console.log(req)
	res.json("ok");
});









app.post('/testePost2', function(req, res) {
  
   
 
});




app.put('/testePut', function(req, res) {
 
});

function adicionar(email,senha,patente,idade,matricula)
{
     /*  ARMAZENA O NOVO USUARIO EM UMA LISTA DE OBJ */
     usuarios = {'email':email,'senha':senha,'patente': patente,'idade': idade ,'matricula' : matricula};
    obj.push(usuarios);
    console.log(obj);
}

function ocorrencia(ocorrencia,vitima,policial,data,status)
{
    /* ARMAZENA A OCORRENCIA NA LISTA  */
    var id = randomIntFromInterval(1,1000);
   var ocorrencia = {'ocorrencia':ocorrencia,'vitima':vitima,'policial': policial,'data': data,'status':status,id:id};
    ocorrencias.push(ocorrencia);
    console.log(ocorrencias);
}

function randomIntFromInterval(min,max)
{
     /* GERA UM ID ALEATORIO PARA A OCORRENCIA */
    return Math.floor(Math.random()*(max-min+1)+min);
}