import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiSrviceService {

  constructor(private http:HttpClient) { }
  
  baseUrl : string = environment.baseUrl;


  postEmploye(data:any){
    return this.http.post<any>(this.baseUrl+'./employes',data);
  }

  getAllEmploye(){
    return this.http.get<any>(this.baseUrl+'./employes');
  }

  deleteEmploye(id:any){
    return this.http.delete<any>(this.baseUrl+'./employes/' +id );
  }
  
  updateemploye(data:any, id:number){
    
    return this.http.put<any>(this.baseUrl+'./employes/'+id, data);
  }
  

}
