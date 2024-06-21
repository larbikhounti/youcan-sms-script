# YouCan SMS Script

## Overview

This project is an Express.js application designed to send SMS notifications for every order received in your YouCan.Shop store using Twilio. By integrating this script into your YouCan.Shop workflow, you can automate customer notifications, enhancing customer experience and keeping yourself updated on new orders in real-time.

## Features

- **Automated SMS Notifications**: Sends an SMS notification to the customer when a new order is received.
- **Customizable Message Content**: Personalize the SMS content with order details such as customer name, order number, and order total.
- **Error Handling**: Logs and handles errors effectively to ensure reliable operation.
- **Environment Configuration**: Uses a `.env` file for easy configuration of sensitive information and environment-specific settings.

## Prerequisites

- YouCan.Shop store with API access.
- Twilio account for sending SMS.
- Node.js and npm installed on your development machine.
- TypeScript setup.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/larbikhounti/youcan-sms-script.git
    cd youcan-sms-script
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your configuration:
    ```bash
    touch .env
    ```

4. Add the following variables to your `.env` file:
    ```
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
    ```

## Usage

1. Start the application:
    ```bash
    npm start
    ```

2. The server will run on `http://localhost:3000`.

3. To send an SMS notification, make a POST request to `/webhook`.

