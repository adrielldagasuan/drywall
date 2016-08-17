/* global app:true */

(function() {
  'use strict';

  app = app || {};

  app.Product = Backbone.Model.extend({
    url: '/products/',
    defaults: {
      success: false,
      errors: [],
      errfor: {},
      name: '',
      sku: '',
      price: ''
    }
  });

  app.ProductView = Backbone.View.extend({
    el: '#products',
    template: _.template( $('#tmpl-products').html() ),
    events: {
      'submit form': 'preventSubmit',
      'click .btn-products': 'products'
    },
    initialize: function() {
      this.model = new app.Product();
      this.listenTo(this.model, 'sync', this.render);
      this.render();
    },
    render: function() {
      this.$el.html(this.template( this.model.attributes ));
      this.$el.find('[name="name"]').focus();
    },
    preventSubmit: function(event) {
      event.preventDefault();
    },
    products: function() {
      this.$el.find('.btn-products').attr('disabled', true);

      this.model.save({
        name: this.$el.find('[name="name"]').val(),
        sku: this.$el.find('[name="sku"]').val(),
        price: this.$el.find('[name="price"]').val()
      });
    }
  });

  $(document).ready(function() {
    app.productsView = new app.ProductView();
  });
}());
