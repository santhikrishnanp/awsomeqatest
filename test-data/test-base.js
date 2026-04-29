const base= require('@playwright/test');

exports.customtest = base.test.extend({

testDataforRegistration: {
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@gmail.com",
    telephone: "1234567890",
    password: "Password123"  
  }

});