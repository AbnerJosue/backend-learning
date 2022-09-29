const mongose = require('mongoose');

mongose.connect('mongodb+srv://josueestrada:admin@cluster0.b8abl.mongodb.net/test',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then((db:any) => console.log('Database is Connected'))
    .catch((err:any) => console.log(err));