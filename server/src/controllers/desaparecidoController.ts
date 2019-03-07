import {Request,Response} from 'express';
import pool from '../database';

class DesaparecidosController{
    public async list(req:Request,res:Response){
        const games=await pool.query('SELECT * FROM desaparecidos');
        res.json(games);
    }

    public async getOne(req:Request,res:Response): Promise<any>{
        const { id } = req.params;
        const desaparecidos = await pool.query('SELECT * FROM desaparecidos WHERE id=?', [id]);
        if(desaparecidos.length>0){
            return res.json(desaparecidos[0]);
        }
        res.status(404).json({text:" doesnt exist"});
    
    }

    public async create(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO desaparecidos set ?',[req.body]);
        res.json({message:'Desaparecido añadido'});
    }

    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('UPDATE desaparecidos set ? WHERE id=?',[req.body,id]);
        res.json({message:'The lost was updated'});
    }

    public async delete(req:Request,res:Response):Promise<void>{
        const { id }=req.params;
        await pool.query('DELETE FROM desaparecidos WHERE id=?',[id]);
        res.json({message: "The lost was deleted"});
    }
}

export const desaparecidosController=new DesaparecidosController();
export default desaparecidosController;