import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../models/shopping-item';
import { map } from 'rxjs/operators';

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
    return this.shoppingListCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as ShoppingItem;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  addShoppingCatalogueItems(newShoppingCatalogueItem: ShoppingItem): void {
    newShoppingCatalogueItem.id = this.firestore.createId();
    this.shoppingListCollection
      .doc(newShoppingCatalogueItem.id)
      .set(Object.assign({}, newShoppingCatalogueItem));
  }
}
