/**
 * @NApiVersion 2.0
 * @NScriptType ClientScript
 * @author shashikanth
 */

 define([],function(){
    function inramount(scriptContext){
       /* alert('hii this action caused to trigger this event');*/
       try{
var exchangeRate = scriptContext.currentRecord.getValue({fieldId:'exchangerate'});

var amount =scriptContext.currentRecord.getSublistValue({sublistId:'item',fieldId:'amount',line:0});

     alert("exchangeRate * amount ="+(exchangeRate*amount));
     scriptContext.currentRecord.setCurrentSublistValue({sublistId:'item',fieldId:'custcol365_training',value:(exchangeRate*amount),ignoreFieldChange:true});

        return true;
       }
       catch(e){
           alert(e);
       }
    }
    return{
        validateLine : inramount
    }

});