const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\n", (question1) => {
  const name = question1.trim();
  if (name === "") {
    console.log("Please enter a valid name");
    return rl.close();
  }

  rl.question("What's an activity you like doing?\n", (question2) => {
    const activity = question2.trim();
    if (activity === "") {
      console.log("Please enter a valid activity");
      return rl.close();
    }

    rl.question("What do you listen to while doing that?\n", (question3) => {
      const listenTo = question3.trim();
      if (listenTo === "") {
        console.log("Please enter a valid song");
        return rl.close();
      }

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (question4) => {
        const favourite = question4.trim();
        if (favourite === "") {
          console.log("Please enter a valid favourite");
          return rl.close();
        }
        
        rl.question("What's your favourite thing to eat for that meal?\n", (question5) => {
          const dessert = question5.trim();
          if (dessert === "") {
            console.log("Please enter a valid dessert");
            return rl.close();
          }
          
          rl.question("Which sport is your absolute favourite?\n", (question6) => {
            const absolute = question6.trim();
            if (absolute === "") {
              console.log("Please enter a valid absolute");
              return rl.close();
            }
            
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (question7) => {
              const superpower = question7.trim();
              if (superpower === "") {
                console.log("Please enter a valid superpower");
                return rl.close();
              }
              
              console.log(`${name} loves listening to ${listenTo} while playing ${activity}, devouring ${favourite} ${dessert} for brunch, prefers ${absolute} over any other sport, and is amazing at ${superpower}.`);
              
              rl.close();
            });
            
          });
          
        });
        
      });
    });

  });
});

