Instagram Blocker Extension 🚫📱
Instagram Blocker is a Chrome extension designed to help you stay productive by blocking access to Instagram. Whenever you try to visit Instagram, the extension redirects you to a custom page (e.g., a motivational timer or message) to remind you to focus on your tasks.

This project is perfect for anyone looking to reduce distractions and build better browsing habits.

🚀 Features
Blocks Instagram: Redirects all attempts to visit Instagram to a custom page.
Customizable Redirect: Choose the page you want to display when Instagram is blocked (e.g., a motivational message or a timer).
Simple and Lightweight: Built using the latest Chrome Manifest V3 for optimized performance.

🛠 How to Use
Follow these steps to set up and use the Instagram Blocker extension:

1. Clone or Download the Repository
Clone the repository or download the ZIP file, then extract it to a folder on your computer.

bash

git clone https://github.com/yourusername/instagram-blocker.git

2. Set Up Your Blocker Page
Edit the index.html file in the project folder to customize the message or content you want to display when Instagram is blocked. You can:

Add motivational text.
Include a countdown timer.
Display helpful productivity tips.

3. Load the Extension in Chrome
Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode (toggle in the top-right corner).
Click Load Unpacked and select the project folder containing the manifest.json file.
The extension will now appear in your list of installed extensions.

5. Test the Extension
Open a new tab and visit https://www.instagram.com/.
You should be redirected to the custom blocker page.
⚙️ Customization
To block other distracting websites (e.g., Twitter, Facebook), update the rules.json file:

json

{
  "id": 2,
  "priority": 1,
  "action": {
    "type": "redirect",
    "redirect": {
      "url": "http://localhost:8000/blocked.html"
    }
  },
  "condition": {
    "urlFilter": "https://www.twitter.com/*",
    "resourceTypes": ["main_frame"]
  }
}
To redirect users to a different page, update the url field in the rules.json file or host your own page on a local server.

🔧 Troubleshooting
If you encounter any issues:

File URL Restrictions:

If the file:// redirect does not work, use a local HTTP server:
bash

python -m http.server 8000
Then update the redirect URL in rules.json:
json

"redirect": { "url": "http://localhost:8000/index.html" }
Reload Extension:

If changes don't take effect, reload the extension from the Chrome Extensions page.
💡 How It Works
The manifest.json file defines the extension and uses Chrome's declarativeNetRequest API to block specific websites.
The rules.json file contains rules that redirect requests to Instagram (https://www.instagram.com/*) to your custom page.
The custom page (index.html) is displayed to remind you to focus on your tasks.
🛑 Limitations
The extension only works in Chrome.
The current implementation uses local files, which may require running a local HTTP server for some systems.
🤝 Contributing
Feel free to fork this repository and submit pull requests for additional features or improvements! Suggestions for enhancements like dynamic timers, multiple-site blocking, or integration with productivity tools are welcome.

