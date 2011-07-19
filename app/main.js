spade.require('sproutcore-touch');
var NestedRecognizers = SC.Application.create();
NestedRecognizers.OuterView = SC.ContainerView.extend({
  elementId: 'containerId',
  pinchChange: function(recognizer, scale) { this.$().css('-webkit-transform','scale3d('+scale+','+scale+',1)'); },

  childViews: ['nestedView'],
  nestedView: SC.View.extend({
    elementId: 'nestedId',
    panChange: function(recognizer, translation) { this.$().css('translate3d('+translate.x+'px,'+translate.y+'px,0)'); }
  })
});
$(document).ready(function() {
  SC.run(function() {
    NestedRecognizers.OuterView.create().append();
  });
  $('#containerId').css({
    background: 'red',
    position: 'absolute', top: 10, left: 420, width: 600, height: 600,
    '-webkit-tranform': 'translate3d(0,0,0)'
  });
  $('#nestedId').css({
     background: 'blue',
     position: 'absolute', top: 100, left: 100, width: 200, height: 200,
     '-webkit-tranform': 'translate3d(0,0,0)'
  });
});
