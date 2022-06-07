/**
 * @NApiVersion 2.0
 * @NScriptType ClientScript
 * @author shashikanth
 */

 define([],function(){
  function lineseqnum(scriptContext){
    try{
   /* if(scriptContext.mode=='delete'){*/
     /* alert('hii'+scriptContext.operation);*/
     var linecount=scriptContext.currentRecord.getLineCount({sublistId:'item',line:linecount});
      /*'the line count is :'+linecount);*/
  
    for(var i=0;i<linecount;i++){

   scriptContext.currentRecord.selectLine({sublistId:'item',line:i});
         scriptContext.currentRecord.setCurrentSublistValue({sublistId:'item',fieldId:'custcol365_serialno',value:i+1,ignoreFieldChange:true,fireSlavingSync: true});
      /*alert(scriptContext.currentRecord.getCurrentSublistValue({sublistId:'item',fieldId:'custcol365_serialno'}));*/
      scriptContext.currentRecord.commitLine({sublistId:'item'});

    }

    }catch(e){alert(e);}
  };
  return {
      validateDelete: lineseqnum,
    validateInsert:lineseqnum

  }
});