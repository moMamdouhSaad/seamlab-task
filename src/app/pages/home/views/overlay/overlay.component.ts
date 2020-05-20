import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { OverlayServie } from '../../overlay.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations:[
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' })) 
           ])
    ]),
  ]
})
export class OverlayComponent implements OnInit {

  constructor(private navService:NavService, private overlayService: OverlayServie) { }

  ngOnInit(): void {
  }

  goToSection(id){
    this.navService.goToSection(id);

  }
  closeOverlay(){
    this.overlayService.hideOverlay();
  }

}
