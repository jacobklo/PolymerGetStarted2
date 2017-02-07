Polymer({
        is : "shop-app"

        // class members
        ,properties : {
            page : {
                type : String
                ,reflectToAttribute : true
                ,value : 'home'
                ,observer : '_pageChanged'
            }
        }

        // methods
        ,_pageChanged : function (page, oldPage) {

        }
    });
