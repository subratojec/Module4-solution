var names = ["John", "Jane", "Mark", "Emily", "Tom"];

for (var i = 0; i < names.length; i++) {
  var name = names[i];

  var firstLetter = name[0].toLowerCase();

  // Compare firstLetter to lowercase 'j' and call the appropriate speak method
  if (firstLetter === 'j') {
    byeSpeaker.speak(name); // Call byeSpeaker's speak method for names starting with 'J' or 'j'
  } else {
    helloSpeaker.speak(name); // Call helloSpeaker's speak method for other names
  }
}

