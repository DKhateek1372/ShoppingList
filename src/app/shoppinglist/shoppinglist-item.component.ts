import { ShoppingListService } from './shoppinglist.service';
import { ListItem } from './listitem';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-shoppinglistitem',
    templateUrl: './shoppinglist-item.component.html',
})

export class ShoppinglistItemComponent {
   @Input('item') item = { name: '', amount: 0 };
   @Output() removed = new EventEmitter<any>();

   constructor(private _shoppingListService: ShoppingListService) {}

   onDelete()  {
       this._shoppingListService.deleteItem(this.item);
      this.removed.emit(this.item);
   }
}
