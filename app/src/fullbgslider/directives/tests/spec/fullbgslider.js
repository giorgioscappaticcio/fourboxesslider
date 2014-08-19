'use strict';

describe('Directive: fullBgSlider/fullBgSlider', function () {

  // load the directive's module
  beforeEach(module('cazzoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<full-bg-slider></full-bg-slider>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fullBgSlider/fullBgSlider directive');
  }));
});
