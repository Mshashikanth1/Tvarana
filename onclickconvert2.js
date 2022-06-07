/**
 * @NApiVersion 2.0
 * @NScriptType UserEventScript
 * @author shashikanth
 */

 define(['N/ui/serverWidget','N/log','N/record'],function(serverWidget,log,record){
    
    function convertbtn(scriptContext){
   try{
     if(scriptContext.type !== scriptContext.UserEventType.VIEW){return;}
           scriptContext.form.clientScriptModulePath = 'SuiteApps/com.netsuite.shashitraining/onclickconvert2.js';
   var st=scriptContext.newRecord.getText({fieldId:'status'});
     if(st==='Pending Approval'){return;} 

     log.debug(st);
     
      var field=scriptContext.form.addButton({
        id:"custpageconvert",
        label:"shashikanth_convert",
        functionName:"convert()"
      });
   }catch(e){log.debug({title:'error',details:e});}

    }
    return {
        beforeLoad : convertbtn
    }
});