# Rooftop Energy - Landing page featuring a Solar Savings Calculator

##  This project is a prototype landing page for Rooftop Energy featuring an interactive Solar Savings Calculator, lead storage system, and a callback request form.

## Disclaimer
**Font Disclaimer:**
The **Corbel Light** font used in this project is for **educational and personal use only**. A proper license is required for commercial use. The font is included **as per the requirements of the technical assessment** and should be replaced with a commercially licensed alternative for production use.

## Features
- **Solar Saving Calculator**: Estimates system size, cost, and monthly installment based on user input.
- **Callback Request Form**: Submits the calculated quote along with the user’s name and contact details for follow-up.
- **Lead Storage**: User data is stored in MongoDB Atlas for persistence.
- **Quote Printing**: Allows users to print the results of their solar savings calculations.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Environment Variables**: Frontend and backend URLs are stored securely instead of being hardcoded.

## Technology Stack
- **Frontend**: Next.js.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB Atlas.
- **Styling**: Tailwind CSS, Lucide React.
- **Other tools**: Mongoose, Axios, CORS.

## API endpoint
- POST /api/callback - Stores user details and solar quote data.

## Setup Instructions For Running Locally

### Prerequisites
- **Node.js** installed (v12 or later)
- **MongoDB**
- **Git** for cloning the repository
- **VS Code IDE**

### Installation

#### **1. Clone the repository**
```bash
git clone https://github.com/Nurzarina/Rooftop_Energy_Landing_Page.git
cd Rooftop_Energy_Landing_Page
```

#### **2. Backend Setup**

Step 1: Navigate to the Backend Directory
```bash
cd backend
```

Step 2: Install Dependencies
```bash
npm install
```

Step 3: Set up Environment Variables
1. In the backend folder, create a file named `.env` .
2. Add the following environment variables in the .env file:
```bash
MONGO_URI = your_mongodb_URI
PORT = your_desired_port
ORIGIN_URL_LOCAL = your_local_frontend_url
ORIGIN_URL_DEPLOYED = ""    # Leave as "" for running locally.
```
3. Replace the environment variables with your credentials.
4. Create a collection named `callbackrequests` in your MongoDB database.
5. Run the backend server
```bash
nodemon server.js
```

#### **3. Frontend Setup**

Step 1: Navigate to the Frontend Directory
```bash
cd frontend
```

Step 2: Install Dependencies
```bash
npm install
```

Step 3: Set up Environment Variables
1. In the frontend folder, create a file named `.env.local` .
2. Add the following environment variables in the .env file:
```bash
NEXT_PUBLIC_BACKEND_URL = your_backend_url
```
3. Replace the environment variables with your credentials.
4. Run the frontend server
```bash
npm run dev
```

## Future Improvements
- **User Authentication** : Allow users to save and track their quotes.
- **Admin Dashboard** : A panel to view and manage leads.
- **Enhanced UI/UX** : Improve animations, transitions, and accessibility.
- **Additional Financing Options** : Include more payment plans for users.


## Contact
For questions or collaboration opportunities, feel free to reach out!

- LinkedIn: https://www.linkedin.com/in/nurzarina-os/
- GitHub: https://github.com/Nurzarina
