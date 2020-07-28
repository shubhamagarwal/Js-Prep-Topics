let User = function () {
    if (typeof User.instance === "object") return User.instance;
    this.number = Math.random();
    User.instance = this;
  };
  let us1 = new User();
  let us2 = new User();