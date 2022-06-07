/**
*@NApiVersion 2.0
*@NScriptType ClientScript
*@author shashikanth
*/
define (['N/currentRecord'], function(currentRecord){

    function removeItems(scriptContext){
        try{
        var numItems=scriptContext.currentRecord.getLineCount({sublistId: 'item'});
        alert('the total number of items :'+numItems);
     var c=0;
     
		while(numItems){
          
          var amount=scriptContext.currentRecord.getSublistValue({sublistId:'item',fieldId:'amount',line:numItems-1});
          
      if (amount>10){
        scriptContext.currentRecord.removeLine({ sublistId: 'item', line: numItems-1});
      c++;
      }
     numItems--;

    }
    alert('the total removed  are :'+c+'since they have amount >10');
      return true;
}
catch(e){alert(e);}
}
    return {
        saveRecord : removeItems
    }
});
