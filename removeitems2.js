/**
*@NApiVersion 2.0
*@NScriptType ClientScript
*@author shashikanth
*/
define (['N/currentRecord'], function(currentRecord){

    function removeItems2(){
      try{
        alert("hii");
        var rec=currentRecord.get();
        var numItems=rec.getLineCount({sublistId: 'item'});
        alert('the total number of items :'+numItems);

		while(numItems){

        var amount=scriptContext.currentRecord.getSublistValue({sublistId:'item',fieldId:'amount',line:numItems-1});

      if (amount>500){
        rec.removeLine({ sublistId: 'item', line: numItems-1});
     
      }
     numItems--;

    }
      return true;
    }catch(e){alert(e);}
    }
    return {
        removeItems2:removeItems2,
        saveRecord : removeItems2
    }
});
