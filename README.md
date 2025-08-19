# Contract Generator App (Coding Challenge)

A simple full-stack application that generates contracts using OpenAI API and manages them with basic CRUD operations.

## Features

- **Contract Generation**: Generate contracts using OpenAI API for 3 types:
  - Employment Agreement
  - Loan
  - Service Agreement
- **Contract Management**: View, update, and delete generated contracts
- **AI Chat Assistant**: AI-powered chat interface for contract support and legal advice
- **Responsive Design**: Clean, modern UI that works on all devices

## Tech Stack

### Backend
- Node.js with Express
- TypeScript
- OpenAI API integration
- JSON file storage (data.json)

### Frontend
- React with TypeScript
- Modern CSS with responsive design
- Fetch API for backend communication

## Setup Instructions

### 1. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
OPENAI_API_KEY=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
OPENAI_BASE_URL=https://openrouter.ai/api/v1
SITE_URL=http://localhost:3000
SITE_NAME=Contract Generator
```

**Important**: Replace `OPENAI_API_KEY` with your actual OpenAI API key.

### 2. Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file in the client directory:
```env
REACT_APP_OPENAI_API_KEY=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
```

### 3. Running the Application

#### Start the Backend Server
```bash
cd server
npm run dev
```

The server will run on `http://localhost:8080`

#### Start the Frontend Client
```bash
cd client
npm start
```

The client will run on `http://localhost:3000`

## API Endpoints

- `POST /generate-contract` - Generate a new contract
- `POST /ai-chat` - AI assistant for contract support and advice
- `GET /contracts` - Get all contracts
- `GET /contracts/:id` - Get a specific contract
- `PUT /contracts/:id` - Update a contract
- `DELETE /contracts/:id` - Delete a contract

## Usage

1. **Generate Contract**: Fill out the form with client name, address, and select contract type
2. **View Contracts**: All generated contracts are displayed in the right panel
3. **Delete Contracts**: Use the delete button on each contract card
4. **AI Chat**: Click "Show Chat" to access the AI legal assistant for contract support and advice

## Contract Structure

Each contract contains:
- Unique ID
- Client Name
- Client Address
- Contract Type
- Generated Contract Content
- Creation and Update timestamps

## Data Storage

Contracts are stored in `server/data.json` as a simple JSON file. In a production environment, you'd want to use a proper database.

## Notes

- The AI chat assistant is specifically trained to provide contract-related advice only
- OpenAI API integration is configured but requires a valid API key
- The app includes fallback content generation if OpenAI API fails
- All data is stored locally in JSON format for simplicity

## Troubleshooting

- **OpenAI API Errors**: Check your API key and ensure you have sufficient credits
- **Server Connection Issues**: Verify the backend is running on port 8080
- **CORS Issues**: The frontend is configured to proxy requests to the backend

## Future Enhancements

- Database integration (PostgreSQL, MongoDB)
- User authentication
- Contract templates
- PDF export functionality
- Real-time collaboration
- Advanced AI features