![SkynetHost Bot](https://i.imgur.com/Fn1crdl.png "SkynetHost")

# SkynetHost Discord Bot
Open source for the community.

# You can... ✔
- See the code and learn from it.
- Help by making pull requests.

# You can't... ❌
- Use my code for your bot.
- Claim this code as yours.

# Adding commands 🔧

This project uses **Slappey**, you can install it through NPM to make things much easier. 

## Adding commands WITH Slappey

Install Slappey globally in your directory.
`npm install -g slappey`

Initialize the Slappey interface.
`slappey`

Select `Generate` > `Command` > name the command > select a category, here you have the category names:
- Links (any links leading to Skynet websites, **do not modify or add anything here.**)
- Support (anything related to support)
- Errors (anything that can help users and staff to solve issues)
- Other (anything else...)

Once finished, go to the category folder where you created the command, you should see something like this:

```JS
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NameCommand extends BaseCommand {
  constructor() {
    super('name', 'category', [alaises]);
  }

  run(client, message, args) {
    message.channel.send('name command works');
  }
}
```

Simply remove or edit the `message.channel.send()` line and you're good to go.

## Adding commands WITHOUT Slappey

Create a new .JS file with the name of the command inside any category folder. **Do not modify the links category.**

Inside the JS file paste this code:

```JS
const BaseCommand = require('../../utils/structures/BaseCommand');

//Replace NameCommand with the command name, example: "HelpCommand"
module.exports = class NameCommand extends BaseCommand {
  constructor() {
  //Replace with correct values.
    super('name', 'category', [alaises]);
  }

  run(client, message, args) {
    //Command logic goes here....
  }
}
```

## I highly sugget you to install `Slappey` to create a new command instead of doing it by hand.
