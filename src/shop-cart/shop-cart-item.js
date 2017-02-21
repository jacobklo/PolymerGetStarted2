Polymer ({
  is : 'shop-cart-item'

  , properties : {
    entry : Object
  }

  , _setCartItem : function (quantity) {
    this.fire('set-cart-item', {
      item : this.entry.item
      , quantity : quantity
      , size : this.entry.size
    });
  }
  , _removeItem : function () {
    this._setCartItem(0);
  }

  , _quantityChange : function () {
    this._setCartItem(parseInt(this.$.quantitySelect.value, 10));
  }
});