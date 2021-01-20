var utils = function () {
  var _utils = this,
    IsJsonString = function (str) {
      var sParsedtring = '';
      try {
        sParsedtring = JSON.parse(str);
        return sParsedtring;
      } catch (e) {
        return false;
      }
    };

  _utils.QueryParams = function () {
    var qs = {},
      query = window.location.search.substring(1),
      vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      // If first entry with this name
      if (typeof qs[pair[0]] === 'undefined') {
        if (!!pair[1]) {
          qs[pair[0].toLowerCase()] = decodeURIComponent(pair[1]);
        }
        // If second entry with this name
      } else if (typeof qs[pair[0]] === 'string') {
        var arr = [qs[pair[0].toLowerCase()], decodeURIComponent(pair[1])];
        qs[pair[0].toLowerCase()] = arr;
        // If third or later entry with this name
      } else {
        qs[pair[0].toLowerCase()].push(decodeURIComponent(pair[1]));
      }
    }
    return qs;
  };

  _utils.setSessionData = function (key, data) {
    if (typeof data === "undefined" || data === null) {
      data = '';
    }
    if (data.__proto__.constructor === Object) {
      data = JSON.stringify(data);
    }
    sessionStorage.setItem(key, data);
  }



  _utils.getSessionData = function (key) {
    var data = sessionStorage.getItem(key);
    return IsJsonString(data) || data;
  }

  _utils.clearSession = function (key) {
    if (!!key) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.clear();
    }
  }

  _utils.createGetQueryParam = function (oJson) {
    var getParam = [];
    for (var i = 0; i < Object.keys(oJson).length; i++) {
      getParam.push(Object.keys(oJson)[i] + '=' + oJson[Object.keys(oJson)[i]]);
    }
    getParam = getParam.join("&");

    return getParam;
  }

  _utils.getUTM = function () {
    var result = {};
    result.utm_source = _utils.QueryParams.utm_source || '';
    result.utm_campaign = _utils.QueryParams.utm_campaign || '';
    result.utm_medium = _utils.QueryParams.utm_medium || '';
    result.utm_term = _utils.QueryParams.utm_term || '';
    result.utm_content = _utils.QueryParams.utm_content || '';
    return result;
  }

  _utils.escapeSpecialChar = function (string, escapedChar) {
    escapedChar = escapedChar || /[&\/\\#,+()$~%.'":*?<>{}]/g;
    return string.replace(escapedChar, '\\');
  }

}


utils.$inject = [];
appServices.service(utils);
