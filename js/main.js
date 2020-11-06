
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Usage!


  sleep(11000).then(() => {
    var typed = new Typed('#typed', {
      strings:["1337 is the first to provide IT training in Morocco, completely free of charge, open and accessible to anyone between the ages of 18 and 30. No need for an IT degree, or of having undergone extensive IT training. The only criteria for admission in Treize, Trente-Sept is CREATIVITY. The Treize, Trente-Sept educational approach is based on peer-learning. A participatory operating style allowing students to unleash their creativity through project-based learning. To train the future coders of tomorrow, we had to rethink learning. We had to make IT something fun, exciting and at odds with the restrictive vision that the general public may have about it. 1337 is the coding school par excellence, completely free of charge and accessible to all with no prerequisite of a degree. It offers a full immersion in a universe where the future is already present. Where IT and the lines of code are way more than a vague and off-putting concept… Treize, Trente-Sept, a forward-looking school from the present ."],
      typeSpeed: 30,
      backDelay: 7000,
      
    });
  });

