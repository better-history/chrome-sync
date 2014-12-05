(function() {

  var chromeAPI;

  var wrappedCallback = function(operation, data, callback) {
    if(chromeAPI.runtime.lastError) {
      var message = chromeAPI.runtime.lastError.message;
      // handle error
    }
    if(typeof callback !== 'undefined') {
      callback(data);
    }
  };

  var ChromeSync = function(options) {
    if(typeof options === 'undefined') {
      options = {};
    }
    chromeAPI = options.chrome || chrome;
  };

  ChromeSync.prototype.save = function(object, callback) {
    chromeAPI.storage.sync.set(object, function(data) {
      wrappedCallback('Set', data, callback);
    });
  };

  ChromeSync.prototype.remove = function(key, callback) {
    chromeAPI.storage.sync.remove(key, function(data) {
      wrappedCallback('Remove', data, callback);
    });
  };

  ChromeSync.prototype.get = function(key, callback) {
    chromeAPI.storage.sync.get(key, function(data) {
      wrappedCallback('Get', data, callback);
    });
  };

  if(typeof module !== 'undefined' && module.exports) {
    module.exports = ChromeSync;
  } else {
    window.ChromeSync = ChromeSync;
  }
})();
