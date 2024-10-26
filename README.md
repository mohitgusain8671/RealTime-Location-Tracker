# Real-Time Tracking System

A real-time tracking system built with **Express.js**, **EJS**, **Socket.IO**, **Leaflet**, and **OpenStreetMap**. This application displays user locations on a live map and updates in real-time as their positions change.

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Code Overview](#code-overview)
    - [index.js](#indexjs)
    - [index.ejs](#indexejs)
    - [script.js](#scriptjs)


## Features

- **Real-time Location Tracking**: Uses Socket.IO to update user locations on the map instantly.
- **Interactive Map**: Display locations on a dynamic map powered by Leaflet and OpenStreetMap.
- **Customizable UI**: HTML templates created using EJS for server-side rendering.

## Tech Stack

- **Backend**: Express.js
- **Frontend**: EJS, HTML, CSS, JavaScript
- **WebSocket**: Socket.IO for real-time updates
- **Mapping Library**: Leaflet for rendering the map with OpenStreetMap data
- **Location Data**: Browser's Geolocation API for fetching the user's location

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**:
   ```bash
    npm install
   ```

3.  **Start the Devlopment server**:
    ```bash
    npm run dev
    ```

    **For production**:

    ```bash
    npm start
    ```

## **Usage**

- **Open the application**: Go to `http://localhost:3000` in your browser.
- **Allow location access**: The browser will prompt you to allow location sharing.
- **Real-time tracking**: Your location will be displayed on the map and updated in real-time as you move(or in each second).
## Code Overview

### `index.js`

    - Initializes an Express server.
    - Sets up Socket.IO for real-time bidirectional communication.
    - Serves static files from the public directory.
    - Renders the main index.ejs template.

### `index.ejs`

    - Contains the HTML layout for displaying the map.
    - Connects to the Socket.IO server for receiving and broadcasting location updates.

### `script.js`

    - Uses the Geolocation API to watch and send the user’s location to the server.
    - Listens for location updates from other users and plots them on the Leaflet map.

