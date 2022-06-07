/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */

define(['N/ui/serverWidget'],function(serverWidget){
    function list(scriptContext){
        if(scriptContext.request.method==='GET'){
            var leadlist=serverWidget.createList({
                title:'Todays Lead List'
            });
            var datecol=leadlist.addColumn({
                id:'col1',
                type:serverWidget.FieldType.Date,
                label:'Date',
                allign:serverWidget.LayoutJustification.RIGHT
            });
            leadlist.addRows({
                rows: [{col1: '05/30/2018'},
                    {col1: '05/30/2018'},
                    {col1: '05/30/2018'}]
            });
        }
        

    }
    return {
        onRequest : list
    }

});