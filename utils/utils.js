class Utils{
    /**
     * Method to validate if a text field value is empty
     * @param {string} field - the value of the text field you are validating  
     * @returns {boolean} return true if field is empty or else false 
     */
    isTextFieldValueEmpty = (field) => field == undefined || field == '' || field == ' ' ? true : false;  
}

module.exports = new Utils();