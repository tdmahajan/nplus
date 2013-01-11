window.ProductListView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(this.template());
        
        this.productView = new ProductView();           
        this.$('ul').append(this.productView.$el);
        
        return this;
    }

});