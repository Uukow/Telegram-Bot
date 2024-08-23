const TelegramBot = require('node-telegram-bot-api');

// Replace with your Telegram Bot Token
const token = '6877474168:AAFyYugyNZzXFwdkNMPqXHsWeQFxU8ZR-zY';
const bot = new TelegramBot(token, {polling: true});

// Array to store connected channels
let connectedChannels = [];

// List of authorized users
const authorizedUsers = ['@hagad', '@qaliniyoqoraal'];

// Welcome message handler
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.chat.first_name || 'User'; // Fallback if first name is not available
    const welcomeMessage = `Hello, ${firstName}! Kusoo Dhawaaw Botkaan Oo aan ugu Talo Galnay Spamka Todobaadlaha ah ee Somali Telegram Admins. \n\n Development By Abdulkadir Uukow.`;


    // Define the menu buttons
    const menuOptions = {
        reply_markup: {
            keyboard: [
                [{ text: 'Help' }],
                [{ text: 'Services' }],
                [{ text: 'About' }]
            ],
            resize_keyboard: true, // Resize the keyboard to fit the screen
            one_time_keyboard: true // Show the keyboard once, and then hide it
        }
    };

    // Send the welcome message with the menu buttons
    bot.sendMessage(chatId, welcomeMessage, menuOptions);
});

// Listen for menu button clicks
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === 'Help') {
        bot.sendMessage(chatId, 'Soo Dhawaaw Markale Waxaan Nahay Somali Telegram admins waxaan botkaan ugu talo galnay in aan ku share gareyno Spamkeena Todobaadlaha ah hadaba si aad uga mid noqoto dadka ka qayb qaadanaya shareta ama aad kusoo biirtay lagaana ogolaadey kusoo biirista waxaad samaynaysaa soo qor \n \n /connect channelkaaga magaciisa \n tusaale /connect @xikmadosom \n\n hadaba shuruudaha lagaaga baahanyahay si uu u aqristo channelkaaga kow waa inuu public ahaadaa sidoo kalena uu leeyahay id u gaar ah ha qaldin ID-ga, sidoo kale si aad u ogaato channels-ka xubnaha ka ah fadlan soo qor si laguu caawiyo la xiriir @hagad mahadsanid.');
    } else if (text === 'Services') {
        bot.sendMessage(chatId, 'Dhawaan Filo');
    } else if (text === 'About') {
        bot.sendMessage(chatId, 'Waxaan Nahay Somali Telegram Admins waa madal ay ku midaysanyihiin Adminska chanellska ugu waawayn Telegramka Soomaalida dhexdeeda ah. adne qayb waad ka noqon kartaa Si aad noogusoo Biirto Codsigaaga u gudbi Masuuliyiintaan \n \n @Najiibsicid : Gudoomiye \n @hagad : Xeer-ilaaliye \n @mfaratoon : Masuul sare');
    } else if (text.startsWith('/connect')) {
        // Handle /connect command
    } else if (text.startsWith('/broadcast')) {
        // Handle /broadcast command
    } else if (text !== '/start') {  // Avoid echoing the start message
        // bot.sendMessage(chatId, `You said: ${text}`);
    }
});


// Listen for any kind of message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Simple chat response.//// bot.sendMessage(chatId, `You said: ${text}`);
});



// Command to connect a channel
bot.onText(/\/connect (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const channel = match[1]; // Extract the channel username or ID
    if (!connectedChannels.includes(channel)) {
        connectedChannels.push(channel);
        bot.sendMessage(chatId, `Connected to channel: ${channel}`);
    } else {
        bot.sendMessage(chatId, `Channel ${channel} is already connected.`);
    }
});


// Command to send a message to all connected channels at once
bot.onText(/\/broadcast (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const username = msg.from.username ? `@${msg.from.username}` : ''; // Get the username with @
    const message = match[1]; // Extract the message to be sent

    if (!authorizedUsers.includes(username)) {
        bot.sendMessage(chatId, 'You do not have permission to send messages to all channels.');
        return;
    }

    if (connectedChannels.length === 0) {
        bot.sendMessage(chatId, 'No channels connected.');
        return;
    }

    connectedChannels.forEach(channel => {
        bot.sendMessage(channel, message)
            .catch(err => {
                console.error(`Failed to send message to ${channel}:`, err.message);
            });
    });

    bot.sendMessage(msg.chat.id, `Message broadcasted to all connected channels: ${message}`);
});

// Command to list all connected channels
bot.onText(/\/channels/, (msg) => {
    const chatId = msg.chat.id;

    if (connectedChannels.length === 0) {
        bot.sendMessage(chatId, 'No channels are currently connected.');
    } else {
        let channelsList = 'Connected Channels:\n';
        connectedChannels.forEach((channel, index) => {
            channelsList += `${index + 1}. ${channel}\n`;
        });
        bot.sendMessage(chatId, channelsList);
    }
});