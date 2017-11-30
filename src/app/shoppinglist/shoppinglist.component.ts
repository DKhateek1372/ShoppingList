import { ListItem } from './listitem';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  listItems: Array<ListItem> ;
  selectedItem: ListItem;

  constructor(private _shoppingListService: ShoppingListService) { }

  onselect(item: ListItem) {
    this.selectedItem = item;
  }
  onRemove() {
    this.selectedItem = null;
  }
  ngOnInit() {
    this.listItems = this._shoppingListService.getItem();
  }

}
