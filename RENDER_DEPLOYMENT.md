# Render Service Deployment Guide

This guide provides step-by-step instructions for deploying the **Big Sky Mobile RV Repair** website template to your **Render** account.

Render provides fast, continuous deployment directly from GitHub. When you push updates to your GitHub repository, Render automatically rebuilds and deploys the new version within seconds.

---

## Step 1: Commit and Push Code to GitHub

1. Open your terminal or Git client in the project directory:
   ```bash
   git add .
   git commit -m "Initial Big Sky Mobile RV Repair website template"
   ```
2. Push the code to your GitHub repository:
   ```bash
   git push origin main
   ```
   *(If you haven't linked a GitHub remote repository yet, create a new public or private repo on GitHub and run `git remote add origin https://github.com/YOUR_USERNAME/Jons_RV_Repair_Website.git`)*

---

## Step 2: Create a New Static Site on Render

1. Log in to your **[Render Dashboard](https://dashboard.render.com/)**.
2. Click the **"New +"** button in the top right and select **"Static Site"**.
3. Under **"Connect a repository"**, select your GitHub account and choose `Jons_RV_Repair_Website`.
   *(If your repository isn't listed, click "Connect account" or grant access to the repo).*

---

## Step 3: Configure Build & Deployment Settings

On the configuration screen, enter the following details:

| Setting | Value |
| :--- | :--- |
| **Name** | `big-sky-mobile-rv-repair` *(or your preferred app name)* |
| **Region** | Oregon (US West) *(closest to Montana for fast response)* |
| **Branch** | `main` *(or `master`)* |
| **Root Directory** | *(leave blank)* |
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |

---

## Step 4: Deploy & Verify

1. Click **"Create Static Site"**.
2. Render will run `npm install` and `npm run build`, compiling the site into the `dist` directory.
3. Once completed (takes ~30-45 seconds), Render will provide your live URL (e.g. `https://big-sky-mobile-rv-repair.onrender.com`).

---

## (Optional) Custom Domain & Production Contact Info

- **Custom Domain**: In the Render Dashboard under **Settings -> Custom Domains**, you can attach your custom domain (e.g., `www.bigskymobilerv.com`) for free with automatic SSL certificates.
- **Updating Contact Info**: When ready to replace placeholder phone numbers `(406) 555-0199` with real business numbers, simply edit `index.html` and push to GitHub. Render will update the site automatically.
