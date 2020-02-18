import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import provinciasRoutes from './routes/provinciasRoutes';
import trabajadoresRoutes from './routes/trabajadoresRoutes';
import empresasRoutes from './routes/empresasRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Servidor {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3300);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }
    
    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/trabajadores', trabajadoresRoutes);
        this.app.use('/empresas', empresasRoutes);
        this.app.use('/provincias', provinciasRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('el servidor esta escuchando en el puerto '+ this.app.get('port'))
        });    
    }

}
const servidor = new Servidor();
servidor.start();