import { Component } from '@angular/core';
import { iPost } from './Models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  postArr:iPost[] = [];

  ngOnInit(){

this.getPost()

  }

  async getPost():Promise<void>{
let response = await  fetch("../assets/db.json")
let posts = <iPost[]> await response.json()

this.postArr = posts;
  }
}
