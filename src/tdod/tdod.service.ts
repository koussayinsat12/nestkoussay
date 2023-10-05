import { Injectable } from '@nestjs/common';
import { Tdod } from './entities/tdod.entity';
import { AddTodoDto } from './dto/add-todo.dto';
import { NotFoundError } from 'rxjs/internal/util/NotFoundError';

@Injectable()
export class TdodService {
    todos:Tdod[]=[];
    getTodos(){
        return this.todos
    }
addTodo(newTdodo:AddTodoDto):Tdod{
    const {name,description}=newTdodo;
    let id;
    if (this.todos.length){
        id=this.todos[this.todos.length-1].id+1;        }
    else{
        id=1;
    }
    let todo={
        id,name,description,createdAt:new Date()
    }
    this.todos.push(todo)
    return todo;
}
getTodoById(id:number):Tdod{
    const todo = this.todos.find((actualtodo) => actualtodo.id === +id);
        if (todo) {
            return todo;
        }
        throw new NotFoundError(`Le todo d'ID ${id} n'existe pas`);

}
}
