/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/search','N/https','N/log','N/file'],function(search,https,log,file){
        function pendingBillSO(scriptContext){
            try{
            if(scriptContext.request.method==='GET'){
                
            var contentRequest=https.get({
                url:"https://tstdrv1348579.app.netsuite.com/c.TSTDRV1348579/suiteapp/com.netsuite.shashitraining/form2.html"
            });
            var contentDocument=contentRequest.body
            scriptContext.response.write(contentDocument);
            
        }
    
        else{

            var params=scriptContext.request.parameters;
        
            var fromdate=params["fromdate"];
            var todate=params['todate'];
            log.debug(fromdate+','+todate);

            var html="<html><head><style>table, th, td {border: 1px solid black;border-collapse: collapse;}</style></head><body><table><tr><th>id</th><th>Customer</th><th>Date</th><th>Number</th><th>Amount</th><th>Status</th>"
            
            var ser=search.create({
                type:search.Type.SALES_ORDER,
                columns:['internalid','entity','status','amount','trandate','number'
                    ],
                filters:[
                    ['trandate','onorafter',fromdate],'and',
                    ['trandate','onorbefore',todate],'and',
                   ['status','any','Salesord:F'] 


                ]
            });

            ser.run().each(function(res){

                var id='<td>'+res.getValue("internalid")+'</td>';
                var cust='<td>'+res.getValue("entity")+'</td>';
                var date='<td>'+res.getValue("trandate")+'</td>';
                var num='<td>'+res.getValue("number")+'</td>';
                var amt='<td>'+res.getValue("amount")+'</td>';
                var stat='<td>'+res.getValue("status")+'</td>';
            
               var row='<tr>'+id+cust+date+num+amt+stat+'</td>'
                html+=row;
                return true;
            
            
            });
            html+='/table</body></html>';
            scriptContext.response.write(html);
        
        }
        
       } catch(e){log.debug(e)};
        
    }
        return {
            onRequest:pendingBillSO
        }

});