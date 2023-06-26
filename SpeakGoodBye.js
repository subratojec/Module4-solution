(function(window) {
    var byeSpeaker = {}; // Creating the byeSpeaker object
  
    var speakWord = "Goodbye";
  
    byeSpeaker.speak = function(name) { // Attaching the speak method
      console.log(speakWord + " " + name);
    };
  
    // Exposing byeSpeaker to the global context
    window.byeSpeaker = byeSpeaker;
  })(window);
 
 