window.MainView = Backbone.View.extend({

    initialize:function () {
    
       this.render();
    },

    render:function () {
        $(this.el).html(this.template());
        
        this.sideBarView = new SideBarView();           
        this.$('#search').after(this.sideBarView.$el);  
        return this;
        
    }
    
});