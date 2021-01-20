var dataTransform = function () {
  var _dataTransform = this;
  this.formatter = function (value, type) {
    var result = 'N/A';
    switch (type) {
      case 'number':
        if (value >= 1000000000) {
          value = parseFloat(value / 1000000000).toFixed(2).replace(/\.00$/, '') + ' B';
        }
        if (value >= 1000000) {
          value = parseFloat(value / 1000000).toFixed(2).replace(/\.00$/, '') + ' M';
        } else {
          value = parseFloat(value).toFixed(2).replace(/\.00$/, '').replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
        }
        // if (value >= 1000) {
        //   return parseFloat(value / 1000).toFixed(2).replace(/\.00$/, '') + ' K';
        // }
        break;
      case 'money':
        value = this.formatter(Math.round(value * 100) / 100, 'number');
        if (value >= 0) {
          value = '₹ ' + value;
        } else {
          value = 'N/A';
        }
        break;
      case 'percent':
        if (!!value || parseInt(value, 10) === 0) {
          value = parseFloat(value).toFixed(2);

          if ((value - parseInt(value, 10)) === 0) {
            value = parseInt(value, 10) + ' %';
          }
        } else {
          value = 'N/A';
        }
        break;
      case 'date':
        var monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        var date = new Date(value);
        if (date.toDateString() !== "Invalid Date") {
          var dateString = date.getDate().toString();
          var datePart = dateString.slice(-1);
          var limiter = '';
          if (datePart === '1') {
            limiter = 'st';
          } else if (datePart === '2') {
            limiter = 'nd';
          } else if (datePart === '3') {
            limiter = 'rd';
          } else {
            limiter = 'th';
          }
          value = {
            "date": dateString,
            "month": monthNames[date.getMonth()],
            "year": '' + date.getFullYear(),
            'limiter': limiter,
            'formatDate': dateString + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear()
          }
        } else {
          value = 'N/A';
        }
        break;
    }
    result = value;

    return result;
  }
}



dataTransform.$inject = [];
appServices.service(dataTransform);
