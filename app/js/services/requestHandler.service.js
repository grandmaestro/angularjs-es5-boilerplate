var request = function ($q, $http, ENVIRONMENT) {
  var _request = this;
  _request.callPostRequest = function (dataObj) {
    var queue = $q.defer(),
      reqObj = dataObj.reqObj,
      processName = dataObj.processName || '',
      req, sUrl = ENVIRONMENT.CONST_API_URL,
      token = '';
    token = token ? 'Token ' + token : token;
    if (!!dataObj.apiUrl) {
      sUrl = dataObj.apiUrl;
    }
    req = {
      method: 'POST',
      url: sUrl + processName,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      data: reqObj,
      timeout: 3 * 60 * 1000
    };
    if (navigator.onLine) {
      $http(req).then(function (res) {
        if (res.status == 200) {
          var resData = res.data,
            resolveObj = {
              data: resData,
              response: res
            };
          queue.resolve(resolveObj);
        } else {
          queue.reject(rejectDataObj);
        }
      }, function () {
        queue.reject();
      });
      return queue.promise;

    }

  };

  _request.callGetRequest = function (dataObj) {
    var queue = $q.defer(),
      processName = dataObj.processName || '',
      reqData = dataObj.reqObj || '',
      delimiter = !!dataObj.pathVariable ? '' : '?',
      req, sUrl = ENVIRONMENT.CONST_API_URL,
      token = '';

    if (!!dataObj.apiUrl) {
      sUrl = dataObj.apiUrl;
    }

    req = {
      method: 'GET',
      url: sUrl + processName + '/' + delimiter + reqData,

      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      timeout: 3 * 60 * 1000
    };
    if (navigator.onLine) {
      $http(req).then(function (res) {
        if (res.status == 200) {
          var resData = res.data,
            resolveObj = {
              data: resData,
              response: res
            };
          queue.resolve(resolveObj);
        } else {
          queue.reject(rejectDataObj);
        }
      }, function () {
        queue.reject();
      });
      return queue.promise;
    }

  };


  _request.callPutRequest = function (dataObj) {
    var queue = $q.defer(),
      reqObj = dataObj.reqObj,
      processName = dataObj.processName || '',
      req, sUrl = ENVIRONMENT.CONST_API_URL,
      token = '';
    token = token ? 'Token ' + token : token;

    if (!!dataObj.apiUrl) {
      sUrl = dataObj.apiUrl;
    }
    req = {
      method: 'PUT',
      url: sUrl + processName,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      data: reqObj,
      timeout: 3 * 60 * 1000
    };
    if (navigator.onLine) {

      $http(req).then(function (res) {
        if (res.status == 200) {
          var resData = res.data,
            resolveObj = {
              data: resData,
              response: res
            };
          queue.resolve(resolveObj);
        } else {
          queue.reject(rejectDataObj);
        }
      }, function () {
        queue.reject();
      });
      return queue.promise;
    }
  }
}
request.$inject = ['$q', '$http', 'ENVIRONMENT'];
appServices.service(request);
