import { Component, OnInit } from '@angular/core';
import { Service } from '../../interfaces/service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesListComponent implements OnInit {
  services: Service[] = [
    {
    iconUrl:'assets/svg/001-process.svg',
    title:'SOCIAL MEDIA ',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
   },
   {
    iconUrl:'assets/svg/002-social-media.svg',
    title:'SOCIAL GROWTH ',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
   },
   {
    iconUrl:'assets/svg/004-social-media-1.svg',
    title:'BRANDING & MEDIA',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
   },
   {
    iconUrl:'assets/svg/007-analysis.svg',
    title:'INFLUENCER MARKETING',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
   },
   {
    iconUrl:'assets/svg/004-social-media-1.svg',
    title:'SOCIAL MEDIA PAID  ',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
   },
   {
    iconUrl:'assets/svg/008-computer.svg',
    title:'CONTENT MARKETING ',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
   },
   
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
