import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewEncapsulation } from '@angular/core';


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


  packages =
  [
  {order:'0',title:'gold'},
  {order:'1',title:'platinum'},
  {order:'2',title:'silver'}
]
clicked=null

  selectedPackage:string = 'gold';

  constructor() { }

  ngOnInit(): void {
  }
  selectPackage($event){
    
    this.selectedPackage = $event;
    console.log(this.selectedPackage);
    
  }

  
  
sliderHandler(owlCar, slideOrder){
  this.activeClass = slideOrder
  console.log(this.activeClass)
  owlCar.to(slideOrder)
}  
 
}
