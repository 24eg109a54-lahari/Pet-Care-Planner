# 🐾 Pet Care Planner

Pet Care Planner is a web application designed to help pet owners track their pets' daily care routines, medical history, vaccinations, medicines, reminders, health observations, and lost pet details.

The project is cleanly separated into two distinct layers:
- **`Frontend/`**: Client-side multi-page application powered by Vite, HTML5, CSS3, and JavaScript.
- **`Backend/`**: Modular Node.js REST API with dedicated routes, controllers, models, and JSON data persistence.

---

## 📁 Project Architecture

```
pet-care-planner/
│
├── Frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── icons.svg
│   │   └── images/
│   │       ├── cat.jpg
│   │       ├── dog.jpg
│   │       ├── petbanner.jpg
│   │       └── petcare.jpg
│   ├── src/
│   │   ├── assets/
│   │   ├── auth.js
│   │   ├── counter.ts
│   │   ├── main.js
│   │   └── style.css
│   ├── add-lost-pet.html
│   ├── add-pet.html
│   ├── add-reminder.html
│   ├── add-task.html
│   ├── add-vaccination.html
│   ├── ai-assistant.html
│   ├── breed-info.html
│   ├── care.html
│   ├── health.html
│   ├── index.html
│   ├── medicine.html
│   ├── profile.html
│   ├── storage.js
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.js
│
├── Backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── healthController.js
│   │   ├── lostPetController.js
│   │   ├── medicineController.js
│   │   ├── petController.js
│   │   ├── reminderController.js
│   │   ├── taskController.js
│   │   └── vaccinationController.js
│   ├── models/
│   │   ├── HealthRecord.js
│   │   ├── LostPet.js
│   │   ├── Medicine.js
│   │   ├── Pet.js
│   │   ├── Reminder.js
│   │   ├── Task.js
│   │   ├── User.js
│   │   └── Vaccination.js
│   ├── routes/
│   │   └── apiRoutes.js
│   ├── data/
│   │   └── database.json
│   ├── package.json
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm`

---

### 🎨 Frontend

The frontend is a multi-page web application featuring responsive dashboard navigation, pet profile management, daily checklists, vaccination trackers, medication logs, health observations, and an interactive AI assistant.

#### How to start the Frontend:

1. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

#### Build for Production:
```bash
cd Frontend
npm run build
```

---

### ⚙️ Backend

The backend provides a clean RESTful API with CORS enabled, JSON data persistence, and organized controller-model architecture.

#### How to start the Backend:

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Start the server:
   ```bash
   npm start
   ```
   Or run in development watch mode:
   ```bash
   npm run dev
   ```
3. The server starts at `http://localhost:5000`. You can verify health status at:
   ```
   http://localhost:5000/api/status
   ```
   The root `npm start` command also serves the built frontend and loads database settings from `Backend/.env`.

---

### 📦 Convenient Root Commands

From the root project directory (`pet-care-planner/`), you can use:

| Command | Action |
|---------|--------|
| `npm run build` | Installs backend and frontend dependencies and builds the frontend bundle |
| `npm start` | Starts the unified production server (serves Frontend & Backend API) |
| `npm run dev:frontend` | Starts Vite development server for the Frontend |
| `npm run dev:backend` | Starts the Backend REST server with live reload |
| `npm run build:frontend` | Builds production bundle for all Frontend pages |
| `npm run start:backend` | Starts the Backend server |

---

## 🚀 Deploying to Render

This project is fully configured for zero-configuration, seamless deployment on [Render](https://render.com).

### Method 1: Using Render Blueprint (Automatic & Recommended)
1. Push your project to **GitHub**.
2. Go to your [Render Dashboard](https://dashboard.render.com/) and click **New +** → **Blueprint**.
3. Select your repository.
4. Render will automatically read [`render.yaml`](file:///d:/projects/Pet%20care%20planner/pet-care-planner/render.yaml) and configure the web service with:
   - **Environment**: Node
   - **Root Directory**: repository root (`.`)
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Health Check Path**: `/api/status`
5. Click **Apply** to deploy!

### Method 2: Manual Web Service Setup
1. On Render, click **New +** → **Web Service**.
2. Connect your repository.
3. Configure settings:
   - **Name**: `pet-care-planner`
   - **Language**: `Node`
   - **Root Directory**: repository root (leave blank in Render; do not set it to `Backend`)
   - **Branch**: `main` (or your active branch)
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
4. Click **Create Web Service**.


## 📡 Backend API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/status` | Server health check and status |
| `POST` | `/api/auth/register` | Register new user account |
| `POST` | `/api/auth/login` | Authenticate user account |
| `GET` | `/api/pets` | Retrieve all pets |
| `POST` | `/api/pets` | Create a new pet record |
| `GET` | `/api/pets/:id` | Retrieve pet by ID |
| `DELETE` | `/api/pets/:id` | Delete pet record |
| `GET` | `/api/tasks` | Retrieve daily care tasks |
| `POST` | `/api/tasks` | Create a new care task |
| `DELETE` | `/api/tasks/:id` | Delete task by ID |
| `GET` | `/api/vaccinations` | Retrieve all vaccination records |
| `POST` | `/api/vaccinations` | Record a new vaccination |
| `DELETE` | `/api/vaccinations/:id`| Delete vaccination record |
| `GET` | `/api/reminders` | Retrieve smart reminders |
| `POST` | `/api/reminders` | Create reminder |
| `DELETE` | `/api/reminders/:id`| Delete reminder by ID |
| `GET` | `/api/medicines` | Retrieve active medicines |
| `POST` | `/api/medicines` | Add medication record |
| `DELETE` | `/api/medicines/:id`| Delete medication record |
| `GET` | `/api/health` | Retrieve pet health logs |
| `POST` | `/api/health` | Add pet health log |
| `DELETE` | `/api/health/:id` | Delete health log entry |
| `GET` | `/api/lost-pets` | Retrieve lost pet reports |
| `POST` | `/api/lost-pets` | Submit lost pet report |
| `DELETE` | `/api/lost-pets/:id`| Delete lost pet report |

---

## 🛡️ Functional & Visual Integrity

- **100% Visual Consistency**: No styles, colors, layouts, fonts, animations, or DOM elements were modified. The frontend visuals and styling remain identical to the original implementation.
- **Client-Side Storage**: All `localStorage` helpers (`storage.js`) and inline form event listeners remain fully functional.
- **Path Resolution**: All relative links (`add-pet.html`, `profile.html`, etc.) and asset paths (`/images/*`) resolve seamlessly.
