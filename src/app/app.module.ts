import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BannerComponent } from './components/banner/banner.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { TextBox1Component } from './components/text-box1/text-box1.component';
import { PruebasComponent } from './components/pruebas/pruebas.component'
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/pruebas/card/card.component';
import { ExtentComponent } from './components/pruebas/card/extent/extent.component';
import { WindowServiceService } from './components/pruebas/window-service.service';
import { PjSService } from './components/pruebas/pj-s.service';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    BannerComponent,
    LateralMenuComponent,
    TextBox1Component,
    PruebasComponent,
    CardComponent,
    ExtentComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    WindowServiceService,
    PjSService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
