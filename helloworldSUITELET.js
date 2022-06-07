/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet        
 * @author shashikanth
 */

define([],function(){

    function hello(scriptContext){
        var html='<html><head><title>"suitelet"</title></head><body><h1>"HELLO WORLD!"</h1></body></html>';
        scriptContext.response.write(html);
        scriptContext.resonse.setHeader({
            name:'basic suitelet',
            value:'hello world'
        });
    }
    return {
        onRequest : hello
    }
});