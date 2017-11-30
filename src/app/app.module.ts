import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { ShoppinglistItemComponent} from './shoppinglist/shoppinglist-item.component';
import { ShoppinglistNewItemComponent} from './shoppinglist/shoppinglist-newitem.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglistComponent, ShoppinglistItemComponent, ShoppinglistNewItemComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
