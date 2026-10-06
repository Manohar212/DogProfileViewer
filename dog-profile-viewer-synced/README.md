# Dog Profile Viewer

A React + Vite + Tailwind CSS implementation of the supplied Product Requirements document.

## Features

- Fetches a random dog automatically when the page opens
- Displays dog image
- Displays name
- Displays breed group
- Displays bred-for information
- Displays life span
- Displays temperament
- Displays height
- Displays weight
- Get Random Dog button
- Loading state
- Error state with retry
- Responsive mobile-first card
- Long text wrapping
- Axios + async/await
- React `useState`, `useEffect`, and component props

## Project structure

```text
dog-profile-viewer/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    └── components/
        ├── DogCard.jsx
        └── InfoItem.jsx
```

## Requirements

Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
```

## API

```text
https://api.freeapi.app/api/v1/public/dogs/dog/random
```
