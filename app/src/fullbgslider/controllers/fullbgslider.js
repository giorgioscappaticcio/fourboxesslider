'use strict';

angular.module('cazzoApp')
  .controller('fullbgctrl', function ($scope, $window, $attrs) {

    $scope.bgImagesGallery = $attrs.gallery;

    
    switch($scope.bgImagesGallery){
        case 'home':
            $scope.bgImages = [{
                src: 'http://pawclothingeurope.com/images/1.jpg'
            },{
                src: 'http://pawclothingeurope.com/images/2.jpg'
            },{
                src: 'http://pawclothingeurope.com/images/3.jpg'
            },{
                src: 'http://pawclothingeurope.com/images/4.jpg'
            },];
        break;
        case 'about':
           $scope.bgImages = [{
                src: 'http://pawclothingeurope.com/images/4.jpg'
            },{
                src: 'http://pawclothingeurope.com/images/3.jpg'
            },{
                src: 'http://pawclothingeurope.com/images/2.jpg'
            },{
                src: 'http://pawclothingeurope.com/images/1.jpg'
            },]; 
        break;
        case 'contact' :
            $scope.bgImages = [{
                src: 'http://pawclothingeurope.com/images/3.jpg'
            },{
                src: 'http://pawclothingeurope.com/images/2.jpg'
            },{
                src: 'http://pawclothingeurope.com/images/4.jpg'
            },{
                src: 'http://pawclothingeurope.com/images/1.jpg'
            },]; 
        break;
    }
    

    
    $scope.setTransform = function(){
      $scope.transitions = {
        'next' : [
                    'translate3d(0, ' + ($window.innerHeight/2+10) + 'px, 0)', // transforms for panel 1
                    'translate3d(-' + ($window.innerWidth/2+10) + 'px, 0, 0)', // transforms for panel 2
                    'translate3d(' + ($window.innerWidth/2+10) + 'px, 0, 0)', // transforms for panel 3
                    'translate3d(0, -' + ($window.innerHeight/2+10) + 'px, 0)' // transforms for panel 4
                ],
        'prev' : [
                    'translate3d(' + ($window.innerWidth/2+10) + 'px, 0, 0)',
                    'translate3d(0, ' + ($window.innerHeight/2+10) + 'px, 0)',
                    'translate3d(0, -' + ($window.innerHeight/2+10) + 'px, 0)',
                    'translate3d(-' + ($window.innerWidth/2+10) + 'px, 0, 0)'
                ]
        }
    }
    

    

  });

  
  
