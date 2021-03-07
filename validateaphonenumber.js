/* The simple task of assessing whether a number matches a certain format can be called in a single function of only a few lines. */

function renderJudgement () {

/* Now the value of the user input is taken from the input field. */

    var str = document.getElementById('realno').value; 


/* Now the input value as collected previously is assessed for validity or 'truthiness' as regards the regular expression it is tested against in the below function. You could use onclick for the event and implement a button, but it is unlikely you would see this in the real world despite it being functionally possible. An automated onkeyup is the best approach in order to provide the user with real time, automated feedback. It is important to note that onkeypress is not sufficient for this purpose and will always 'lag' behind, failing to register the latest keypress so to speak. So if you satisfied the regular expression with the tenth keystroke, onkeypress would counterintuitively only relay this information upon the eleventh sequential keystrokes. 

In terms of the regular expression itself it begins with an option 1 as per the American country code. Then you have the sequence of 10 numbers, optionally divided at customary points with a hyphen, per tradition. 0 and 1 are included as available selections for the first number of area codes because these numbers, though unavilable for domestic area codes, can be used for toll center and system codes. */

    function telephoneCheck(str) {
      var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
      return regex.test(str);
    };

/* The below if else simply prints a string into our HTML element if the passed function is valid. */
    
    if (telephoneCheck(str)) {document.getElementById('answer').innerHTML = 'The number is valid.'}
    
    else {document.getElementById('answer').innerHTML = 'You have not input a valid number.'}
    }