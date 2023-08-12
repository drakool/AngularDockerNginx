import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
title: string="Hello World";
getMin( a: number,b: number)
{
  if(a < b) 
    return a;
  return b;
}

 
}
