(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AggregateData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AggregateData'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloudApi) {
      root.ArtikCloudApi = {};
    }
    root.ArtikCloudApi.AggregatesResponse = factory(root.ArtikCloudApi.ApiClient, root.ArtikCloudApi.AggregateData);
  }
}(this, function(ApiClient, AggregateData) {
  'use strict';

  /**
   * The AggregatesResponse model module.
   * @module model/AggregatesResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>AggregatesResponse</code>.
   * Aggregates Response
   * @alias module:model/AggregatesResponse
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>AggregatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregatesResponse} obj Optional instance to populate.
   * @return {module:model/AggregatesResponse} The populated <code>AggregatesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [AggregateData]);
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Integer');
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/AggregateData>} data
   */
  exports.prototype['data'] = undefined;

  /**
   * @member {Integer} endDate
   */
  exports.prototype['endDate'] = undefined;

  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;

  /**
   * @member {String} sdid
   */
  exports.prototype['sdid'] = undefined;

  /**
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;

  /**
   * @member {Integer} startDate
   */
  exports.prototype['startDate'] = undefined;




  return exports;
}));
