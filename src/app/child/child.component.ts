import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent: EventEmitter<string> = new EventEmitter()

  @Input() childMessage: string="";

  message = 'Hello form child component';

  constructor(){}
  sendMessage(){
    this.messageEvent.emit('Hello from child');
  }

  ngOnInit(): void {
  }

}
