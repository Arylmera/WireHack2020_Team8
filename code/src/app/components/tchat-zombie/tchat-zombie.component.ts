import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tchat-zombie',
  templateUrl: './tchat-zombie.component.html',
  styleUrls: ['./tchat-zombie.component.css']
})
export class TchatZombieComponent implements OnInit {

  messageList: string[] = [''];

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(message: string) {
    console.log(message);
    this.messageList.push(message);
    return false;
  }
}
