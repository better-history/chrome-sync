global.chrome = {
  storage: {
    sync: {
      set: jasmine.createSpy("set"),
      get: jasmine.createSpy("get"),
      remove: jasmine.createSpy("remove")
    }
  }
};
