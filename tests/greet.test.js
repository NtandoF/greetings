describe('Greetings languages', function() {
  it('should greet Ntando in English', function() {
    var greeter = GreetingFactory()
    assert.equal(greeter.greeting('English', 'Ntando'), 'Hello, Ntando');
  });
  it('should greet Lunga in Afrikaans', function() {
    var greeter = GreetingFactory()
    assert.equal(greeter.greeting('Afrikaans', 'Lunga'), 'Hallo, Lunga');
  });
  it('should greet BlessMess in French', function() {
    var greeter = GreetingFactory()
    assert.equal(greeter.greeting('French', 'BlessMess'), 'Bonjour, BlessMess');
  });
});
