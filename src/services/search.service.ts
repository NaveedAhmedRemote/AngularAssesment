import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuserlist } from 'src/app/model/iuserlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 private REQUEST_URL = 'https://jsonplaceholder.typicode.com/users' // will be in Enviroment File
  constructor(private http: HttpClient) {
   }
   public onRequestSearchTerm(searchTerm):Observable<Iuserlist[]>{
    return this.http.get<Iuserlist[]>(this.REQUEST_URL+'?username='+searchTerm)
  }
  public getAllUserList():Observable<Iuserlist[]>{
    return this.http.get<Iuserlist[]>(this.REQUEST_URL)
  }

  
}
