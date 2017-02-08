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

    // Compute Objects
    , _shouldRenderDrawer : {
      computed : '_computeShouldRenderDrawer(page, smallScreen)'
    }
  }

  // observers
  , observers : [
    '_routePageChanged(routeData.page)'
  ]

  // methods
  , _pageChanged: function (page, oldPage) {
    this.importHref(
      this.resolveUrl("../shop-" + page + "/shop-" + page + ".html")
      , () => {console.log('Page : ' + page + ' lazy loaded');}
      , () => {console.log('_pageChanged() Page : ' + page + ' error!');}
      , true );
  }

  , _routePageChanged(page) {
      this.page = page || 'home';
      this.drawerOpened = false;
  }

  , _computeShouldRenderDrawer(page , smallScreen) {
    var shouldRenderDrawer = smallScreen || page === 'cart' || page === 'checkout';
    console.log("Should render page : " + shouldRenderDrawer);
    return shouldRenderDrawer;
  }
});
