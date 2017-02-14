Polymer({
  is: "shop-app"

  // class members
  , properties: {
    page: {
      type: String
      , reflectToAttribute: true
      , value: 'home'
      , observer: '_pageChanged'
    }

    , drawerOpened : {
      type : Boolean
      , value : true
      , readOnly : false
      , notify : true
      , observer : '_drawerOpenedChanged'
    }

    // Compute Objects
    , _shouldRenderDrawer : {
      computed : '_computeShouldRenderDrawer(drawerOpened, page, smallScreen)'
    }
  }

  // observers
  , observers : [
    '_routePageChanged(routeData.page)'
  ]

  , _routePageChanged(page) {
    this.page = page || 'home';
    this.drawerOpened = false;
  }

  , _drawerOpenedChanged(drawerOpened, oldDrawerOpened) {
    if (this.$.drawerDomRepeat) {
      this.$.drawerDomRepeat.render();
    }
  }

  // ready
  , ready : function() {

  }

  // methods
  , _pageChanged: function (page, oldPage) {
    this.importHref(
      this.resolveUrl("../shop-" + page + "/shop-" + page + ".html")
      , () => {console.log('Page : ' + page + ' lazy loaded');}
      , () => {console.log('_pageChanged() Page : ' + page + ' error!');}
      , true );
  }


  , _computeShouldRenderDrawer: function(drawerOpened, page , smallScreen) {
    var shouldRenderDrawer = drawerOpened || smallScreen || page === 'cart' || page === 'checkout';
    console.log("Should render page : " + shouldRenderDrawer);
    return shouldRenderDrawer;
  }

  , _toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }

});
