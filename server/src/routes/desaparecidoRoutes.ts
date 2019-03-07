import {Router} from 'express';
import desaparecidosController from '../controllers/desaparecidoController';
class DesaparecidosRoutes{
    public router:Router=Router();

    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/',desaparecidosController.list);
        this.router.get('/:id',desaparecidosController.getOne);
        this.router.post('/',desaparecidosController.create);
        this.router.put('/:id',desaparecidosController.update);
        this.router.delete('/:id',desaparecidosController.delete);
    }
}

const desaparecidosRoutes=new DesaparecidosRoutes();
export default desaparecidosRoutes.router;