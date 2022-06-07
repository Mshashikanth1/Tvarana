/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @author shashikanth
 */

 define(['N/log','N/search',],function(log,search){
  function createfield(scriptContext){
   log.debug({
     "title":"before load",
     "details":"type="+scriptContext.type
   });

  var invcount=0;
  var noninvcount=0;


    var linecount=scriptContext.newRecord.getLineCount({sublistId:'item'});
  var str='';
    for(var i=0;i<linecount;i++){
    var type=scriptContext.newRecord.getSublistText({sublistId:'item',fieldId:'itemtype',line:i});      str+=type+' '+i+' ';
      if (type==="InvtPart"){invcount++;}
      if(type==="NonInvtPart"){noninvcount++;}
    }
scriptContext.newRecord.setValue({fieldId:'memo',value:str});
scriptContext.newRecord.setValue({fieldId:'custbody54',value:invcount});
scriptContext.newRecord.setValue({fieldId:'custbody55',value:noninvcount});

  }
  return {
      beforeSubmit : createfield
  }
});