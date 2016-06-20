angular.module("playMixApp") 
.factory('fileFct', [function(){
    /**
    * @namespace fileFct 
    */   
    var File = {   
        download: function(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            element.click();
        },
        load: function(callback){
            var input = document.createElement('input');
        	input.setAttribute('type', 'file');
        	input.onchange = this.readContent.bind(input, callback);
        	
        	input.click();
        },
        readContent: function(callback){
            var file = this.files[0],
    	        reader = new FileReader();
        	    
    	    reader.onload = function() {
    	        var content = reader.result;
    	        try{
    	            content = JSON.parse(content);
    	            callback && callback(content);
    	        }catch(e){
    	            callback && callback(false);
    	        }
    	    }
        
    	    reader.readAsText(file);
        },
        validateFileContent: function(fileContent){
            var ajv = new Ajv({useDefaults: 'shared'});
            var schema = File.fileContentSchema;
            var validate = ajv.compile(schema);
            return validate(fileContent);
        },
        fileContentSchema: {
            "$async": true,
    	    "type": "array",
    	        "uniqueItems": true,
        	    "items": {
        	    "type": "object",
        	    "required": ["id","name", "playlist"],
        	    "properties":{
    	            "id": {"type": "integer"},
        	        "name": {"type": "string"},
        	 	    "playlist": {
            	     	"type": "array",
            	     	"uniqueItems": true,
        	     	    "items": {
            	     		"type": "object",
        	     		    "required": ["author","duration","id","prettyDuration","title","url"],
        	     		    "properties": {
            	     			"author": {"type": "string"},
        	     			    "duration": {"type": "integer"},
        	     			    "id": {"type": "string"},
        	     			    "prettyDuration": {"type": "string"},
        	     			    "title": {"type": "string"},
        	     			    "url": {"type": "string"}
        	     		    }
        	     	    }
        	 	    }
        	    }
    	    }
        }
    };

    return File;
}]);