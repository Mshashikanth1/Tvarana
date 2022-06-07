/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @author shashikanth
 */
 define(['N/log', 'N/error', 'N/search', 'N/record'], function(log, error, search, record) {
  function hasOpenSalesOrders(scriptContext) {

      var msg = 'Selected Customer Has Open Sales Orders';
      var cusId = scriptContext.newRecord.getValue({
          fieldId: 'entity'
      });
      var err = error.create({
          name: 'open sales order',
          message: msg,
          notifyoff: true
      });
      var ser = search.load({
          id: 'customsearch_so_search'
      });
      ser.run().each(function(res) {
          if (cusId == res.getValue({
                  name: 'entity'
              })) {
              throw err.message
              return false;
          };
          return true;
      });
  }
  return {
      beforeSubmit: hasOpenSalesOrders
  }
});