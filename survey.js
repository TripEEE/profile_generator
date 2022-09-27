const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('What is your username? Nicknames are also acceptable. ', (answer) => {
    console.log(`Thank you for providing your username: ${answer}`);

    rl.question('What is your favorite activity? ', (answer) => {
      console.log(`Thank you for providing your favorite activity: ${answer}`);

      rl.question('What is your favorite type of music? ', (answer) => {
        console.log(`Thank you for providing your favorite music: ${answer}`);

        rl.question('What is your favorite meal? Dinner? Brunch? ', (answer) => {
          console.log(`Thank you for providing your favorite meal: ${answer}`);

          rl.question('What is your favorite thing to eat for that meal? ', (answer) => {
            console.log(`Thank you for providing your favorite meal: ${answer}`);

            rl.question('What is your favorite sport? Lawn sports count too!', (answer) => {
              console.log(` Thank you for providing your favorite sport:${answer}`);

              rl.question('What is your secret superpower? ', (answer) => {
                console.log(`Thank you for providing your secret (not anymore) superpower: ${answer}`);

                rl.close();

              });
            });
          });
        });
      });
    });
  });
});

