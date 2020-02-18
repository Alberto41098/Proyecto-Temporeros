import { Router } from 'express';
import { provinciasController } from '../controladores/provinciasController';
class ProvinciasRoutes{
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', provinciasController.read);
    }
}
const provinciasRoutes = new ProvinciasRoutes();
export default provinciasRoutes.router;
