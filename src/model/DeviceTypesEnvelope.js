(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeviceTypeArray'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceTypeArray'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloudApi) {
      root.ArtikCloudApi = {};
    }
    root.ArtikCloudApi.DeviceTypesEnvelope = factory(root.ArtikCloudApi.ApiClient, root.ArtikCloudApi.DeviceTypeArray);
  }
}(this, function(ApiClient, DeviceTypeArray) {
  'use strict';

  /**
   * The DeviceTypesEnvelope model module.
   * @module model/DeviceTypesEnvelope
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>DeviceTypesEnvelope</code>.
   * DeviceTypes Envelope
   * @alias module:model/DeviceTypesEnvelope
   * @class
   * @param total
   * @param count
   * @param offset
   */
  var exports = function(total, count, offset) {

    this['total'] = total;
    this['count'] = count;
    this['offset'] = offset;

  };

  /**
   * Constructs a <code>DeviceTypesEnvelope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceTypesEnvelope} obj Optional instance to populate.
   * @return {module:model/DeviceTypesEnvelope} The populated <code>DeviceTypesEnvelope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Integer');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Integer');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = DeviceTypeArray.constructFromObject(data['data']);
      }
    }
    return obj;
  }


  /**
   * @member {Integer} total
   */
  exports.prototype['total'] = undefined;

  /**
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;

  /**
   * @member {Integer} offset
   */
  exports.prototype['offset'] = undefined;

  /**
   * @member {module:model/DeviceTypeArray} data
   */
  exports.prototype['data'] = undefined;




  return exports;
}));
