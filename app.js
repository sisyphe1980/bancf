const fs = require('fs');
const express = require('express');
xl = require('excel4node');
const sqlite3 = require('sqlite3').verbose();
const expHbs = require('express-handlebars');
const bodyParser = require('body-parser');

app = express();
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({extended : true}));

app.engine('handlebars', expHbs ({"default-layout" : "main"}));
app.set('view engine', 'handlebars');
/*création des bdds si elle n'existe pas*/
dbBancf = new sqlite3.Database('bancf.db');
dbBancf.serialize(function() {
    dbBancf.run("create table if not exists dbBancf (ami,numRapport,emetteur,up,dateEnregistrement,codeArticle,indice,designationArticle,qte,numeroSerie,\
                        anomalie,fournisseur,of,commande,etatAvancement,dateCloture,responsableAction, coutUnitaire)");   
});
/*Inclusion des modèles ici*/
dataBancf = require('./models');
//data = dataBancf.getAllBdd();
//console.log(data);
/** test Lecture fichier csv**/
/*
data = fs.readFileSync('./database/test-fournisseur.csv', {encoding : 'utf-8'});
data = data.split('\r\n');

data = data.map(x=>x.split(";"));
data = data.reduce((acc, val) => acc.concat(val),[]);
var dataLen = data.length;
function getData(keyCode,keyIndice) {
    //let index = data.indexOf(keyCode);
    for(var index = 0; index < dataLen; index=index+7) {
        if(data[index] == keyCode && data [index+1] == keyIndice) {
            return {codeArticle : data[index],
                indice : data[index+1],
                libelle : data[index+2],
                libelle2 : data[index+3],
                fournisseurNumber:data[index+4],
                fournisseur : data[index+5],
                cout : data[index+6]};
        }
    }
    return "pas de correspondance";
}
console.log(getData('17681000','B'));
*/

/*Inclusion des routes ici */
require('./routes/home');

app.listen(3000);

console.log('Is running');
console.log(bancf);