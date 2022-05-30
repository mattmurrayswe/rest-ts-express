# REST API - Financial Services

Example of REST API to consume Services from Financial Institutions.
## Tech Stack

**Server:** NodeJS, TypeScript, Express, Docker

## Architecture

### Layers
Server, Routes, Middlewares, Controllers, Services


### Directory architecture
The directory architecture is designed so Banks/Financial Institutions have multiple services in this API.

Ex.1: Bank A has Bank Slip Registering and Pix services;

Ex.2: Bank B has Bank Slip Registering and Hybrid Title services;

## Installation

### Premises:

```note
  You MUST have docker and docker-compose installed
```

Clone project:
```bash
  git clone <project> 
```

Navigate to the project directory:
```bash
  cd rest-ts-express
```

Build and run the container.
```bash
  docker-compose up --build
```

Make a request to check if it worked:
```bash
  curl http://<your-ip-address>:<PORT>/api-docs
```

## Techniques and Paradigms

SOLID Principles:

    'S': Single Responsibility Principle (In a couple cases, sacrificed some for a better code readability, but as an exception.)

    'O': Open/Closed Principle

Object Orientating:

    Inheritance

    Encapsulating

        All access modifier are carefully designed.

Design Patterns

    Facades

## Documentation

Every SERVICE ('/src/services/') has it's own README.md in its directory.

Example: '/src/services/FinancialInstitution/BankSlipRegistering/README.md' documents the 'POST /financial-institution/title/register' endpoint.

This README.md is the the DOCUMENTATION to the endpoint, it contains how to consume the service.

TODO: Swagger


## Maintenance 

Every time you make a change to a file, the container should be built again to reflect changes:

```bash
  docker-compose up --build
```