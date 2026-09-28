# Dixit Luvani — Portfolio

A responsive, static portfolio for internship applications. It uses HTML, CSS, and a small JavaScript file. No packages, API keys, or build step are needed.

## Preview on your computer

In a terminal opened inside this folder:

```powershell
py -m http.server 5500
```

Open `http://localhost:5500`. Press `Ctrl+C` to stop the preview.

You can also open `index.html` directly from the extracted folder. Keep `styles.css`, `script.js`, `favicon.svg`, and the résumé PDF beside it. If the page appears as plain black text on a white background, those files are missing or the HTML was moved to a different folder.

## Deploy with Vercel

### 1. Create the GitHub repository

Extract the ZIP. On GitHub, create a new, empty repository named `dixit-portfolio` under `luvanidixit101`. Do not select **Add a README file**, because this project already includes one.

Open PowerShell **inside the extracted `dixit-portfolio` folder**, where `index.html` is visible, and run:

```powershell
git init
git branch -M main
git add .
git commit -m "Add internship portfolio"
git remote add origin https://github.com/luvanidixit101/dixit-portfolio.git
git push -u origin main
```

GitHub may ask you to sign in during the push. After it succeeds, confirm that `index.html` and `Dixit_Luvani_Resume.pdf` appear at the **repository root**. If you prefer the GitHub website, use **Add file → Upload files** and upload the *contents* of the extracted folder.

### 2. Import it into Vercel

1. In the Vercel dashboard, choose **Add New → Project** and import `luvanidixit101/dixit-portfolio`.
2. Use **Root Directory** `./` and **Framework Preset** `Other`.
3. Leave **Build Command** empty. Keep the default **Output Directory** for the project root, or enter `.` if asked for an explicit path. Select **Deploy**.
4. Open the resulting URL. Check the home page, the **Projects** and **Contact** links, and the résumé download.

If the deployed page appears unstyled, confirm `index.html` and `styles.css` are in the same deployed folder. The HTML uses relative asset paths so it also works when opened directly from the extracted folder.

When you edit the portfolio later, commit and push the changes to `main`; Vercel will deploy the updated commit from the connected repository.

Alternatively, from the project folder, after signing in to the Vercel CLI, run `vercel` and follow its prompts.

## Editing your details

- Change profile text, project descriptions, email, and GitHub links in `index.html`.
- Replace `Dixit_Luvani_Resume.pdf` with an updated PDF of the same filename.
- Change colors and layout in `styles.css`.
- Project buttons currently lead to the confirmed GitHub profile. If you want them to open each project directly, replace those two URLs with your public repository URLs.

The site uses a Google Fonts stylesheet when available and system fonts as a fallback. The entire site remains readable without that external font request.
