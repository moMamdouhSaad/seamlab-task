import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })


export class NavService{
    goToSection(id){
        const el: HTMLElement|null = document.getElementById(id);
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }
}  