window.Cat = Backbone.Model.extend({

    urlRoot: "/cats",
    
    idAttribute: "_id"
    
});

window.CatCollection = Backbone.Collection.extend({

    model: Cat,

    url: "/cats"

});