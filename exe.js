var x = document.querySelectorAll("a");
var myarray = []
for (var i=0; i<x.length; i++){
var nametext = x[i].textContent;
var cleantext = nametext.replace(/\s+/g, ' ').trim();
var cleanlink = x[i].href;
myarray.push([cleantext,cleanlink]);
};
function make_table() {

   for (var i=0; i<myarray.length; i++) {
if (myarray[i][0].startsWith('invoice #')
            console.log(myarray[i][1]);}
    };


make_table()