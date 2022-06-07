/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @author shashikanth
 */

 define(['N/log','N/error','N/search','N/record'],function(log,error,search,record){
    function alert(scriptContext){
     log.debug({
       "title":"before load",
       "details":"type="+scriptContext.type
     });
      var msg=''
      var amount=scriptContext.newRecord.getValue({fieldId:'subtotal'});
      var custId=scriptContext.newRecord.getValue({fieldId:'entity'});
      var creditlimit=search.lookupFields({type:search.Type.CUSTOMER,id:custId,
                                          columns:'creditlimit'}).creditlimit;
   /*   var rec = record.load({
    type: record.Type.CUSTOMER, 
    id: custId,
    isDynamic: true,
});
      var credit=rec.getValue({fieldId:'creditlimit'});*/
      
      if (amount>100){msg+='This transaction has amount greater than 100 bucks';}
      if (amount > creditlimit){msg+='\n This transaction amount exceeds the customer credit limit';}
       var err=error.create({
         name:'shashikanth error',
         message:msg,
         notifyoff:true
       });
      throw err.message;
    }
    return {
        beforeSubmit : alert
    }
  });