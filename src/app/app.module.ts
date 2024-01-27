import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonCircular1Component } from './components/buttons/button-circular1/button-circular1.component';
import { ButtonGComponent } from './components/buttons/button-g/button-g.component';
import { ButtonG2Component } from './components/buttons/button-g2/button-g2.component';
import { Card01Component } from './components/card01/card01.component';
import { E1PageComponent } from './components/e1-page/e1-page.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { ModifyFormComponent } from './components/modify-form/modify-form.component';
import { TextBox1Component } from './components/text-box1/text-box1.component';
import { TextBox2Component } from './components/text-box2/text-box2.component';
import { ContactComponent } from './contact/contact.component';
import { DataServices } from './data.services';
import { ExperienceComponent } from './experience/experience.component';
import { HSSkillsComponent } from './h-s-skills/h-s-skills.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { LoginServices } from './log-in/login.service';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './shared/components/header/header.component';

const appRoutes:Routes=[
  {path:'home',         component:HomeComponent},
  {path:'',             component:HomeComponent},
  {path:'experience',   component:ExperienceComponent},
  {path:'login',        component:LogInComponent},
  {path:'error',        component:E1PageComponent},
  {path:'**',           component:E1PageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LateralMenuComponent,
    TextBox1Component,
    // ExtentComponent,
    AboutMeComponent,
    ExperienceComponent,
    HomeComponent,
    ButtonGComponent,
    // ModifyCardComponent,
    ButtonG2Component,
    E1PageComponent,
    LogInComponent,
    TextBox2Component,
    HSSkillsComponent,
    ContactComponent,
    Card01Component,
    ProjectsComponent,
    ButtonCircular1Component,
    ModifyFormComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    DataServices,
    LoginServices,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
