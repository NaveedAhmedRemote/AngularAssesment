import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/services/search.service';
import { Iuserlist } from './model/iuserlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wikiapi';
  users:Iuserlist[]
  userList:Iuserlist[]; 
  constructor(private searchService:SearchService){
  }
  ngOnInit() {
    this.getAllUsers();
  }

  getUserByName(searchTerm){
    this.searchService.onRequestSearchTerm(searchTerm).subscribe(user=>{
      this.users=user
    })
  }
  getAllUsers(){
    this.searchService.getAllUserList().subscribe(result=>{
      this.userList=result
    })
  }
}
