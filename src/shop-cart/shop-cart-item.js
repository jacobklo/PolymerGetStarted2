Polymer ({
  is : 'shop-cart-item'

  , properties : {
    entry : Object

    , itemQuantity : {
      type : Number
      , observer : '_itemQuantityChanged'
    }
  }

  , _setCartItem : function (quantity) {
    this.fire('set-cart-item', {
      item : this.entry.item
      , quantity : Number(quantity)
      , size : this.entry.size
    });
  }

  , _addItem : function () {
    this.set('itemQuantity', this.entry.quantity+1);
  }

  , _removeOneItem : function () {
    this.set('itemQuantity', this.entry.quantity-1);
  }

  , _removeItems : function () {
    this._setCartItem(0);
  }

  , _itemQuantityChanged : function (itemQuantity, oldItemQuantity) {
    this.prepareToSetQuantity(itemQuantity);
  }

  , prepareToSetQuantity : function (quantity) {
    if (!this.isPositiveInteger(quantity)) {
      if (this.itemQuantity !== this.entry.quantity ) {
        this.itemQuantity = this.entry.quantity;
      }
      return;
    }
    var i = Number(quantity);
    if (i === this.entry.quantity) {
      return;
    }
    this._setCartItem(i);
  }

  , isPositiveInteger : function(str) {
    var n = Number(str);
    return n > 0;
  }

});