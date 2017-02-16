/**
 * Created by j on 2/6/17.
 */
Polymer ({
  is : 'shop-detail'

  , properties : {

  }

  , observers : [
    '_itemChanged(item)'
  ]

  , _isDefined : function (item) {
    return item != null;
  }

  , _itemChanged : function (item) {
    this.debounce('item-change', function () {
      var text = item ? item.description : '';
      this.$.desc.innerHTML = this._unescapeText(text);

      this.$.quantitySelect.value = '1';
      this.$.sizeSelect.value = 'M';

      this.fire('change-section' , {
        category : item.category
        , title : item.title
      });
    });
  }

  , _unescapeText : function ( text ) {
    var e = document.createElement('textarea');
    e.innerHTML = text;
    return e.textContent;
  }

});