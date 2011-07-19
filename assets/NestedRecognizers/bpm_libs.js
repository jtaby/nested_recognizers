/* ===========================================================================
   BPM Combined Asset File
   MANIFEST: NestedRecognizers ()
   This file is generated automatically by the bpm (http://www.bpmjs.org)    
   =========================================================================*/
spade.require("sproutcore-touch");var NestedRecognizers=SC.Application.create();NestedRecognizers.OuterView=SC.ContainerView.extend({elementId:"containerId",pinchChange:function(a,b){this.$().css("-webkit-transform","scale3d("+b+","+b+",1)")},childViews:["nestedView"],nestedView:SC.View.extend({elementId:"nestedId",panChange:function(a,b){this.$().css("-webkit-transform","translate3d("+translate.x+"px,"+translate.y+"px,0)")}})}),$(document).ready(function(){SC.run(function(){NestedRecognizers.OuterView.create().append()})})