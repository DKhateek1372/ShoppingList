import { Injectable } from '@angular/core';
import {ListItem} from './listitem';
import { shopping_list } from './mock-shopping-list';

@Injectable()

export class ShoppingListService {
    getItem() {
        return shopping_list;
    }
    insertItem(item: ListItem) {
      return shopping_list.push(item);
    }
    deleteItem(item: ListItem) {
        shopping_list.splice(shopping_list.indexOf(item), 1);
    }
}
