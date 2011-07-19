// ==========================================================================
// Project:   NestedRecognizers
// Copyright: ©2011 My Company Inc. All rights reserved.
// ==========================================================================

// TODO: Your app code goes here
spade.require('sproutcore-touch');

var NestedRecognizers = SC.Application.create();

NestedRecognizers.OuterView = SC.ContainerView.extend({
  elementId: 'containerId',
  scale: 1,

  translate: {
    x: 0,
    y: 0
  },

  pinchChange: function(recognizer, scale) {
    this.scale = scale;
    this._applyTransforms();
  },

  panChange: function(recognizer, translation) {
    this.translate = translation;
    this._applyTransforms();
  },

  _applyTransforms: function() {
    var string = 'translate3d('+this.translate.x+'px,'+this.translate.y+'px,0)';
        string += ' scale3d('+this.scale+','+this.scale+',1)';

    this.$().css('-webkit-transform',string);
  },
  
  childViews: ['nestedView'],

  nestedView: SC.View.extend({
    elementId: 'nestedId',

    scale: 1,

    translate: {
      x: 0,
      y: 0
    },

    pinchChange: function(recognizer, scale) {
      this.scale = scale;
      this._applyTransforms();
    },

    panChange: function(recognizer, translation) {
      this.translate = translation;
      this._applyTransforms();
    },

    _applyTransforms: function() {
      var string = 'translate3d('+this.translate.x+'px,'+this.translate.y+'px,0)';
          string += ' scale3d('+this.scale+','+this.scale+',1)';

      this.$().css('-webkit-transform',string);
    }
    
  })
});

$(document).ready(function() {

  SC.run(function() {
    NestedRecognizers.OuterView.create().append();
  });
});
