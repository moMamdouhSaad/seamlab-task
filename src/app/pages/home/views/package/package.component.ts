import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PackageComponent implements OnInit {

  @Output() selectPackage:EventEmitter<string> = new EventEmitter<string>();
  @Input() package: string;

  
  constructor() { }

  ngOnInit(): void {
  }

  selectedPackage(){
    this.selectPackage.emit(this.package);
  }

}
