/**
 * Created by jacoblo on 2/7/17.
 */
Polymer({
  is : 'shop-category-data'

  , properties : {
    categories : {
      type : Array
      , value : []
      , readOnly : false
      , notify : true
    }
  }

  , created : function() {
    this._fetchCategories();
  }

  // methods
  , _fetchCategories : function() {
    this._getResource({
      url: '/data/categories.json'
      , onLoad: function(e) {
        this.set('categories', JSON.parse(e.target.responseText));
      }
      , onError : function(e) {
        console.log("Error on _fetchCategories");
      }
    }, 1);
  }

  , _getResource: function(rq, attempts) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', rq.onLoad.bind(this));
    xhr.addEventListener('error', function(e) {
      // Flaky connections might fail fetching resources
      if (attempts > 1) {
        this.debounce('_getResource', this._getResource.bind(this, rq, attempts - 1), 200);
      } else {
        rq.onError.call(this, e);
      }
    }.bind(this));

    xhr.open('GET', rq.url);
    xhr.send();
  },
});