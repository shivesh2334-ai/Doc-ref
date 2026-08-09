# Doctor Portal — Dr. Shivesh Kumar

A single-page site with: welcome banner, patient registration (name, mobile,
email), doctor profile, procedures list, blog links, YouTube channel link,
and a referral form that logs to Google Sheets and hands off to WhatsApp.

Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS, deployed on
Vercel (Mumbai region), data stored in Google Sheets via a service account.

---

## 1. Edit your details

Everything doctor-specific lives in one file: `lib/config.ts`.

- `whatsappNumber` — your WhatsApp number, country code + digits only, no
  `+` or spaces (e.g. `919999999999`).
- `youtubeChannelUrl` — your channel URL.
- `blogUrl` / `blogPosts` — link to an existing blog, or list a few posts
  directly.
- `photoUrl` — add your photo to `/public/doctor-photo.jpg` and it will
  show automatically (the layout gracefully hides it if missing).
- `procedures`, `referralReasons` — edit the lists as needed.

## 2. Set up the Google Sheet

1. Create a new Google Sheet (any name). You do **not** need to pre-create
   tabs — the app creates `Registrations` and `Referrals` tabs (with
   headers) automatically on first submission.
2. Copy the Sheet ID from its URL:
   `https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit`
3. In [Google Cloud Console](https://console.cloud.google.com/):
   - Create (or reuse) a project.
   - Enable the **Google Sheets API**.
   - Create a **Service Account** (IAM & Admin → Service Accounts).
   - Open the service account → **Keys** → **Add Key** → **JSON**. This
     downloads a JSON file containing `client_email` and `private_key`.
4. Share your Google Sheet with the service account's email address
   (the `client_email` value) as an **Editor**.

You'll use three values from that JSON file as environment variables —
see step 4.

## 3. Push to GitHub

From your iPad in Working Copy (or any Git client):

1. Create a new repository on GitHub, e.g. `doctor-portal`.
2. Add this project's files as the initial commit and push to `main`.

```bash
git init
git add .
git commit -m "Initial commit: doctor portal"
git branch -M main
git remote add origin https://github.com/shivesh2334-ai/doctor-portal.git
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub
   repo you just created.
2. Framework preset: Next.js (auto-detected). No build command changes
   needed.
3. Add these **Environment Variables** in the Vercel project settings
   (Settings → Environment Variables), for Production, Preview, and
   Development:

   | Name | Value |
   |---|---|
   | `GOOGLE_SERVICE_ACCOUNT_EMAIL` | the `client_email` from your JSON key |
   | `GOOGLE_PRIVATE_KEY` | the `private_key` from your JSON key, quotes included, `\n` left as literal `\n` |
   | `GOOGLE_SHEET_ID` | the Sheet ID from step 2 |

4. Deploy. The project is already pinned to the Mumbai (`bom1`) region via
   `vercel.json`, matching your other deployments.

## 5. Local development (optional)

```bash
npm install
cp .env.example .env.local   # fill in your real values
npm run dev
```

Visit `http://localhost:3000`.

---

## How the referral → WhatsApp flow works

When a referral is submitted, the app:
1. Saves the referral (patient name, referring doctor, reason, notes,
   timestamp) to the `Referrals` tab in your Google Sheet.
2. Opens WhatsApp Web/App in a new tab, pre-filled with a formatted
   message addressed to `whatsappNumber`, ready for the referrer to hit
   send.

No WhatsApp Business API or webhook is required — this uses the standard
`wa.me` deep link, so there's nothing extra to configure on the WhatsApp
side.
