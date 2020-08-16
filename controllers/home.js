exports.index = (req, res) => {
    dbBancf.serialize(function() {
        dbBancf.all("select * from dbBancf", function(err, rows) {
            if(err) {
                console.log(err);
            } else {
                bancf = rows;
                res.render('home', {listBancf : bancf});
            }
        });
    });
    
}

exports.createReport = (req, res) => {
    dbBancf.serialize(function() {
        dbBancf.all("select distinct fournisseur from dbBancf where numRapport = \"\"", function(err, rows) {
            if(err) {
                console.log(err);
            } else {
                console.log(rows);
                res.render('formGenereRapport', {listFrnsForReport : rows});
            }
        });
    });
    
    //var test = require('../lib/createReport');
    //test.create();
}

exports.newBancf = (req, res) => {
    res.render('formBancf');
}


/*Attention améliorer le retour à accueil avec l'ajout si ok du nouvel objet bancf */
exports.saveBancf = (req, res) => {
    bancf.push(req.body);
    dbBancf.serialize(function(){
        var stmt = dbBancf.prepare("insert into dbBancf values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        var tempBancf = req.body;
        tempBancf['numRapport'] = "";
        tempBancf['commande'] = "";
        tempBancf['dateCloture'] = "";
        console.log(tempBancf);
        console.log(stmt);
        stmt.run(tempBancf.ami,tempBancf.numRapport,tempBancf.emetteur,tempBancf.up, tempBancf.dateEnregistrement, tempBancf.codeArticle, tempBancf.indice, 
            tempBancf.designationArticle, tempBancf.qte, tempBancf.numeroSerie, tempBancf.anomalie, tempBancf.fournisseur, tempBancf.of, tempBancf.commande,
            tempBancf.etatAvancement, tempBancf.dateCloture, tempBancf.responsableAction, tempBancf.coutUnitaire);
            res.redirect('/');
    });
    console.log('Insertion en bdd');
    //res.render('home',  {listBancf : bancf});
}

exports.deleteObjBancf = (req, res) => {
    console.log(req.body);
    console.log(req.body.data);
    dbBancf.serialize(function() {
        dbBancf.run("delete from dbBancf where ami = ?", req.body.data, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log('l\'objet bancf avec pour numéro d\'ami' + req.body.data + ' est supprimé ');
                res.end("ok");
            }
        });
    });
}