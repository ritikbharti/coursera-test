(function(wimdow) {
	var names = ["Ritik", "Ashu", "Abhishek", "Ravi", "Aditi", "Akshra"];

	for(var i = 0; i < name.length; i++) {
		var firstletter = ((names[i]).char(0)).LowerCase();

		if (firstLetter === 'j') {
    	byeSpeaker.speak(names[i]);
  		} else {
    	helloSpeaker.speak(names[i]);
  		}
	}

})(window);