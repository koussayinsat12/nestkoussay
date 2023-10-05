import { Body, Controller,Delete,Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { response } from 'express';
import { Tdod } from './entities/tdod.entity';
import { NotFoundError } from 'rxjs';
import { GetPaginatedTodoDto } from './dto/get-paginated-todo.dto';
import { AddTodoDto } from './dto/add-todo.dto';
import { TdodService } from './tdod.service';

@Controller('tdod')
export class TdodController {
    constructor(
        private todoService:TdodService
    ){
    }
    @Get()
    getTodos(
        @Query() mesquery:GetPaginatedTodoDto
    ){  
        console.log(mesquery)
        return this.todoService.getTodos();
    }
    @Get('/:id')
    getTodosbyid(
        @Param('id') id
    ){
       return this.todoService.getTodoById(+id);
    }
    
    @Delete()
    deleteTodos(){
        console.log("supprimer tous les todos");
        return "todos deleted";
    }
    @Post()
    addTodos(
        @Body() newTdodo: AddTodoDto

    ){  

        return this.todoService.addTodo(newTdodo);

    
}}