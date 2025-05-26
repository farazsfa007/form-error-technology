# Lead Generation System with React, Node.js, and n8n Workflow Automation

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Setup Instructions](#setup-instructions)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Backend Setup (Node.js/Express)](#2-backend-setup-nodejsexpress)
  - [3. Frontend Setup (React.js)](#3-frontend-setup-reactjs)
  - [4. n8n Workflow Setup](#4-n8n-workflow-setup)
  - [5. Environment Variables](#5-environment-variables)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Extending the System](#extending-the-system)
- [Video Walkthrough](#video-walkthrough)
- [Submission Checklist](#submission-checklist)
- [License](#license)

---

## Project Overview

This project is a simple yet robust **lead generation system** consisting of:
- A React.js frontend form for collecting leads.
- A Node.js (Express) backend API for validating and forwarding leads.
- An n8n workflow for automating email notifications and optional lead storage.

The system is designed for easy deployment and extension, making it suitable for startups and businesses looking to automate their lead collection and notification process.

---

## Features

- **Lead Form:** Collects Name, Email (required), Company, and Message.
- **Client-side Validation:** Ensures required fields and valid email format.
- **API Backend:** Receives, validates, and forwards leads to n8n.
- **n8n Automation:** Sends email notifications and can store leads in Google Sheets, Airtable, or a database.
- **Easy Deployment:** Deployable on Vercel/Netlify (frontend), Heroku/Render (backend), and n8n Cloud or local.

---

## Tech Stack

- **Frontend:** React.js, fetch API
- **Backend:** Node.js, Express, node-fetch
- **Automation:** n8n (cloud or self-hosted)
- **Email:** SendGrid, Mailgun, or SMTP (via n8n)
- **Optional Storage:** Google Sheets, Airtable, MySQL (via n8n)

---

## Architecture

