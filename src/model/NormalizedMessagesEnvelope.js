(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NormalizedMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NormalizedMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloudApi) {
      root.ArtikCloudApi = {};
    }
    root.ArtikCloudApi.NormalizedMessagesEnvelope = factory(root.ArtikCloudApi.ApiClient, root.ArtikCloudApi.NormalizedMessage);
  }
}(this, function(ApiClient, NormalizedMessage) {
  'use strict';

  /**
   * The NormalizedMessagesEnvelope model module.
   * @module model/NormalizedMessagesEnvelope
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>NormalizedMessagesEnvelope</code>.
   * Normalized Messages Envelope
   * @alias module:model/NormalizedMessagesEnvelope
   * @class
   * @param count
   * @param size
   * @param data
   */
  var exports = function(count, size, data) {








    this['count'] = count;
    this['size'] = size;
    this['data'] = data;
  };

  /**
   * Constructs a <code>NormalizedMessagesEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NormalizedMessagesEnvelope} obj Optional instance to populate.
   * @return {module:model/NormalizedMessagesEnvelope} The populated <code>NormalizedMessagesEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('sdids')) {
        obj['sdids'] = ApiClient.convertToType(data['sdids'], 'String');
      }
      if (data.hasOwnProperty('sdid')) {
        obj['sdid'] = ApiClient.convertToType(data['sdid'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Integer');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Integer');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [NormalizedMessage]);
      }
    }
    return obj;
  }


  /**
   * @member {String} sdids
   */
  exports.prototype['sdids'] = undefined;

  /**
   * @member {String} sdid
   */
  exports.prototype['sdid'] = undefined;

  /**
   * @member {String} uid
   */
  exports.prototype['uid'] = undefined;

  /**
   * @member {Integer} startDate
   */
  exports.prototype['startDate'] = undefined;

  /**
   * @member {Integer} endDate
   */
  exports.prototype['endDate'] = undefined;

  /**
   * @member {String} order
   */
  exports.prototype['order'] = undefined;

  /**
   * @member {String} next
   */
  exports.prototype['next'] = undefined;

  /**
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;

  /**
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;

  /**
   * @member {Array.<module:model/NormalizedMessage>} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));