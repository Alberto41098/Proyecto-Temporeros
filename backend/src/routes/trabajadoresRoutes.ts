import { Router } from 'express';
import {trabajadoresController} from '../controladores/trabajadoresController'
class TrabajadoresRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void{
        this.router.post('/', trabajadoresController.create);
        this.router.get('/', trabajadoresController.read);
        this.router.put('/:id', trabajadoresController.update);
        this.router.delete('/:id', trabajadoresController.delete);
        this.router.get('/:id', trabajadoresController.readone);
        this.router.post('/login',trabajadoresController.readlogin);
    }
}
const trabajadoresRoutes = new TrabajadoresRoutes();
export default trabajadoresRoutes.router;