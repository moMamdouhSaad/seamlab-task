import { Component, OnInit } from '@angular/core';
import { OverlayServie } from '../overlay.service';
import { NavService } from '../services/nav.service';
import { SubscriptionApi } from '../services/subscription.api';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private overlayService: OverlayServie,private navService:NavService, private subscriptionApi: SubscriptionApi) { }
  isOverlayOpened:boolean = false;
  ngOnInit(): void {
  }

  goToSection(id){
    this.navService.goToSection(id);
  }
  showOverlay($event){
    if(!this.isOverlayOpened){
      this.overlayService.showOverlay();
    }else{
      this.overlayService.hideOverlay();
    }
    this.isOverlayOpened = !this.isOverlayOpened
  }

  newSubscription($event){
    const email = $event;
    this.subscriptionApi.newSubscription(email).subscribe(data=>console.log(data))
  }


}
