import { Router } from 'express';
import {solicitudesController} from '../controladores/solicitudesController'
class SolicitudesRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void{
        this.router.post('/', solicitudesController.create);
        this.router.post('/ofertas', solicitudesController.readofertas);
    }
}
const solicitudesRoutes = new SolicitudesRoutes();
export default solicitudesRoutes.router;