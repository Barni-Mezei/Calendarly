module.exports = {
    /**
     * Prepares a string for further processing
     * @param {String} str The string to prepare
     * @returns {String|null} The prepared string or null on error
     */
    prepare(str) {
        if (typeof str !== "string") return null;
        return str.trim();
    },

    /********************/
    /* NUMBER FUNCTIONS */
    /********************/

    /**
     * Checks if the provided string is an integer
     * @param {String} str A string to check
     * @returns {Boolean}
     */
    isInteger(str) {
        if (typeof str !== "string") return false;
        str = this.prepare(str);
        if (str === "") return false;

        return str.match("^-?[0-9]+$") !== null;
    },

    /**
     * Checks if the provided string is an float (must have a separator)
     * @param {String} str A string to check
     * @returns {Boolean}
     */
    isFloat(str) {
        if (typeof str !== "string") return false;
        str = this.prepare(str);
        if (str === "") return false;

        return str.match("^-?[0-9]+[\.,][0-9]+$") !== null;
    },

    /**
     * Checks if the provided string is a number (either an integer or a float)
     * @param {String} str A string to check
     * @returns {Boolean}
     */
    isNumber(str) {
        if (typeof str !== "string") return false;
        str = this.prepare(str);
        if (str === "") return false;

        return str.match("^-?[0-9]+[\.,]?[0-9]+$") !== null;
    },

    /**
     * Checks if the provided number is in the range: [min;max]
     * @param {Number} num The number to check
     * @param {Number} min The bottom of the range (inclusive)
     * @param {Number} max the top of the range (inclusive)
     * @returns {Boolean}
     */
    isInRange(num, min = -Infinity, max = Infinity) {
        if (typeof num !== "number") return false;
        return num >= min && num <= max;
    },

    /**
     * Attempts to convert a string into a number. It returns null on failure
     * @param {String} str The string to convert
     * @returns {Number|null} The converted value or null on error
     */
    convertToNumber(str) {
        if (this.isInteger(str)) {
            return parseInt(str);
        }
 
        if (this.isFloat(str)) {
            return parseFloat(str);
        }
 
        return null;
    },

    /********************/
    /* STRING FUNCTIONS */
    /********************/

    /**
     * Checks if the length f the provided string is in the range: [min;max]
     * @param {String} str The string to check
     * @param {Number} min The bottom of the length range (inclusive)
     * @param {Number} max The top of the length range (inclusive)
     * @returns {Boolean}
     */
    hasLength(str, min = 1, max = 512) {
        if (typeof str !== "string") return false;
        return str.length >= min && str.length <= max;
    },
};
