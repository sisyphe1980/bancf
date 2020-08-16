exports.create = function() {
    var wb = new xl.Workbook();

    var ws = wb.addWorksheet('test');

    var style = wb.createStyle({
        font : {
            color : '#ff0800',
            size : 14
        }
    });

    ws.cell(1,1).number(100).style(style);
    ws.cell(2,1).string("Un chaine de caractère");
    wb.write('Rapport/rapport.xlsx');
};