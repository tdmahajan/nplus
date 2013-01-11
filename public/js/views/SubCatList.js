window.SubCatListView = Backbone.View.extend({

    initialize:function () {
        this.render();
    },

    render:function () {
    
        $(this.el).html(this.template());
        
        var cats = this.model.models;
        var len  = cats.length, k = 0;
        
        for(i = 0; i < 5; i++){
        
          $('ul', this.el).append('<li id="col'+i +'"></li>');
         
          for(var j = 0; j < (len/5); j++) {
        
            if(cats[k]) {
          
              $('#col'+i, this.el).append(new SubCatView({model: cats[k]}).el);
              k++;
              
            } 
             
	  }
	
	}
	
        return this;
    }

});