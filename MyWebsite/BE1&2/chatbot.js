const readline = require('readline');

const predefinedResponses = {
  'How are you?': 'I am doing well, thank you!',
  'What is your name?': 'I am a chatbot.',
  'what is the best game of all time?':'Stardew valley',
  'Exit': 'Goodbye! Have a great day.',
};

const chatbot = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const promptUser = () => {
    rl.question('You: ', (userInput) => {
      if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
        console.log(predefinedResponses['Exit']);
        rl.close();
      } else {
        const response = predefinedResponses[userInput] || 'I do not understand that.';
        console.log(`Bot: ${response}`);
        promptUser();
      }
    });
  };

  console.log('Bot: Hello! Ask me anything.');
  promptUser();
};

chatbot();
