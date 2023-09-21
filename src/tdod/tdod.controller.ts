import { Controller,Delete,Get, Post, Req, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('tdod')
export class TdodController {


    @Get()
    getTodos(

    ){
        console.log("Recuperer tous les todos");
        return "La liste des todos"
    }
    @Delete()
    deleteTodos(){
        console.log("supprimer tous les todos");
        return "Liste de todos";
    }
    @Post()
    addTodos(){
        console.log("ajouter tous les todos");
        return "Liste de todos";
    }



}
