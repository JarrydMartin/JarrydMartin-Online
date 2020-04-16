import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../models/shopping-item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCatalogueService {
  private shoppingListCollection: AngularFirestoreCollection<ShoppingItem>;

  constructor(private firestore: AngularFirestore) {
    this.shoppingListCollection = firestore.collection<ShoppingItem>(
      'shoppingcatalogue'
    );
  }

  getShoppingCatalogueItems(): Observable<ShoppingItem[]> {
    return this.shoppingListCollection.valueChanges();
  }
}
