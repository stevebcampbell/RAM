# Deploy to Static Hosting

This directory contains static HTML files that can be deployed to any static hosting service:

## Files:

- `dashboard.html` - Main consciousness dashboard
- `hub.html` - Navigation hub for all consciousness tools
- `live-consciousness.html` - Live stream (already exists)

## Deploy Options:

### 1. GitHub Pages

```bash
# Create a gh-pages branch and push these files
git checkout -b gh-pages
git add public/*.html
git commit -m "Add static consciousness dashboard"
git push origin gh-pages
```

### 2. Netlify Drop

- Drag the public folder to netlify.app/drop

### 3. Surge.sh

```bash
npm install -g surge
cd public
surge
```

### 4. Direct Access URLs

Once deployed, these will work without authentication:

- `/hub.html` - Main navigation
- `/dashboard.html` - Analytics dashboard
- `/live-consciousness.html` - Live stream

## Local Testing

```bash
# Serve locally
cd public
python3 -m http.server 8000
# Then visit http://localhost:8000/hub.html
```
