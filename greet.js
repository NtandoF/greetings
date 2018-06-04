var textInputElem = document.querySelector('.textInput');
var counterElem = document.querySelector('.counter');
var languageRadioELem = document.querySelector('.languageRadio');
var displayGreeting = document.querySelector('.displayGreeting');
var greetBtn = document.querySelector('.greetButton');
var clearBtn = document.querySelector('.clear');
var People = localStorage.getItem('users');

var storedUsers = People ? JSON.parse(People) : {};
var GreetFactory = GreetingFactory(storedUsers);
  counterElem.innerHTML = GreetFactory.counter();
function greetingsDom(){
  counterElem.innerHTML = GreetFactory.counter();
  var checkedRadioBtn = document.querySelector("input[name='languageRadio']:checked");
  if (checkedRadioBtn) {
    var language = checkedRadioBtn.value
  }
  else {
    displayGreeting.innerHTML = "Please select language"
    displayGreeting.style.color = 'Green'
    return;
  }
  var textValue = textInputElem.value.toUpperCase();
  localStorage.setItem('users', JSON.stringify(GreetFactory.forNames()));

  if (isNaN(textValue)) {
    displayGreeting.innerHTML = GreetFactory.greeting(textValue, language);
    localStorage.setItem('users', JSON.stringify(GreetFactory.forNames()));
    counterElem.innerHTML = GreetFactory.counter();
  } else {
    displayGreeting.innerHTML = "Enter a name "
    displayGreeting.style.color = 'Green'
  }
};
greetBtn.addEventListener('click', function() {
  greetingsDom();
  if(textInputElem.value!=''){
    textInputElem.value = '';
  }
})

clearBtn.addEventListener('click', function() {
  localStorage.clear();
  location.reload();
})
