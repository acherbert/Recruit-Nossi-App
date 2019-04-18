import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WordpressService } from '../app/providers/wordpress.service';
import { PostPage } from './post/post.page';
import { CategoryListPage } from './category-list/category-list.page';
import { RouterModule,Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    CategoryListPage,
    PostPage,
    AppComponent],

  entryComponents: [
    // CategoryListPage,
    // PostPage,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    WordpressService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
