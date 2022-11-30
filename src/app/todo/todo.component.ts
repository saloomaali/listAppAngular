import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private api:ApiService){

    api.fetchToDo().subscribe(
      (response)=>{

        this.todo = response;
      }
    )
  }

  todo:any = []
}
