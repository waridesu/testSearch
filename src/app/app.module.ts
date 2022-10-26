import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './component/items-list/items-list.component';
import { ItemDetailComponent } from './component/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailComponent
  ],
            imports: [
              BrowserModule, HttpClientModule, ReactiveFormsModule
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
