import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    if(this.intervalSub)
    {
      clearInterval(this.intervalSub);

    }
  }

  private intervalSub: any = null;
  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('Hello from OnInit');
    },1000);
  }
  title = 'AngularDockerNginx';
}
