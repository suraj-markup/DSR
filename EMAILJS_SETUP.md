# EmailJS Setup Instructions

This project uses EmailJS to send email notifications when users submit forms. Follow these steps to set it up:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**
service_swhmlid

## Step 3: Create Email Templates

### Template 1: Quote Form Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:
   ```
   Subject: New Quote Request from {{from_name}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{from_phone}}
   From: {{from_location}}
   To: {{to_location}}
   Moving Date: {{moving_date}}
   Service Type: {{service_type}}
   ```
4. Copy the **Template ID**
template_4d4x9eb
### Template 2: Contact Form Template
1. Create another template
2. Use this structure:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{from_phone}}
   Service Type: {{service_type}}
   Message: {{message}}
   ```
3. Copy the **Template ID**
template_7izumlz

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Configure Environment Variables
1. Create a `.env` file in the root directory
2. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_QUOTE_TEMPLATE_ID=your_quote_template_id_here
   VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Replace the placeholder values with your actual IDs

## Step 6: Restart Development Server
After adding environment variables, restart your dev server:
```bash
npm run dev
```

## Testing
1. Fill out the Quote Form and submit
2. Fill out the Contact Form and submit
3. Check your email inbox for the notifications

## Troubleshooting

### Gmail API: Request had insufficient authentication scopes (Error 412)

If you're getting this error, it means your Gmail service in EmailJS needs proper OAuth scopes. Here's how to fix it:

**Option 1: Reconnect Gmail Service with Proper Scopes**
1. Go to EmailJS Dashboard → "Email Services"
2. Find your Gmail service
3. Click "Edit" or "Reconnect"
4. Make sure you grant **all requested permissions** when Google asks for access
5. Specifically ensure these scopes are granted:
   - `https://www.googleapis.com/auth/gmail.send`
   - `https://www.googleapis.com/auth/userinfo.email`
6. Complete the OAuth flow fully
7. Test again

**Option 2: Use a Different Email Service (Recommended)**
If Gmail continues to have issues, try these alternatives:

**A. Use Outlook/Office 365:**
1. Delete the Gmail service
2. Add new service → Choose "Outlook"
3. Sign in with your Microsoft account
4. This usually has fewer scope issues

**B. Use Custom SMTP:**
1. Add new service → Choose "Custom SMTP"
2. Use your email provider's SMTP settings:
   - **Gmail SMTP:**
     - Host: `smtp.gmail.com`
     - Port: `587`
     - Secure: `TLS`
     - User: Your Gmail address
     - Password: Use an **App Password** (not your regular password)
     - To get App Password: Google Account → Security → 2-Step Verification → App Passwords

**C. Use SendGrid (Free tier available):**
1. Sign up at https://sendgrid.com/
2. Create an API key
3. In EmailJS, add service → Choose "SendGrid"
4. Enter your API key

### Other Common Issues:
- Make sure all environment variables are set correctly
- Check that template variable names match (case-sensitive)
- Verify your email service is connected and active
- Check browser console for any error messages
- Restart your dev server after changing environment variables


