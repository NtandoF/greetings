describe('Greetings languages', function() {
  it('should greet Ntando in English', function() {
    var greeter = GreetingFactory()
    assert.equal(greeter.greeting('Ntando', 'English'), 'Hello, Ntando');
  });
  it('should greet Lunga in Afrikaans', function() {
    var greeter = GreetingFactory()
    assert.equal(greeter.greeting('Lunga', 'Afrikaans'), 'Hallo, Lunga');
  });
  it('should greet BlessMess in French', function() {
    var greeter = GreetingFactory()
    assert.equal(greeter.greeting('BlessMess','French'), 'Bonjour, BlessMess');
  });
});
