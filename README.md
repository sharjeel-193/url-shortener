# QuickLink

A simple React application providing URL shortening services using multiple providers: Spoo.me, Shortiny, Short.io, and TinyURL. This app allows users to generate shortened URLs, manage them, and customize certain features like alias and click limits.

[Live Demo](https://quicklink-urlshortener.netlify.app/)

## Features
* Multiple URL Shortening Providers: Choose from Spoo.me, Shortiny, Short.io, and TinyURL to shorten your URLs.
* Responsive Design: Fully responsive design for both desktop and mobile devices.

## Getting Started

### Prerequisites

To run this project locally, you'll need to have:

    Node.js (v14 or later)
    npm or yarn

### Installation

**Step 1: Clone the Repository:**

```bash

git clone https://github.com/sharjeel-193/url-shortener.git
cd url-shortener-service

```

**Step 2: Install Dependencies:**

Using npm:

```bash
npm install
```

Or using yarn:
```bash
yarn install
```

**Step 3: Environment Variables:**

Create a .env file in the root directory and add your API keys for the services used:
```bash
    REACT_APP_TINYURL_KEY=your_tinyurl_api_key
    REACT_APP_SHORTINY_KEY=your_shortiny_api_key
```
Obtain your API keys from the respective services:
* TinyURL
* Shortiny
* Short.io
* Spoo.me

**Step 4: Running the App**

To start the development server, run:

```bash
npm start
```
or
```bash
yarn start
```

Visit http://localhost:3000 in your browser to see the app in action.

**Step 5: Deployment**

This project is deployed using Netlify. For this you have to follow the following steps: 
* Set Up Your Netlify Account and link it to your GitHub repository.
* Deploy the Project through the Netlify dashboard, configuring the environment variables as described above.
You can access the currently deployed version at the following url:
```bash
https://quicklink-urlshortener.netlify.app/
```

### Usage

* Enter the URL you wish to shorten.
* Select the Domain from the dropdown menu (Spoo.me, Shortiny, Short.io, TinyURL).
* Click 'Generate Link' to create the shortened URL.
* Copy the Shortened URL using the provided icon button.

### Technologies Used

* **React**: Frontend library for building user interfaces.
* **MUI**: Component library for implementing Material Design in React.
* **Netlify**: Hosting and deployment platform.

License

This project is licensed under the MIT License - see the LICENSE file for details

For any inquiries or issues, please contact m.sharjeel193@gmail.com
