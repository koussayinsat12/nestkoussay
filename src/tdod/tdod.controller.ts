import { Body, Controller,Delete,Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { response } from 'express';
import { Tdod } from './entities/tdod.entity';
import { NotFoundError } from 'rxjs';

@Controller('tdod')
export class TdodController {
    constructor(){
        this.tdodos=[];
    }
    tdodos:Tdod[];
    @Get()
    getTodos(
        @Query() mesquery
    ){  
        console.log(mesquery)
        return this.tdodos;
    }
    @Get('/:id')
    getTodosbyid(
        @Param('id') id
    ){
        const todo = this.tdodos.find((actualtodo) => actualtodo.id === +id);
        if (todo) {
            return todo;
        }
        throw new NotFoundError(`Le todo d'ID ${id} n'existe pas`);
    }
    
    @Delete()
    deleteTodos(){
        console.log("supprimer tous les todos");
        return "todos deleted";
    }
    @Post()
    addTodos(
        @Body() newTdodo: Tdod

    ){
        if (this.tdodos.length){
            newTdodo.id=this.tdodos[this.tdodos.length-1].id+1;        }
        else{
            newTdodo.id=1;
        }
        this.tdodos.push(newTdodo);

        return "Added Todos";

    }
}