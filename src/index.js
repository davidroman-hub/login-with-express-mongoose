const express = require ('express');
const path = require ('path');
const exphbs = require('express-handlebars');
const methodOverride = require ('method-override');
const session = require ('express-session')
//Initualizations
const app = express();
require('./database');
//Settings
app.set('port', process.env.PORT || 3010);
/*  hay que decilre donde esta la carpeta views para las vistas*/ app.set('views', path.join(__dirname, 'views'))/* path.join sirve para conectar directorios */
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
            }))

app.set('view engine','.hbs');            
//Middlewares

app.use(express.urlencoded({extended:false}));/* extendes:false es para que solo nos mande sus datos no imagenes etc. */
/* cuando el usuario me envie su email y conmtraseña hay que recibir esos datos */
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave:true,
    saveUninitialized:true
}));

//Global Variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Server is listenning

app.listen(app.get('port'), () => {
    console.log('Server esta cagando y listening', app.get('port'));
})