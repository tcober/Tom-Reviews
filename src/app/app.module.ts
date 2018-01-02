import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TomReviewsRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    TomReviewsRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
