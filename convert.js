/**
*@NApiVersion 2.0
*@NScriptType ClientScript
*@author shashikanth
*/

define(['N/currentRecord','N/record'],function(currentRecord,record){

	function convert(){
      try{
        
      var reco=currentRecord.get();
        alert("Converting to invoice");
      var id=reco.getValue({fieldId:'id'});
        var invoice = record.transform({
            fromType: record.Type.SALES_ORDER,
            fromId: id,
            toType: record.Type.INVOICE,
            isDynamic: true
        });
    
var recordId = invoice.save({
    enableSourcing: true,
    ignoreMandatoryFields: true
});
   
     }catch(e){log.debug({
    title: 'Debug Entry',
    details: recordId
});}
      if(recordId){
     alert("invoice :"+recordId+' has been created');
	location.reload();}
    

	}
	return {
        pageInit: convert,
		convert :convert
};

});