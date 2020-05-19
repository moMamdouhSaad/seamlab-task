import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HeaderComponent } from './views/header/header.component';
import { AboutComponent } from './views/about/about.component';
import { ServicesListComponent } from './views/services-list/services.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { FooterComponent } from './views/footer/footer.component';
import { ServiceComponent } from './views/service/service.component';



@NgModule({
  declarations: [HomeContainerComponent, HeaderComponent, AboutComponent, ServicesListComponent, PricingComponent, FooterComponent, ServiceComponent],
  imports: [
    CommonModule
  ],
  exports:[HomeContainerComponent]
})
export class HomeModule { }
