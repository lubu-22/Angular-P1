import { Component, OnInit } from '@angular/core';
import { ApiSrviceService } from 'src/app/shared/api-srvice.service';
import {FormBuilder ,FormGroup} from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-employes-information',
  templateUrl: './employes-information.component.html',
  styleUrls: ['./employes-information.component.css']
})
export class EmployesInformationComponent implements OnInit {

  employeForm!: FormGroup ;
  employeModel:any ;
  employeDetails:any;
  showAddBtn:boolean = true ;
  showUpdateBtn:boolean = false ;


  constructor(private api : ApiSrviceService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getAllEmployeDetails();
    this.createEmployeForm();
  }

createEmployeForm(){
  this.employeForm = this.fb.group({
    id:[''],
    firstname:[''],
    lastname:[''],   
    email : [''] ,
    address:[]
  });
}

getAllEmployeDetails(){
  this.api.getAllEmploye().subscribe(res => {
     this.employeDetails = res ;
     
  }, err => {
    console.log(err);
  })
}

onAddClick(){
  this.showAddBtn=true;
  this.showUpdateBtn=false;
}




postEmployeDetails(){
  this.employeModel = Object.assign({}, this.employeForm!.value);

  this.api.postEmploye(this.employeModel).subscribe(res =>{
    alert("Employe Information added successfuly");
    let close = document.getElementById('close');
    close?.click();
    this.employeForm.reset();
    this.getAllEmployeDetails();
  }, err => {
    alert("ERROR");
  });
}
deleteEmployeDetail(id:any){
  this.api.deleteEmploye(id).subscribe(res=>{
    alert("Employe Information deleted succesfully");
    this.getAllEmployeDetails();
  }, err =>{
    alert("Failed o delete employe information");

  });
}

edit(employe:any){
this.showAddBtn=false ;
this.showUpdateBtn= true ;
this.employeForm.controls['id'].setValue(employe.id);
this.employeForm.controls['firstname'].setValue(employe.firstname);
this.employeForm.controls['lastname'].setValue(employe.lastname);
this.employeForm.controls['email'].setValue(employe.email);
this.employeForm.controls['address'].setValue(employe.address);
}
updateEmployeDetails(){
  this.employeModel = Object.assign({}, this.employeForm.value);
  this.api.updateemploye(this.employeModel, this.employeModel.id).subscribe(res=>{
    alert("Employe information updated sucessfully");
    let close = document.getElementById('close');
    close?.click();
    this.getAllEmployeDetails();
    this.employeForm.reset();
    this.employeModel={};
  }, err =>{
    alert("ERROR in updating employe infomation");
  })

}
reset(){
  this.employeForm.reset();
  this.employeModel={};
}

}
