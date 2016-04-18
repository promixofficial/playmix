angular.module("playMixApp")
.factory('storageFct', ['$localForage', function($localForage){
    
    var Storage = {
        getItem: function(itemName){
            return $localForage.getItem(itemName);
        },
        setItem: function(itemName, value){
            return $localForage.setItem(itemName, value);
        },
        removeItem: function(itemName){
            return $localForage.removeItem(itemName);
        }, 
        clearAll: function(){
            return $localForage.clear();
        }
    };

    return Storage;
}]);