/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/record'],function(record){

    function another(scriptContext){
        if(scriptContext.request.method==="GET"){
          var params=scriptContext.request.parameters;
           var parms=scriptContext.request.parameters.custparam;
            var item="";
            for(var i in params){
                item+="\\n"+i+" : "+params[i];
            }
//try{
            var csrec=record.create({
                type:record.Type.CASH_SALE,
                isDynamic:true
            });
            csrec.setText({fieldId:'entity',text:params['entity']});
           // csrec.setText({fieldId:'postingperiod',text:params['postingperiod']});
            csrec.setValue({fieldId:'trandate',value:params['trandate']});
            csrec.setValue({fieldId:'subsidiary',value:params['subsidiary']});
            csrec.setSublistText({
                sublistId:'item',
                fieldId:'item',
                text:params['item']
            });
            csrec.setSublistText({
                sublistId:'item',
                fieldId:'item',
                text:params['amount']
            });
            var csrecid=csrec.save({
                enableSourcing: true,
                ignoreMandatoryFields: true
            });
            //log.debug(csrecid);

            var html='<script>alert("'+item+'");</script>';
            log.debug({title:'debug',details:html});
            scriptContext.response.write(html);

        //}catch(e){log.debug(e);}
        }
   

    }
    return{
        onRequest:another
    }
});