import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Package } from '../../interfaces/package';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PackageComponent implements OnInit {

  @Input() package: Package;
  @Input() activeClass:string;

  
  constructor() { }

  ngOnInit(): void {
    console.log(this.activeClass)
  }

  

}
