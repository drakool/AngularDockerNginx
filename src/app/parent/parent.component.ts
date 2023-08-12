import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
@ViewChild(ChildComponent) child;

  receivedMessage: string = '';

constructor(){}

ngOnInit(): void {
    
}
ngAfterViewInit(): void{
  alert(this.child.message);
  
}

receiveMessage(msg: string){
  this.receivedMessage = msg;

  alert(msg);
  
}
}
