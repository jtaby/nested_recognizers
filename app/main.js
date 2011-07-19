spade.require('sproutcore-touch');
var NestedRecognizers = SC.Application.create();
NestedRecognizers.OuterView = SC.ContainerView.extend({
  elementId: 'containerId',
  pinchChange: function(recognizer, scale) { 
    this.$().css('-webkit-transform','scale3d('+scale+','+scale+',1)'); 
  },

  childViews: ['nestedView'],
  nestedView: SC.View.extend({
    elementId: 'nestedId',
    panChange: function(recognizer, translation) { 
      this.$().css('-webkit-transform','translate3d('+translate.x+'px,'+translate.y+'px,0)'); 
    }
  })
});
$(document).ready(function() {
  SC.run(function() { 
    NestedRecognizers.OuterView.create().append(); 
  });
});
