(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Token'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Token'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloudApi) {
      root.ArtikCloudApi = {};
    }
    root.ArtikCloudApi.TokenResponse = factory(root.ArtikCloudApi.ApiClient, root.ArtikCloudApi.Token);
  }
}(this, function(ApiClient, Token) {
  'use strict';

  /**
   * The TokenResponse model module.
   * @module model/TokenResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>TokenResponse</code>.
   * 
   * @alias module:model/TokenResponse
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenResponse} obj Optional instance to populate.
   * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = Token.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Token} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
