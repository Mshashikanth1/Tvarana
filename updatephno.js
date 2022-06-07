/**
 * @NApiVersion 2.0
 * @NScriptType ClientScript
 * @author  shashikanth
 */
 define(['N/record'], function(record) {
    function fieldChanged(scriptContext){
        try{
			if(scriptContext.fieldId=='custbody35'){
              var cusRecINID=scriptContext.currentRecord.getValue({fieldId:'entity'});
              console.log(cusRecINID);
  scriptContext.currentRecord.setValue({fieldId:'memo',value:cusRecINID});
               var cus=record.load({type:record.Type.CUSTOMER,id:cusRecINID,isDynamic:true});
             var phonenum=cus.getValue({fieldId:'phone'});
             alert(phonenum+' this the  phone number selected custmer has');

      if(phonenum==''){phonenum='1234567890';}
      scriptContext.currentRecord.setValue({fieldId:'custbody51',value:phonenum});

            }
        }
        catch(e){alert(e);}

    }

    return {
        fieldChanged : fieldChanged
    }
    
});