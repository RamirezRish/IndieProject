import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { HeaderComponent }      from './shared/components/header/header.component';
import { BannerComponent }      from './components/banner/banner.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { TextBox1Component }    from './components/text-box1/text-box1.component';
import { PruebasComponent }     from './components/pruebas/pruebas.component'
import { FormsModule }          from '@angular/forms';
import { CardComponent }        from './components/pruebas/card/card.component';
import { ExtentComponent }      from './components/pruebas/card/extent/extent.component';
import { WindowServiceService } from './components/pruebas/window-service.service';
import { PjSService }           from './components/pruebas/pj-s.service';
import { AboutMeComponent }     from './about-me/about-me.component';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent }  from './experience/experience.component';
import { HomeComponent }        from './home/home.component';
import { ModifyCardComponent }  from './components/pruebas/modify-card/modify-card.component';
import { ButtonGComponent }     from './components/buttons/button-g/button-g.component';
import { ButtonG2Component }    from './components/buttons/button-g2/button-g2.component';
import { E1PageComponent }      from './components/e1-page/e1-page.component';
import { DataServices }         from './data.services';
import { HttpClientModule }     from '@angular/common/http';
import { LogInComponent }       from './log-in/log-in.component';
import { LoginServices }        from './log-in/login.service';
import { CookieService }        from 'ngx-cookie-service';
import { TextBox2Component } from './components/text-box2/text-box2.component';
import { HSSkillsComponent } from './h-s-skills/h-s-skills.component';
import { ContactComponent } from './contact/contact.component';
import { Card01Component } from './components/card01/card01.component';
import { ProjectsComponent } from './projects/projects.component';
import { EffectsComponent } from './components/pruebas/effects/effects.component';
import { ButtonCircular1Component } from './components/buttons/button-circular1/button-circular1.component';
import { ModifyFormComponent } from './components/modify-form/modify-form.component';

const appRoutes:Routes=[
  {path:'about-me',     component:HomeComponent},
  {path:'',             component:HomeComponent},
  {path:'experience',   component:ExperienceComponent},
  {path:'pruebas',      component:PruebasComponent},
  {path:'mod-card/:id', component:ModifyCardComponent},
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
    PruebasComponent,
    CardComponent,
    ExtentComponent,
    AboutMeComponent,
    ExperienceComponent,
    HomeComponent,
    ButtonGComponent,
    ModifyCardComponent,
    ButtonG2Component,
    E1PageComponent,
    LogInComponent,
    TextBox2Component,
    HSSkillsComponent,
    ContactComponent,
    Card01Component,
    ProjectsComponent,
    EffectsComponent,
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
    WindowServiceService,
    PjSService,
    DataServices,
    LoginServices,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
