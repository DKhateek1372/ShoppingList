import { ShoppingListService } from './shoppinglist.service';
import { Component } from '@angular/core';
import {ListItem} from './listitem';

@Component({
    selector: 'app-shoppinglistnewitem',
    templateUrl: './shoppinglist-newitem.component.html',
})

export class ShoppinglistNewItemComponent {
    item = { name: '', amount: 0};

    constructor(private _shoppinglistService: ShoppingListService) {}

    onSubmit() {
        this._shoppinglistService.insertItem({name: this.item.name, amount: this.item.amount});
    }
}
