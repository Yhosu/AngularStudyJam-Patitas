import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import desaparecidoRoutes from './routes/desaparecidoRoutes';


class Server {

    public app:Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    
    config(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors()); // para que angular pueda hacer peticiones
        this.app.use(express.json()); // para que se pueda enviar y recibir en formato json
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/desaparecidos',desaparecidoRoutes);

    }
    
    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Yhosu este es el puerto',this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();