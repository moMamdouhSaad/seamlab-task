import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToSection(id){
    const el: HTMLElement|null = document.getElementById(id);
    console.log(el)
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});

  }
}
