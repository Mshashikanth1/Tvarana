/**
 * @NApiVersion 2.1
 * @NscriptType Suitelet
 */
define(['N/ui/serverWidget','N/record','N/search'],function(serverWidget,record,search){
        function form(scriptContext){
            
            if(scriptContext.request.method==='GET'){
               
                var form=serverWidget.createForm({
                    title:'shashikanth custom form'
                });

                var fieldgroup3 = form.addFieldGroup({
                    id: 'cs',
                    label: 'Customer'
                });
               var sel=form.addField({
                    id:'custsel',
                    type:serverWidget.FieldType.SELECT,
                    label:'Customer',
                    source:'customer',
                    container:'cs'
                });

 var fieldgroup1 = form.addFieldGroup({
    id: 'sos',
    label: 'Sales order Status'
});
            form.addField({
                id:'custpage_salesfields',
                type:serverWidget.FieldType.RADIO,
                label:'Sales Order:Pending Approval',
                source:'SalesOrd:A',
                container:'sos'
            })
            form.addField({
                id:'custpage_salesfields',
                type:serverWidget.FieldType.RADIO,
                label:'Sales Order:Pending Fulfillment',
                source:'SalesOrd:B',
                container:'sos'
            })
            form.addField({
                id:'custpage_salesfields',
                type:serverWidget.FieldType.RADIO,
                label:'Sales Order:Cancelled',
                source:'SalesOrd:C',
                container:'sos'
            })
            form.addField({
                id:'custpage_salesfields',
                type:serverWidget.FieldType.RADIO,
                label:'Sales Order:Partially Fulfilled',
                source:'SalesOrd:D',
                container:'sos'
            })
            form.addField({
                id:'custpage_salesfields',
                type:serverWidget.FieldType.RADIO,
                label:'Sales Order:Pending Billing/Partially Fulfilled',
                source:'SalesOrd:E',
                container:'sos'
            })
            form.addField({
                id:'custpage_salesfields',
                type:serverWidget.FieldType.RADIO,
                label:'Sales Order:Pending Billing',
                source:'SalesOrd:F',
                container:'sos'
            })

          
            form.addField({
                id:'custpage_salesfields',
                type:serverWidget.FieldType.RADIO,
                label:'Sales Order:Billed',
                source:'SalesOrd:G',
                container:'sos'
            })
            form.addField({
                id:'custpage_salesfields',
                type:serverWidget.FieldType.RADIO,
                label:'Sales Order:Closed',
                source:'SalesOrd:H',
                container:'sos'
            })
            var fieldgroup2 = form.addFieldGroup({
                id: 'td',
                label: 'Transaction Date'
            });
            form.addField({
                id:'fromdate',
                type:serverWidget.FieldType.DATE,
                label:'From Date',
                container:'td',
                isHidden:true
            });
            form.addField({
                id:'_fromdate_',
                type:serverWidget.FieldType.DATE,
                label:'From Date',
                container:'td'
            })
            form.addField({
                id:'custpage_todate',
                type:serverWidget.FieldType.DATE,
                label:'To Date',
                container:'td'
            });
          
         
            form.addSubmitButton({
                label:'Submit'
            });

            scriptContext.response.writePage(form);
    
        }else{
            var fromdate=scriptContext.request.parameters._fromdate_;
            var todate=scriptContext.request.parameters.custpage_todate;
            var enti= fromdate=scriptContext.request.parameters.custsel
            var status=scriptContext.request.parameters.custpage_salesfields
            log.debug(enti+''+status+','+fromdate+','+todate+',');

            var fieldgroup4 = form.addFieldGroup({
                id: 'so',
                label: 'Sales Order List'
            });
            var sublist = form.addSublist({
                id : 'sublistid',
                type : serverWidget.SublistType.LIST,
                label : 'Sales Order List',
                container:'so'
            });
            var internalId = sublist.addField({
                id : 'id',
                label : 'Internal ID',
            type : serverWidget.FieldType.TEXT
       });
       var entity = sublist.addField({
        id : 'entity',
        label : 'entity',
    type : serverWidget.FieldType.TEXT
});

            var ser=search.create({
                type:search.Type.SALES_ORDER,
                columns:['internalid','entity','status','amount','trandate','number'
                    ],
                filters:[
                    ['entity','is',enti],'and',
                   // ['trandate','onorafter',fromdate],'and',
                    ['trandate','onorbefore',todate],'and',
                   ['status','any',status] 


                ]
            });
            var i=0
            ser.run().each(function(res){
                log.debug({titile:'SO',details:res})
                sublist.setSublistValue({
                    id:'sublistid',
                    line:i,
                    value:res.getValue("internalid"),
                    return true;
                });
            });
        scriptContext.response.write(form);
        }
    }
        return{
             onRequest:form
        }


});