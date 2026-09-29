# Dixit Luvani — Portfolio

A responsive, static portfolio for internship applications. Built with HTML, CSS, and a small JavaScript file. The dark navy and purple design takes its one-page hero, animated role text, and timeline direction from the [portfolio tutorial](https://www.youtube.com/watch?v=oFnIe-RpkE4), then adapts the content for Dixit's projects and experience. The page adds gentle entrance and scroll animations, hover movement on projects and skills, and a reading progress line. Reduced-motion preferences are respected. There are no packages, API keys, or build steps. Project previews use CSS; the hero illustration is a local SVG.

## Projects featured

- [ToolShare](https://github.com/luvanidixit101/toolshare-microservices) — React and Spring Boot tool sharing platform.
- [FleetFlow](https://github.com/luvanidixit101/odoo-fleetflow) — Django fleet operations team project.
- [Smart Attendance Tracker](https://github.com/luvanidixit101/GVP_AI_Hackathon_2026) — Django student attendance and marks project.
- [Jungle Book](https://github.com/luvanidixit101/junglebook_PHP) — PHP and MySQL environmental NGO website.

Each project card links directly to its GitHub repository. Descriptions reflect the public repositories; the attendance project does not claim to use a trained AI model.

## Preview locally

Extract the ZIP. In a terminal opened inside the extracted `dixit-portfolio` folder, run:

```powershell
py -m http.server 5500
```

Open `http://localhost:5500`. Press `Ctrl+C` to stop the server. You can also open `index.html` directly from the extracted folder. Keep `styles.css`, `animations.css`, `script.js`, `developer.svg`, `favicon.svg`, and the résumé PDF beside it. If the page looks unstyled, check that `index.html` and both CSS files are in the same folder.

## Update the existing GitHub and Vercel site

The portfolio repository is [luvanidixit101/Dixit-Portfolio](https://github.com/luvanidixit101/Dixit-Portfolio). On GitHub, open the repository and choose **Add file → Upload files**. Upload the *contents* of the extracted folder to the repository root, replacing matching files, and commit the changes. In particular, `index.html` and `styles.css` must be together at the root.

If the Vercel project is connected to this GitHub repository, pushing to its production branch will trigger a new deployment. After it finishes, open [the current portfolio](https://dixit-portfolio-pi.vercel.app/) and check all four project links, the navigation, and the résumé download.

For a new Vercel import, choose **Add New → Project**, import `luvanidixit101/Dixit-Portfolio`, set **Root Directory** to `./` and **Framework Preset** to `Other`, and leave **Build Command** empty. Keep the default output directory for the project root, or enter `.` if an explicit path is required.

## Make it yours

- Edit your introduction, About section, project descriptions, email, and links in `index.html`.
- Replace `Dixit_Luvani_Resume.pdf` with an updated PDF of the same filename.
- Change colors and layout in `styles.css`, and movement in `animations.css`.

The site uses Google Fonts when available and system fonts as a fallback.
