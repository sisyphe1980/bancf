dataTest = [{ami : 'AMI455',
             numRapport : 'XXX',
            emetteur : 'LAFON ASSEMBLAGE',
            up : 'Automation',
            date : '24/10/2019',
            codeArticle : '17681000',
            indice : 'A',
            designation : 'Automate APL3',
            qte : 3,
            numSerie : ['1905-001','1905-001','1905-001','1905-001','1905-001'],
            anomalie : 'Ne fonctionne pas',
            fournisseur : 'GLOBALCOM',
            of : 'EQD001',
            commande : 'CF16584',
            avancement : 'Attente d\'analyse',
            dateCloture : '',
            responsableAction : 'Rémi Archambault',
            coutUnitaire : 1700},
			{ami : 'AMI454',
             numRapport : 'XXX',
            emetteur : 'LAFON ASSEMBLAGE',
            up : 'Automation',
            date : '24/10/2019',
            codeArticle : '17681000',
            indice : 'A',
            designation : 'Automate APL3',
            qte : 5,
            numSerie : ['1905-001','1905-001','1905-001','1905-001','1905-001'],
            anomalie : 'Ne fonctionne pas',
            fournisseur : 'GLOBALCOM',
            of : 'EQD001',
            commande : 'CF16584',
            avancement : 'Attente d\'analyse',
            dateCloture : '',
            responsableAction : 'Rémi Archambault',
            coutUnitaire : 100}
]

bancf = [];

dbBancf.serialize(function(){
    var stmt = dbBancf.prepare("insert into dbBancf values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

    for(var tempBancf of dataTest) {
    stmt.run(tempBancf.ami,tempBancf.numRapport,tempBancf.emetteur,tempBancf.up, tempBancf.dateEnregistrement, tempBancf.codeArticle, tempBancf.indice, 
        tempBancf.designationArticle, tempBancf.qte, tempBancf.numeroSerie, tempBancf.anomalie, tempBancf.fournisseur, tempBancf.of, tempBancf.commande,
        tempBancf.etatAvancement, tempBancf.dateCloture, tempBancf.responsableAction, tempBancf.coutUnitaire);
    }

});