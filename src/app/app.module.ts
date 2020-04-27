import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientComponent } from './components/client/client.component';
import { LoginComponent } from './components/login/login.component';
import { JdaComponent } from './components/jda/jda.component';
import { OutputComponent } from './components/output/output.component';
import { TcoHeaderComponent } from './shared/components/tco-header/tco-header.component';
import { TcoProgressComponent } from './shared/components/tco-progress/tco-progress.component';
import { TcoLayoutComponent } from './shared/components/tco-layout/tco-layout.component';
import { TcoFooterComponent } from './shared/components/tco-footer/tco-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    LoginComponent,
    JdaComponent,
    OutputComponent,
    TcoHeaderComponent,
    TcoProgressComponent,
    TcoLayoutComponent,
    TcoFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
