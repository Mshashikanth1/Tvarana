/**
 * @NApiVersion 2.0
 * @NScriptType UserEventScript
 * @author shashikanth
 */

 define(['N/log'],function(log){
    
    function removebtn(scriptContext){
     log.debug({
       "title":"before load",
       "details":"type="+scriptContext.type
     });
      thisForm = scriptContext.form;
    	thisForm.clientScriptFileId = 12740;

        
        var list = scriptContext.form.getSubList("item");
     
      list.addButton({
        id:"custpageremove",
        label:"shashikanth_remove_above_500",
        functionName:"removeItem()"
      });
    

    }
    return {
        beforeLoad : removebtn
    }
});