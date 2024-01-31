import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss'
})
export class TodoEditComponent implements OnInit {
  idTodo="";
  todo = {
    content:'',
    date:''
  };
  constructor(route :ActivatedRoute, private router :Router ){
    this.idTodo=route.snapshot.params['id'];
    console.log(this.idTodo);
  }
  ngOnInit(): void { 
    this.getTodoById();
  }


  getTodoById() {
    axios.get('http://127.0.0.1:3000/todo/' + this.idTodo + '/get')
      .then(res => {
        console.log('Todo data:', res.data); // Log the data to the console
        this.todo = res.data.todoItem|| { content: '', date: '' };
      })//todoitem li msamyetha fl postman 
      .catch(error => {
        console.error('Error fetching todo:', error);
      });
  }
  
  EditTodo(Form:NgForm){

    console.log(Form.value);//yhez l kol 
    //console.log(addForm.controls['content'].value);//ken content
    //console.log(addForm.controls['date'].value)// ken date
    axios.post('http://127.0.0.1:3000/todo/'+this.idTodo+'/modifier',Form.value).then(res=>{
      console.log(res);
      //aleeeert succes
      Swal.fire({
        title: 'succes!',
        text: 'Todo modifier avec succée',
        icon: 'success',
        confirmButtonText: 'OK!'
      })
      //vider form
      Form.reset();
      //redirection ll page initial
    this.router.navigate(['todo/list']);
    }).catch(err=>{
      console.log(err);
      Swal.fire({
        title: 'Error!',
        text: "Todo n'est pas modifier",
        icon: 'error',
        confirmButtonText: 'OK!'
      });
    })
  }

}
