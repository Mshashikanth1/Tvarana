/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @author shashikanth
 */

 define(['N/log','N/record'],function(log,record){
  function calculate(scriptContext){
  
  var total=0;
    var lineCount=scriptContext.newRecord.getLineCount({sublistId:'item'});
    for(var i=0;i<lineCount;i++){
      var amount=scriptContext.newRecord.getSublistValue({sublistId:'item',fieldId:'amount',line:i});
      var taxrate=scriptContext.newRecord.getSublistValue({sublistId:'item',fieldId:'taxrate1',line:i});
      if(taxrate){total+=amount+(amount*taxrate)/100;}
      else{
      total+=amount;}
    }
   
    
    var rec=record.load({type:record.Type.SALES_ORDER,id:scriptContext.newRecord.id,isDynamic:true});
   rec.setValue({
      fieldId:'custbody56', value:total
});
    var str=''
    var dic={'0':'zero','1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine'};
for(var i of ''+total){str+=' '+dic[i];}

     rec.setValue({
      fieldId:'custbody57', value:str

});
   rec.save({
    enableSourcing: true,
  ignoreMandatoryFields: true
});
    
    log.debug({title:'values',details:'amount :'+amount+' taxrate :'+ taxrate+ ' total:'+total+' in words'+str});

  }
  return {
      afterSubmit : calculate
  }
});