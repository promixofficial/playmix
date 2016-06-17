angular.module("playMixApp")
.factory('localStorageFct', [function(){
    
    var Storage = {
        getItem: function(itemName){
            var value = localStorage[itemName];
            if(value){
                value = this.parseValue(value);
            }
            return value;
        },
        setItem: function(itemName, value){
            value = (typeof value === 'object' ? JSON.stringify(value) : value);
            localStorage[itemName] = value;
        },
        removeItem: function(itemName){
            delete localStorage[itemName];
        }, 
        clearAll: function(){
            localStorage.clear();
        },
        parseValue: function(value){
            try{
                value = JSON.parse(value);
            }catch(e){}
            return value;
        }
    };

    return Storage;
}]);