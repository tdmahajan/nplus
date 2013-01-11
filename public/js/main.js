var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "cat"               : "catSearch",
        "cat/:catid"        : "catSearch"
    },

    initialize: function () {
            
        this.mainView = new MainView();
        $('#main').html(this.mainView.el);
        unicornPlugin();
    },

    home: function (id) {
    
       $('#content').empty();
       
       this.contentHeaderView = new ContentHeaderView();
       $('#content').append(this.contentHeaderView.$el);
       
       $('#content').append('<div class="container-fluid"><div id="cat"></div><div id="prod"></div></div>');
       
       var catList = new CatCollection();
       catList.fetch({success: function(){
       	  $('.container-fluid > #cat').append(new SubCatListView({model: catList}).el);
         }
         });
       
        $('.container-fluid > #prod').append(new ProductListView().$el);
       
    },
    
    catSearch: function(cat){
    
       console.log(cat);
    
       $('#content').empty();
              
       this.contentHeaderView = new ContentHeaderView();
       $('#content').append(this.contentHeaderView.$el);
       
       $('#content').append('<div class="container-fluid"><div id="cat"></div><div id="prod"></div></div>');
      
       var catList = new CatCollection();
       
       catList.url = '/childcats/'+ cat;
       
       catList.fetch({success: function(){
       	  $('.container-fluid > #cat').append(new SubCatListView({model: catList}).el);
         }
         });
       
        $('.container-fluid > #prod').append(new ProductListView().$el);
    
    }
    
    
});

/*
Backbone.sync = function(method, model) {
  console.log("I\'ve been passed " + method + " with " + JSON.stringify(model));
 
};
*/

utils.loadTemplate(['MainView','SideBarView','ContainerFluidView','ContentHeaderView','SubCatListView','SubCatView','ProductListView','ProductView','FooterView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});