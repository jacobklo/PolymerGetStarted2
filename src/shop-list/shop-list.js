/**
 * Created by jacoblo on 2/6/17.
 */
Polymer ({
  is : 'shop-list'

  , _getListItems : function (items) {
    // REMEMBER : placeholder idea from the example is smart
    return items || [{},{},{},{},{},{},{},{},{},{},{},{} ];
  }

  , _getItemHref : function (categoryName, item) {
    return (item && item.name) ? "/detail/" + categoryName + "/" + item.name : null;
  }

});