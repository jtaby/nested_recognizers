// ==========================================================================
// Project:   NestedRecognizers
// Copyright: ©2011 My Company Inc. All rights reserved.
// ==========================================================================

// TODO: Your app code goes here
spade.require('sproutcore-touch');

var NestedRecognizers = SC.Application.create();

NestedRecognizers.PinchPanView = SC.ContainerView.extend({
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
});

NestedRecognizers.OuterView = NestedRecognizers.PinchPanView.extend({
  classNames: ['containerId'],
  childViews: ['nestedView'],

  nestedView: NestedRecognizers.PinchPanView.extend({
  classNames: ['nestedId'],
  })
});

NestedRecognizers.OuterView2 = NestedRecognizers.PinchPanView.extend({
  classNames: ['containerId'],
  childViews: ['nestedView'],

  nestedView: NestedRecognizers.PinchPanView.extend({
  classNames: ['nestedId'],
  })
});

$(document).ready(function() {

  SC.run(function() {
    NestedRecognizers.OuterView.create().append();
    NestedRecognizers.OuterView2.create().append();
  });
});
