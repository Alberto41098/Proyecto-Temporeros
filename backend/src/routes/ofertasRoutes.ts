import { Router } from 'express';
import { ofertasController } from '../controladores/ofertasController';
class OfertasRoutes{
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.post('/', ofertasController.create);
        this.router.get('/', ofertasController.read);
        this.router.post('/busqueda', ofertasController.readofertasbuscador);
        this.router.post('/trabajador', ofertasController.readofertastrabajador);
        this.router.post('/empresa', ofertasController.readofertasempresa);
        this.router.get('/ofertas', ofertasController.readofertasultimas);
        
    }
}
const ofertasRoutes = new OfertasRoutes();
export default ofertasRoutes.router;
