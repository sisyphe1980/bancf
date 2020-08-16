let home = require('../controllers/home.js');

app.get('/', home.index);
app.get('/createReport', home.createReport);
app.get('/new', home.newBancf);
app.post('/saveBancf', home.saveBancf);
app.post('/deleteObjBancf', home.deleteObjBancf);