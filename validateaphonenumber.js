function renderJudgement () {

    var str = document.getElementById('realno').value; 
    
    function telephoneCheck(str) {
      var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
      return regex.test(str);
    };
    
    if (telephoneCheck(str)) {document.getElementById('answer').innerHTML = 'The number is valid.'}
    
    else {document.getElementById('answer').innerHTML = 'The number is invalid.'}
    }