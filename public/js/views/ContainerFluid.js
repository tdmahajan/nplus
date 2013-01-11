window.ContainerFluidView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
    
        $(this.el).html(<div class="container-fluid"></div>);
        
        var catList = new CatCollection();
	catList.fetch({success: function(){
	  $('.container-fluid', this.el).append(new SubCatListView({model: catList}).el);
        }});       
        
        $('.container-fluid', this.el).append(new ProductListView().$el);
        
        return this;
    }

});