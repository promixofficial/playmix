angular.module("playMixApp")
.factory('storageFct', [function(){
    
    var Storage = {
        getItem: function(itemName){
            var value = localStorage[itemName];
            if(value){
                value = this.parseValue(value);
            }
            return value;
        },
        setItem: function(itemName, value){
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