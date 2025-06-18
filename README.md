# Zerodha_Clone_Project
As practice, I tried building a clone of a Stock Exchange Platform- Zerodha. I used React for the frontend and react-router-dom for navigating. This project has another two parts dashboard and backend. In dashboard users can watch their stocks information.

## Installation
1. **Clone this repository.**
```bash
git clone https://github.com/pawni13/Zerodha_Clone_Project/Frontend
```
2. **Navigate to project folder & install associated dependencies**
```bash
cd folder_name
npm install
```
3. **Set up the dashboard and backend. Create a .env file and add these environmental variables.**
```bash
REACT_APP_BACKEND_URL="http://localhost:3002"
REACT_APP_DASHBOARD_URL="http://localhost:3001"
```
4. **Start the server.**
```bash
 npm start
```

> ** ⚠️Note:**
> - Start the frontend first, so that it can run on port 3000 and then dashboard will automatically be on port 3002.
> - All the 3 folders (frontend, backend & dashboard) should be in a single folder.
# Screenshots
![Home Screenshots](./Screenshots/Screenshot(206).png)
# Zerodha Clone (Dashboard)
It's another part of Zerodha clone. After logging in, users can see current stocks in the left side and can buy any stock, that is the watchlist. On the right part users can see their own stocks price. These data is coming from database. These data can become dynamic by adding live data providing APIS. Users can also see their stock conditions by the following chart and can understand better. Doughnut and bar chart has been used here.

## Technologies
- React.js
- MongoDB
## Installation
1. To use this project in you local machine, you should set up the frontend and backend part also. Under a folder, create 3 seperate folders as dashboard, backend and frontend.
 And then start them individually.
- [See the installation of frontend.](#)
- [See the installation of backend.](#)
  
> ⚠️ **Note**: Start frontend server first, to avoid conflict with port numbers.

2. Clone the dashboard repo into your local machine under dashboard folder (as described in step 1):
```bash
git clone https://github.com/pawni13/Zerodha_Clone_Project/Dashboard
```

3. Navigate to the dashboard folder & install all the dependencies:
```bash
cd dashboard_directory_name
npm install
```

4. Create a .env file and set up all environmental variables in it:
```bash
 REACT_APP_BACKEND_URL=http://localhost:3002
 REACT_APP_FRONTEND_URL=http://localhost:3000 
```
5. Now, you can start the server:
```bash
npm start
```

# Zerodha Clone (Backend)
This is the backend of the Zerodha clone. This backend API manages CRUD(Create, Read, Update, Delete) operations both the frontend and dashboard. It handles the interactions of dashboard and frontend with database. It looks after the user authentication by JSON Webtoken and handles user sigup and login.

## Technologies
- Express.js
- MongoDB
## API Endpoints
GET   /allHoldings
GET   /allPositions
POST  /newOrder
POST  /signUp
POST  /logIn
## Installation
1. Clone this repository:
```bash
git clone https://github.com/pawni13/Zerodha_Clone_Project/Backend
```
2. Navigate to this backend directory and install all the dependencies:
```bash
cd backend_directory
npm install

```
3. Create a .env file in the root backend directory and set it up:
```bash
MONGO_URL=put_your_mongoDB_URL
TOKEN_KEY=set_as_your_wish_or_generate_from_any_JWT_token_generator
```  
4. It's all done! Now, start the server:
```bash
npm start
```
> ** ⚠️Note:**
> I have not included node_modules in this project as it'll be automatically downloaded with npm install cmd.
-THANK YOU
