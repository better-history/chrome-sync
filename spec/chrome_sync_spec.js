ChromeSync = require('../chrome_sync.js');

describe('ChromeSync', function() {
  beforeEach(function() {
    this.callback = jasmine.createSpy("callback");
    this.chromeSync = new ChromeSync({chrome: chrome});
  });

  describe('#save', function() {
    beforeEach(function() {
      this.object = {data: 'yes, data'};
    });

    it('calls to the storage api to set the object', function() {
      this.chromeSync.save(this.object);
      expect(chrome.storage.sync.set).toHaveBeenCalledWith(this.object, jasmine.any(Function));
    });

    it('passes a callback through when passed', function() {
      this.chromeSync.save(this.object, jasmine.any(Function));
      expect(chrome.storage.sync.set).toHaveBeenCalledWith(this.object, jasmine.any(Function));
    });
  });

  describe('#remove', function() {
    it('calls to the storage api to remove the object', function() {
      this.chromeSync.remove('key');
      expect(chrome.storage.sync.remove).toHaveBeenCalledWith('key', jasmine.any(Function));
    });

    it('passes a callback through when passed', function() {
      this.chromeSync.remove('key', jasmine.any(Function));
      expect(chrome.storage.sync.remove).toHaveBeenCalledWith('key', jasmine.any(Function));
    });
  });

  describe('#get', function() {
    it('calls to the storage api to get the object', function() {
      this.chromeSync.get('key', jasmine.any(Function));
      expect(chrome.storage.sync.get).toHaveBeenCalledWith('key', jasmine.any(Function));
    });
  });
});
