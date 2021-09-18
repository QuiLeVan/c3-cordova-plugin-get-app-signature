var exec = require('cordova/exec');

var PLUGIN_NAME = 'C3ReadAppSignature';

var C3ReadAppSignature = {};

var METHOD_GET_SIGNATURE = 'getSignature';

/******************************************************************************************************************/
//SDK Integration
/******************************************************************************************************************/

C3ReadAppSignature.getSignature = function (arg0, success, error) {
    exec(success, error, PLUGIN_NAME, METHOD_GET_SIGNATURE, [arg0]);
};
module.exports = C3ReadAppSignature;