function GreetingFactory(stored) {

  var Names = stored || {};
  var message = '';

  function greeting(name, language){
     Names[name] = 0;
    if (language === "English") {
      return 'Hello, ' + name;
    }
    else if (language === "Afrikaans") {
      return 'Hallo, ' + name;
    }
    else if (language === "French") {
      return 'Bonjour, ' + name;
    }
  }

  function forNames() {
    return Names;
  }

  function clear() {
    return Names = {}
  }

  function counter() {
    return Object.keys(Names).length;
  }
  return {
    greeting,
    clear,
    counter,
    forNames
  }
}
