var printblue = {
    createEvent: function(text, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'PrintBlue', // mapped to our native Java class called "Calendar"
            'print', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "text": text
            }]
        ); 
     }
}

module.exports = printblue;
