import mongose from 'mongoose'

mongose.connect('mongodb+srv://josueestrada:admin@cluster0.b8abl.mongodb.net/test')
    .then((db:any) => console.log('Database is Connected'))
    .catch((err:any) => console.log(err));