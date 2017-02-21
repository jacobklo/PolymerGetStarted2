/**
 * Created by j on 2/6/17.
 */
Polymer ({
  is : 'shop-cart'

  , properties : {
    route : Object

    , cart : {
      type : Array
      , notify : false
    }

    , totalPrice : Number

    , _hasItems : {
      type : Boolean
      , value : false
      , computed : '_computeHasItem(cart.length)'
    }
  }

  , _computeHasItem : function(cartLength) {
    return cartLength > 0;
  }

  , _onClickCheckout : function () {
    this.set('route.path', '/checkout');
  }
});