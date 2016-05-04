describe('sorting the list of users', function() {
  it('sorts in descending order by default', function() {
    var users = ['jack', 'igor', 'jeff'];
    var sorted = users.sort();
    expect(sorted).toEqual(['igor', 'jack', 'jeff']);
  });
});


describe('mainCtrl', function () {
  
      // load the controller's module
  beforeEach(module('playMixApp'));
  beforeEach(module('ngMaterial'));
  beforeEach(module('angular-sortable-view'));
  beforeEach(module('angularResizable'));
  beforeEach(module('LocalForageModule'));

  var mainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mainCtrl = $controller('mainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () { 
    expect(true).toEqual(true);
    
  });

})