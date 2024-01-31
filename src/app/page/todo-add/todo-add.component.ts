import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';
//import { Router } from 'express';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent implements OnInit{

  constructor(private router:Router){}
  ngOnInit(): void {   
  }

  AddTodo(addForm : NgForm){

    console.log(addForm.value);//yhez l kol 
    //console.log(addForm.controls['content'].value);//ken content
    //console.log(addForm.controls['date'].value)// ken date
    axios.post('http://127.0.0.1:3000/todo/ajouter',addForm.value).then(res=>{
      console.log(res);
      //aleeeert succes
      Swal.fire({
        title: 'succes!',
        text: 'Todo ajouter avec succée',
        icon: 'success',
        confirmButtonText: 'OK!'
      })
      //vider form
      addForm.reset();
    this.router.navigate(['todo/list'])
    }).catch(err=>{
      console.log(err);
      Swal.fire({
        title: 'Error!',
        text: "Todo n'est pas ajouter",
        icon: 'error',
        confirmButtonText: 'OK!'
      });
    })
  }

}
