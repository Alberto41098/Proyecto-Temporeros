import { Router } from 'express';
import {empresasController} from '../controladores/empresasController'
class EmpresasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void{
        this.router.post('/', empresasController.create);
        this.router.get('/', empresasController.read);
        this.router.put('/:id', empresasController.update);
        this.router.delete('/:id', empresasController.delete);
        this.router.get('/:id', empresasController.readone);
        this.router.post('/login',empresasController.readlogin);
        this.router.get('/provincia', empresasController.readprovincia);
        this.router.get('/email/:email', empresasController.reademail);
        this.router.get('/NIF/:nif', empresasController.readnif);
        this.router.post('/empresa', empresasController.readtoken);
    }
}
const empresasRoutes = new EmpresasRoutes();
export default empresasRoutes.router;