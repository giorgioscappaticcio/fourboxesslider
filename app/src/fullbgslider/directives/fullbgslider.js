'use strict';

angular.module('cazzoApp')
  .directive('fullbg', function ($window) {
    return {
      templateUrl: 'src/fullBgSlider/views/fullBgSlider.html',
      restrict: 'AE',
      controller: 'fullbgctrl',
      link: function postLink(scope, element, attrs) {
        
        scope.currentIndex = 0

		scope.setTransform();  

		$window.onresize = scope.setTransform;      

        //console.log(scope.bgImages)


        scope.next = function(){
			
			classie.add( scope.nextPanel, 'active' );
        	
        	scope.currentPanelTile_0.style.webkitTransform  = scope.transitions.next[0];
        	scope.currentPanelTile_1.style.webkitTransform  = scope.transitions.next[1];
        	scope.currentPanelTile_2.style.webkitTransform  = scope.transitions.next[2];
        	scope.currentPanelTile_3.style.webkitTransform  = scope.transitions.next[3];

        	setTimeout(function(){
        		classie.remove( scope.nextPanel, 'active' );
        		scope.currentPanelTile_0.style.webkitTransform  = 'none';
        		scope.currentPanelTile_1.style.webkitTransform  = 'none';
        		scope.currentPanelTile_2.style.webkitTransform  = 'none';
        		scope.currentPanelTile_3.style.webkitTransform  = 'none';
        		scope.currentIndex < scope.bgImages.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
				scope.$apply();
        	},1100);
        }

        scope.prev = function(){

        	classie.add( scope.prevPanel, 'active' );

        	scope.currentPanelTile_0.style.webkitTransform  = scope.transitions.prev[0];
        	scope.currentPanelTile_1.style.webkitTransform  = scope.transitions.prev[1];
        	scope.currentPanelTile_2.style.webkitTransform  = scope.transitions.prev[2];
        	scope.currentPanelTile_3.style.webkitTransform  = scope.transitions.prev[3];

        	setTimeout(function(){
        		classie.remove( scope.prevPanel, 'active' );
        		scope.currentPanelTile_0.style.webkitTransform  = 'none';
        		scope.currentPanelTile_1.style.webkitTransform  = 'none';
        		scope.currentPanelTile_2.style.webkitTransform  = 'none';
        		scope.currentPanelTile_3.style.webkitTransform  = 'none';
        		scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.bgImages.length - 1;
				scope.$apply();
        	},1100);
		}

        

        scope.$watch( 'currentIndex' , function(oldvalue, newvalue){

        	//Select Current panel
        	scope.currentPanel = document.getElementById('box-gallery').getElementsByClassName("panel")[scope.currentIndex];

        	//Select Next panel
        	if (oldvalue == scope.bgImages.length -1){
        		scope.nextPanel = document.getElementById('box-gallery').getElementsByClassName("panel")[0];
        	} else {
        		scope.nextPanel = document.getElementById('box-gallery').getElementsByClassName("panel")[scope.currentIndex + 1];
        	}

        	//Select Previous panel
        	if (oldvalue == 0){
        		scope.prevPanel = document.getElementById('box-gallery').getElementsByClassName("panel")[scope.bgImages.length -1];
        	} else {
        		scope.prevPanel = document.getElementById('box-gallery').getElementsByClassName("panel")[scope.currentIndex - 1];
        	}

        	//Select Current Bg-Image Tile
        	scope.currentPanelTile_0 = document.getElementById('box-gallery').getElementsByClassName("panel")[scope.currentIndex].getElementsByClassName("bg-img")[0];
        	scope.currentPanelTile_1 = document.getElementById('box-gallery').getElementsByClassName("panel")[scope.currentIndex].getElementsByClassName("bg-img")[1];
        	scope.currentPanelTile_2 = document.getElementById('box-gallery').getElementsByClassName("panel")[scope.currentIndex].getElementsByClassName("bg-img")[2];
        	scope.currentPanelTile_3 = document.getElementById('box-gallery').getElementsByClassName("panel")[scope.currentIndex].getElementsByClassName("bg-img")[3];
        	
        })





      }
    };
  });
