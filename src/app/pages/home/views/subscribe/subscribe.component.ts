import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  @Output() userSubscribe  = new EventEmitter<string>();

  subscriptionForm:FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email])
  })

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
  }
  newSubscription(){
    if(this.subscriptionForm.invalid){
      return
    }
    this.userSubscribe.emit(this.email.value);
    this.subscriptionForm.reset();
    // this._snackBar.open('thank you','done', {
    //   duration: 2000,
    //   panelClass: ['simple-snack-bar']
    // });
  }

  get email() {
    return this.subscriptionForm.get('email');
} 

}
