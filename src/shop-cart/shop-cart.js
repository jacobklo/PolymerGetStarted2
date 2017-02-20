/**
 * Created by j on 2/6/17.
 */
Polymer ({
  is : 'shop-cart'

  , properties : {
    cart : {
      type : Array
      , notify : false
    }

    , _hasItems : {
      type : Boolean
      , value : false
      , computed : '_computeHasItem(cart.length)'
    }
  }

  , _computeHasItem : function(cartLength) {
    return cartLength > 0;
  }
});