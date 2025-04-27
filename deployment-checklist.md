# Deployment Checklist for Hostinger

## Before Upload
- [x] Run `npm run build`
- [x] Verify `.htaccess` file is in the `dist` folder
- [ ] Check that all environment variables are set up

## Hostinger Setup
1. Log in to Hostinger Control Panel
2. Go to "Hosting" → Select your hosting plan
3. Upload files:
   - Go to "File Manager"
   - Navigate to `public_html`
   - Upload all contents from your local `dist` folder

## Environment Variables
Set these in Hostinger's control panel (Website → Environment Variables):
```env
VITE_SUPABASE_URL=https://jtbpodmjfvseyfvzzqjd.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0YnBvZG1qZnZzZXlmdnpzcWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNzQ5NTIsImV4cCI6MjA1OTk1MDk1Mn0.-o0kCNIQ6qJ3R7115V8EiX7VmpFMmQPxLc_oMlja5b0
```

## After Upload
1. Test the website:
   - Check if the home page loads
   - Test user registration/login
   - Test product management
   - Verify Supabase connection
2. Check for any console errors
3. Test on mobile devices

## Troubleshooting
If you encounter issues:
1. Check browser console for errors
2. Verify `.htaccess` is properly uploaded
3. Ensure environment variables are set
4. Check if Supabase is accessible from your domain

## Important Notes
- The site uses Supabase for database and authentication
- All API requests should work through CORS
- The site is a Single Page Application (SPA)
- Keep your Supabase credentials secure 