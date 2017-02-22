Polymer ({
  is : 'shop-cart-item'

  , properties : {
    entry : Object
  }

  , _setCartItem : function (quantity) {
    var i = Number(quantity);
    if (i < 0) {
      i = 1;
    }
    this.fire('set-cart-item', {
      item : this.entry.item
      , quantity : i
      , size : this.entry.size
    });
  }

  , _addItem : function () {
    this._setCartItem(this.entry.quantity+1);
  }

  , _removeOneItem : function () {
    this._setCartItem(this.entry.quantity-1);
  }

  , _removeItems : function () {
    this._setCartItem(0);
  }

  // TODO : still change really correct
  , _itemQuantityChanged : function () {
    var i = Number(this.$.inputQuantity.value);
    if (this.isPositiveInteger(i)) {
      this._setCartItem(i);
    }
    else {
      this.$.inputQuantity.value = this.entry.quantity;
    }
  }

  , isPositiveInteger : function(str) {
    var n = Math.floor(Number(str));
    return n === String(n) && n > 0;
  }

});