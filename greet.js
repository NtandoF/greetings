var textInputElem = document.querySelector('.textInput');
var counterElem = document.querySelector('.counter');
var languageRadioELem = document.querySelector('.languageRadio');
var displayGreeting = document.querySelector('.displayGreeting');
var greetBtn = document.querySelector('.greetButton');
var clearBtn = document.querySelector('.clear');

if (localStorage.getItem('users')){
  Names = JSON.parse(localStorage.getItem('users'));
}
var GreetFactory = GreetingFactory();

function greetingsDom(storedUsers){
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
  var textValue = textInputElem.value
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
})

clearBtn.addEventListener('click', function() {
  localStorage.clear();
  location.reload();
})
