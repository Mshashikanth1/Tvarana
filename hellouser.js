/**
*@NApiVersion 2.0
*@NScriptType ClientScript
*@author shashikanth
*/

define(['N/runtime','N/ui/dialog'],function(runtime,dialog){

	function alertMsgSO(){
		try{
		var v="hello "+runtime.getCurrentUser().name;
		dialog.alert({title:v, message: 'you are about to create sales order'});
		}
		catch(e){alert(e);}
	}
	return {
		pageInit :alertMsgSO
};

});