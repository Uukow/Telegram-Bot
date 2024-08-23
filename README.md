
# Telegram Bot for Channel Management and Communication

This project is a Telegram bot designed to manage channel messages and facilitate communication between users. It allows authorized users to broadcast messages to connected channels, track unique users, and forward messages for further handling.

## Features

- **Welcome Message**: Sends a personalized welcome message with menu options when users start the bot.
- **Channel Management**: Connects and lists channels, and broadcasts messages to all connected channels.
- **Message Forwarding**: Forwards messages from users to an authorized user and handles replies back to the original sender.
- **User Tracking**: Tracks unique users who interact with the bot.
- **Restricted Commands**: Access to certain commands is restricted to specific users.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Telegram Bot API Token](https://core.telegram.org/bots#botfather) (Replace `YOUR_BOT_API_TOKEN` in the code with your token)

## Installation

1. **Clone the Repository**

   ```bash
   git https://github.com/Uukow/Telegram-Bot
   cd Telegram-Bot
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Your Bot**

   - Open `bot.js` and replace `YOUR_BOT_API_TOKEN` with your Telegram Bot API token.
   - Modify the `authorizedUsers` array with the usernames of authorized users (e.g., `@hagad`, `@qaliniyoqoraal`).

4. **Run the Bot**

   ```bash
   node bot.js
   ```

## Commands

- **/start**: Initiates the bot and sends a welcome message with menu options.
- **/connect [channel]**: Connects a channel to the bot. Use the channel username (e.g., `@examplechannel`).
- **/broadcast [message]**: Sends a message to all connected channels. Restricted to authorized users.
- **/channels**: Lists all connected channels.
- **/views**: Shows the total number of unique users who have interacted with the bot. Restricted to authorized users.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code adheres to the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on the [My Facebook](https://facebook.com/uukow2017).

```

### Instructions for Customization

- **Replace placeholders**: Update `https://github.com/Uukow/Telegram-Bot` with your actual GitHub repository URL and `YOUR_BOT_API_TOKEN` with your bot token.
- **Adjust content**: Modify sections to better fit the specific details and functionality of your project.

### Additional Tips

- **Add Screenshots**: If possible, add screenshots or GIFs to visually demonstrate how the bot works.
- **Provide Examples**: Include examples of command usage to help users understand how to interact with the bot.
- **Document Errors**: Mention common errors and how to troubleshoot them if relevant.
