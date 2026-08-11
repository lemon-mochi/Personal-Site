# Gen Blaine — Personal Website (React)

A modular React rewrite of the original static site, built with Vite.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

## Adding images

The original `logos/` folder and project screenshots (`img_func1.PNG`, `conv1.PNG`, etc.)
weren't part of the upload, so they're not included here. Vite serves anything in `public/`
at the site root, so:

1. Copy `logos/` folder into `public/logos/`.
2. Copy project screenshots into `public/` (or a `public/screenshots/` folder — just
   update the paths in `src/data/siteData.js` to match).

## Project structure

```
src/
  data/siteData.js       # ALL editable content lives here: nav links, social links,
                          # about text, skills, projects, education, footer
  hooks/
    useTheme.js           # dark/light mode state
    useScrollVisibility.js # back-to-top button visibility
    useLightbox.js        # shared lightbox open/close/escape-key logic
  components/
    Header.jsx            # nav + social icons + theme toggle
    Home.jsx
    About.jsx
    Skills.jsx
    Projects.jsx          # loops over `projects` data, renders one shared Lightbox
    ProjectEntry.jsx       # a single project's link/description/gallery
    ImageGallery.jsx       # thumbnail grid, opens images in the lightbox
    Lightbox.jsx           # single shared full-screen image viewer
    Education.jsx
    Footer.jsx
    BackToTop.jsx
  App.jsx                  # composes all sections
  styles.css
```

## How to add things later

- **New nav link:** add an entry to `navLinks` in `siteData.js`, and a matching
  `<section id="...">` somewhere (or a new component).
- **New social/contact icon:** add an entry to `socialLinks`.
- **New skill:** add it to the right group's `items` array, or add a whole new group.
- **New project:** add an object to the `projects` array. Include a `gallery` array of
  image paths if you want a screenshot gallery — it's optional.
- **New page section:** create a component in `components/`, import it, and drop it into
  `App.jsx`.

Dark mode is handled with a single `.dark-mode` class on the root `<div>` plus CSS
descendant selectors in `styles.css`, so any new content you add automatically picks up
the right colors — no need to manually toggle classes on new elements.
