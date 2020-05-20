import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewEncapsulation } from '@angular/core';
import { Package } from '../../interfaces/package';


@Component({
  selector: 'app-prices',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PricesComponent implements OnInit {

  activeClass = '0';
  customOptions: OwlOptions = {
    loop: true,
    center: true,
    margin: 10,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      740:{
        items:2
      },

      960: {
        items: 3
      }
    },
    nav: false
  }


  packages:Package[] =
  [
  {order:'0',title:'Gold Package',price:140,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'},
  {order:'1',title:'Platinum Package',price:160,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'},
  {order:'2',title:'silver Package', price:120,description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
]
clicked=null

  selectedPackage:string = 'gold';

  constructor() { }

  ngOnInit(): void {
  }
  selectPackage($event){
    
    this.selectedPackage = $event;
    
  }

  
  
sliderHandler(owlCar, slideOrder){
  this.activeClass = slideOrder;
  owlCar.to(slideOrder)
}  
 
}
