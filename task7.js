/**
 * 
 */

function onlyNumber(fld) {
     if(fld.value.match(/[^0-9.]/)) {
     fld.value=fld.value.replace(/[^0-9.]/g,'');
     }
}
function convertUnit(sense, value) {
    retValue = 0;
    if (isNaN (value)) { 
    	alert ('Non-numeric value');
    	return 0; }
    	value = parseFloat (value);
    	var factor = 0.4536;
    	if (sense == 'kg2lb') {
        	 retValue = value/factor;
    	} else if (sense == 'lb2kg') {
         retValue = value*factor;
    	}
    return retValue;
}