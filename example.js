var user = require('./models/User.js');

var myData = {
    username: 'ksck23',
    name: 'Shiva Chandra Kumar K',
    gender: 'male',
    address: 'Hyderabad, India'
};

// save new user
user.save(myData, function (err, res) {
    if (err) console.log(err + " " + res);
    else console.log(res);
});

// get a user
user.get("ksck23", function (err, res) {
    if (err) console.log(err + " " + res);
    else console.log(res);
});