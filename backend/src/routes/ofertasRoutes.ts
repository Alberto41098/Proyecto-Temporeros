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
    }
}
const ofertasRoutes = new OfertasRoutes();
export default ofertasRoutes.router;
