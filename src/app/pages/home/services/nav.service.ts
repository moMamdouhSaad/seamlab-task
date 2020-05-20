import { Injectable } from "@angular/core";
import { OverlayServie } from '../overlay.service';

@Injectable({
    providedIn: 'root'
  })


export class NavService{

    goToSection(id){
        const el: HTMLElement|null = document.getElementById(id);
        el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }

      
}  