/**
 * @NApiVersion 2.0
 * @NScriptType Suitelet
 */
define(['N/https','N/log','N/redirect'],function(https,log,redirect){
        function cashsale(scriptContext){
                if(scriptContext.request.method==='GET'){
                    var html='<html><body><h1>HELLO WORLD!</h1></body></html>'
                    var contentRequest=https.get({
                        url:"https://tstdrv1348579.app.netsuite.com/c.TSTDRV1348579/suiteapp/com.netsuite.shashitraining/form.html"

                    });
                    var contentDocument=contentRequest.body;
                   
                    log.debug(scriptContext.request.parameters);
                    scriptContext.response.write(contentDocument);
                }
                else{
                    var params=scriptContext.request.parameters;
                    log.debug(params["item"]);
                    var contentRequest=https.get({
                        url:"https://tstdrv1348579.app.netsuite.com/c.TSTDRV1348579/suiteapp/com.netsuite.shashitraining/form.html"

                    });
                    var contentDocument=contentRequest.body;
                    
                    var item="";
                    for(var i in params){
                        item+="\\n"+i+" : "+params[i];
                    }
 
                    var html='<script>alert("'+item+'");</script>';
                    log.debug({title:'debug',details:html});
                    scriptContext.response.write(contentDocument);
                    scriptContext.response.write(html);

                    redirect.toSuitelet({
                        scriptId:'1055',
                        deploymentId:'1',
                        parameters:{
                            'custparam':'cashsale',
                            "item":params["item"],
                            "cust":params["cust"],
                            "postingperiod":params["postingperiod"],
                            "amount":params["amount"],
                            "subsidiary":params["subsidiary"],
                        
                        }
                    })

                }
        }
        return {
            onRequest : cashsale
        }



});