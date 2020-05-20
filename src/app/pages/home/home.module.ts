import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HeaderComponent } from './views/header/header.component';
import { AboutComponent } from './views/about/about.component';
import { ServicesListComponent } from './views/services-list/services.component';
import { PricesComponent } from './views/prices/pricing.component';
import { FooterComponent } from './views/footer/footer.component';
import { ServiceComponent } from './views/service/service.component';
import { PackageComponent } from './views/package/package.component';
import { OrderBy } from './pipes/orderBy.pipe';



@NgModule({
  declarations: [HomeContainerComponent, HeaderComponent, AboutComponent, ServicesListComponent, PricesComponent, FooterComponent, ServiceComponent, PackageComponent,OrderBy],
  imports: [
    CommonModule,
    CarouselModule,
    OwlModule
  ],
  exports:[HomeContainerComponent]
})
export class HomeModule { }
