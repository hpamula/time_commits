#!/bin/bash

# ==================== GLOBAL INSTALLS ====================
set -e
# sudo apt update && sudo apt upgrade -y
# sudo apt install nodejs npm

# ==================== LOCAL BACKEND SETUP ====================
cd backend
npm install express morgan
# node app.js

# ==================== LOCAL FRONTEND SETUP ====================
# commented beacuse not finished yet
# cd ..
# npm create vite@latest frontend -- --template react
# cd frontend
# who knows, maybe command below is redundant
# npm install
# after `npm start` in one terminal, run below in another terminal to run both
# npm run dev
