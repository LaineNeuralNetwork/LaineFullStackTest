# Contracts API with AI Assistant

A RESTful API for managing contracts with full CRUD operations and an AI-powered chat assistant for contract support and legal advice.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your OpenAI API configuration:
```bash
# OpenAI Configuration
OPENAI_API_KEY=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
OPENAI_BASE_URL=https://openrouter.ai/api/v1

# Server Configuration
SITE_URL=http://localhost:3000
SITE_NAME=Contract Generator
```

3. Start the server:
```bash
npm run dev
```

The server will run on `http://localhost:8080`

## API Endpoints

### AI Chat Assistant
- **POST** `/ai-chat` - Get AI-powered contract support and legal advice
- **Body:**
```json
{
  "message": "What should I include in a non-compete clause?"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "AI response generated successfully",
  "data": {
    "response": "A non-compete clause should include...",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

**Note:** The AI assistant is specifically trained to provide contract-related advice only. It will redirect users who ask about non-contract legal matters.

### Contracts

#### Get All Contracts
- **GET** `/contracts`
- **Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "contract_id",
      "name": "Contract Name",
      "description": "Contract Description",
      "status": "active",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "count": 1
}
```

#### Get Specific Contract
- **GET** `/contracts/:id`
- **Response:**
```json
{
  "success": true,
  "data": {
    "id": "contract_id",
    "name": "Contract Name",
    "description": "Contract Description",
    "status": "active",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Generate New Contract
- **POST** `/generate-contract`
- **Body:**
```json
{
  "clientName": "John Doe",
  "clientAddress": "123 Main St, City, State",
  "contractType": "Employment Agreement"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Contract generated successfully",
  "data": {
    "id": "generated_id",
    "clientName": "John Doe",
    "clientAddress": "123 Main St, City, State",
    "contractType": "Employment Agreement",
    "contractContent": "Generated contract content...",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Note:** This endpoint uses AI to generate contract content based on the provided parameters.

#### Update Contract (Full Update)
- **PUT** `/contracts/:id`
- **Body:**
```json
{
  "name": "Updated Contract Name",
  "description": "Updated Contract Description",
  "status": "active"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Contract updated successfully",
  "data": {
    "id": "contract_id",
    "name": "Updated Contract Name",
    "description": "Updated Contract Description",
    "status": "active",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Partially Update Contract
- **PATCH** `/contracts/:id`
- **Body:** (only include fields to update)
```json
{
  "status": "inactive"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Contract updated successfully",
  "data": {
    "id": "contract_id",
    "name": "Contract Name",
    "description": "Contract Description",
    "status": "inactive",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Delete Contract
- **DELETE** `/contracts/:id`
- **Response:**
```json
{
  "success": true,
  "message": "Contract deleted successfully",
  "data": {
    "id": "contract_id",
    "name": "Contract Name",
    "description": "Contract Description",
    "status": "active",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## Contract Types

- `Employment Agreement` - Employment contracts between companies and employees
- `Loan` - Loan agreements and financial contracts
- `Service Agreement` - Service contracts between businesses and clients

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

For validation errors:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name is required and must be a non-empty string",
    "Description is required and must be a non-empty string"
  ]
}
```

## Data Storage

Contracts are stored in `data.json` in the following format:
```json
{
  "contracts": [
    {
      "id": "contract_id",
      "clientName": "Client Name",
      "clientAddress": "Client Address",
      "contractType": "Employment Agreement",
      "contractContent": "Generated contract content...",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```
