# Doc-ref

A single-page doctor portal built with [Next.js](https://nextjs.org/) (App Router) and Tailwind CSS. It showcases a cardiologist's profile, procedures, and blog posts, and collects patient registrations and doctor referrals directly into a Google Sheet via a service account.

## Features

- **Landing page** with navbar, hero section, doctor profile, procedures list, and blog highlights.
- **Patient registration form** — submits name, mobile number, and email.
- **Doctor referral form** — submits patient name, referring doctor, reason, and notes.
- Both forms write to separate tabs (`Registrations` and `Referrals`) in a configured Google Sheet, creating the header row automatically on first use.
- Styled with Tailwind CSS using custom brand colors and fonts (Fraunces + Inter via `next/font`).

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router, Route Handlers)
- [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [googleapis](https://www.npmjs.com/package/googleapis) for Google Sheets integration
- [lucide-react](https://lucide.dev/) for icons
- Deployed on [Vercel](https://vercel.com/)

## Project Structure

```
app/
  api/
    register/route.ts   # POST handler for patient registrations
    referral/route.ts   # POST handler for doctor referrals
  layout.tsx             # Root layout, fonts, and metadata
  page.tsx                # Home page composition
  globals.css              # Global styles
components/               # UI components (Navbar, Hero, forms, etc.)
lib/
  config.ts               # Doctor details, procedures, and blog content
  googleSheets.ts          # Google Sheets API helper (appendRow)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Google Cloud service account with access to the Google Sheets API and a target Google Sheet shared with that service account's email

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your Google service account credentials:

```bash
cp .env.example .env.local
```

| Variable | Description |
| --- | --- |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | The client email of your Google service account. |
| `GOOGLE_PRIVATE_KEY` | The private key for the service account (keep the `\n` escape sequences). |
| `GOOGLE_SHEET_ID` | The ID of the Google Sheet to write registrations and referrals to (found in the sheet's URL). |

Make sure the target Google Sheet is shared with the service account email with **Editor** access.

### Customize Doctor Details

Edit `lib/config.ts` to update the doctor's name, credentials, clinic, bio, photo, WhatsApp number, YouTube channel, blog URL, procedures list, and blog posts.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build & Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Deployment

This project includes a `vercel.json` configuration and is ready to deploy on [Vercel](https://vercel.com/). Remember to configure the same environment variables (`GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`) in your Vercel project settings.
