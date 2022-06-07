/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 *@author shashikanth
 */
 define(['N/record','N/log'], function( record,log) {
   
    function afterSubmit(scriptContext) {
      try{
        var newOrderId = scriptContext.newRecord.id;
        var rec = record.transform({
            fromType: record.Type.SALES_ORDER,
            fromId: newOrderId,
            toType: record.Type.INVOICE,
            isDynamic: true
        });
    
var recordId = rec.save({
    enableSourcing: true,
    ignoreMandatoryFields: true
});
      }catch(e){log.debug({
    title: 'Debug Entry',
    details: e
});}
    }
    return {
        afterSubmit: afterSubmit
    }
});