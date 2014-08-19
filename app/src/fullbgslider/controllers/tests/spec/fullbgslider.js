'use strict';

describe('Controller: FullbgsliderFullbgsliderCtrl', function () {

  // load the controller's module
  beforeEach(module('cazzoApp'));

  var FullbgsliderFullbgsliderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FullbgsliderFullbgsliderCtrl = $controller('FullbgsliderFullbgsliderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
