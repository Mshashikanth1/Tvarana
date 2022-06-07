/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @author shashikanth
 */

 define(['N/ui/serverWidget','N/log'],function(serverWidget,log){
    function createbtn(scriptContext){
     log.debug({
       "title":"before load",
       "details":"type="+scriptContext.type
     });
      
      thisForm = scriptContext.form;
    	thisForm.clientScriptFileId = 12136;
      
      var field=scriptContext.form.addButton({
        id:"custpagebtn",
        label:"shashikanth_btn",
        functionName:"alertMsgSO()"
      });
    

    }
    return {
        beforeLoad : createbtn
    }
});