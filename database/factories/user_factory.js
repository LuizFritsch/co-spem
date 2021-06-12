class UserFactory {
  Build(simpleUser) {
    var user = {
      full_name: simpleUser.full_name,
      phone: simpleUser.phone,
      email: simpleUser.email,
      password: simpleUser.password,
      role: simpleUser.role,
      date_signup: simpleUser.date_signup,
      is_confirmed: simpleUser.is_confirmed,
    };

    return user;
  }
}

module.exports = new UserFactory();
