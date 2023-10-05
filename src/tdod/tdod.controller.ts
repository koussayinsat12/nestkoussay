import { Body, Controller,Delete,Get, Inject, Param, Post, Query, Req, Res } from '@nestjs/common';
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
        ,@Inject('UUID') private readonly generate
    ){
    }
    @Get()
    getTodos(
        @Query() mesquery:GetPaginatedTodoDto
    ){  
        console.log(this.generate())
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