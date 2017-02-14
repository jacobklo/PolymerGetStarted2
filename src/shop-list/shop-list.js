/**
 * Created by jacoblo on 2/6/17.
 */
Polymer ({
  is : 'shop-list'

  , properties : {

    category : {
      type : Object
      , notify : true
      , observer : '_categoryChanged'
    }

    , categories : {
      type : Array
      , notify : true
      , observer : '_categoriesChanged'
    }
  }

  , _categoriesChanged : function(categories, oldCategories) {
    var str = JSON.stringify(this.categories, null, 4);
    console.log( "_categoriesChanged : " + str);
  }

  , _categoryChanged : function (category, oldCategory) {
    var str = JSON.stringify(this.category, null, 4);
    console.log( " _categoryChanged : " + str);
  }
});