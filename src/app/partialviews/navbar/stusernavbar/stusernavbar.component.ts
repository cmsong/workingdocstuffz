import { LoggedinService } from './../../../services/loggedin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stusernavbar',
  templateUrl: './stusernavbar.component.html',
  styleUrls: ['./stusernavbar.component.css']
})
export class StusernavbarComponent implements OnInit {

  constructor(private loggedinservice :LoggedinService) { }

  ngOnInit() {
  }
  getUsername(){
    return this.loggedinservice.getUsername();
  }
}
