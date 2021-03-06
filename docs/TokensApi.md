# ArtikCloudApi.TokensApi

All URIs are relative to *https://api.artik.cloud/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkToken**](TokensApi.md#checkToken) | **POST** /checkToken | Check Token
[**refreshToken**](TokensApi.md#refreshToken) | **POST** /token | Refresh Token


<a name="checkToken"></a>
# **checkToken**
> CheckTokenResponse checkToken(tokenInfo)

Check Token

Check Token

### Example
```javascript
var ArtikCloudApi = require('artikcloud-js');
var defaultClient = ArtikCloudApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloudApi.TokensApi()

var tokenInfo = new ArtikCloudApi.TokenRequest(); // {TokenRequest} Token object to be checked


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.checkToken(tokenInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenInfo** | [**TokenRequest**](TokenRequest.md)| Token object to be checked | 

### Return type

[**CheckTokenResponse**](CheckTokenResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshToken"></a>
# **refreshToken**
> RefreshTokenResponse refreshToken(grantType, refreshToken)

Refresh Token

Refresh Token

### Example
```javascript
var ArtikCloudApi = require('artikcloud-js');
var defaultClient = ArtikCloudApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: artikcloud_oauth
var artikcloud_oauth = defaultClient.authentications['artikcloud_oauth'];
artikcloud_oauth.accessToken = "YOUR ACCESS TOKEN"

var apiInstance = new ArtikCloudApi.TokensApi()

var grantType = "grantType_example"; // {String} Grant Type.

var refreshToken = "refreshToken_example"; // {String} Refresh Token.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.refreshToken(grantType, refreshToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Grant Type. | 
 **refreshToken** | **String**| Refresh Token. | 

### Return type

[**RefreshTokenResponse**](RefreshTokenResponse.md)

### Authorization

[artikcloud_oauth](../README.md#artikcloud_oauth)

### HTTP reuqest headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

