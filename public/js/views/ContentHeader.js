window.ContentHeaderView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },
        
    events: {
              "click"   : "pathinfo"
            },
        
            pathinfo: function(event){
        
             console.log(event.target.href);
        
           }
});