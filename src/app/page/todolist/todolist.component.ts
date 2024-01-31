import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2';

interface TodoItem {
  _id:string;
  content: string;
  date: string;
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todo: TodoItem[] = [];
  constructor(){}

// then : maaneha jaw donnees beshih famech mochkla snn catch

  ngOnInit():void{
    this.getTodoList();//appel
  }
  getTodoList(){

    axios.get('http://127.0.0.1:3000/todo/lister').then(res => {
      
  console.log(res.data.listTodo);
  this.todo = res.data.listTodo as TodoItem[];
}).catch(error => {
  console.log('Error fetching todo list:', error);
});

  }

  DeleteTodo(id: string){

    if(confirm('voulez-vous vraiment supprimer cette todo ??')){
      axios.get('http://127.0.0.1:3000/todo/'+id+'/supprimer').then(res=>{
        this.todo = this.todo.filter(item => item._id !== id);
      Swal.fire({
        title: 'succes!',
        text: 'Todo supprimer avec succée',
        icon: 'success',
        confirmButtonText: 'OK!'
      })
    }).catch(err=>{
      Swal.fire({
        title: 'Error!',
        text: "Todo n'est pas supprimer",
        icon: 'error',
        confirmButtonText: 'OK!'
      })
    })

    }
    
  }
  

}