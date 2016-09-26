
var AngularHomepage = require('./pages/AngularHomepage.js');

describe('angularjs homepage', function(){
    it('should greet the named user', function(){
        //var angularHome = new AngularHomepage(); - it is done by Module
        AngularHomepage.get();
        AngularHomepage.setName("Julie");
        expect(AngularHomepage.getGreeting()).toEqual('Hello Julie!');
    });
});