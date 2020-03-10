import { Router } from 'express';
import {solicitudesController} from '../controladores/solicitudesController'
class SolicitudesRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void{
        this.router.get('/:trabajador_id/:oferta_id', solicitudesController.create);
    }
}
const solicitudesRoutes = new SolicitudesRoutes();
export default solicitudesRoutes.router;