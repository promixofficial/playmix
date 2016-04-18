angular.module("playMixApp") 
.factory('storageFct', ['$localForage', function($localForage){
    /**
    * @namespace storageFct 
    */   
    var Storage = {   
        /** Returns a storage item.
        *   @function getItem
        *   @memberOf storageFct
        *   @param {string} itemName
        *   @returns {promise}
        */
        getItem: function(itemName){
            return $localForage.getItem(itemName);
        },
        /** Sets an item on storage.
        *   @function setItem
        *   @memberOf storageFct
        *   @param {string} itemName
        *   @param {any}    value
        *   @returns {promise}
        */
        setItem: function(itemName, value){
            return $localForage.setItem(itemName, value);
        },
        /** Removes a storage item.
        *   @function removeItem
        *   @memberOf storageFct
        *   @param {string} itemName
        *   @returns {promise}
        */
        removeItem: function(itemName){
            return $localForage.removeItem(itemName);
        }, 
        /** Clears all storage data.
        *   @function clearAll
        *   @memberOf storageFct
        *   @returns {promise}
        */
        clearAll: function(){
            return $localForage.clear();
        }
    };

    return Storage;
}]);