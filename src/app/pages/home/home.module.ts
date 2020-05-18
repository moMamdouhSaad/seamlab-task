import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HeaderComponent } from './views/header/header.component';
import { AboutComponent } from './views/about/about.component';
import { ServicesComponent } from './views/services/services.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { FooterComponent } from './views/footer/footer.component';



@NgModule({
  declarations: [HomeContainerComponent, HeaderComponent, AboutComponent, ServicesComponent, PricingComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[HomeContainerComponent]
})
export class HomeModule { }
