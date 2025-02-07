![Output Screen image](OutputImage.png)


### **README.md**  

# 📧 NodeMailer Email Sender  

A simple Node.js application that sends emails using **Nodemailer** with Gmail authentication.

## 🚀 Features  
- Send emails using Gmail securely.  
- Supports **HTML templates** for colorful emails.  
- Uses **dotenv** for secure environment variables.  

## 🛠️ Installation  

1. Clone this repository:  
   ```sh
   git clone https://github.com/shafeeq777444/Node-Mailer-npm-.git
   ```
2. Navigate to the project directory:  
   ```sh
   cd NodeMailer
   ```
3. Install dependencies:  
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add:  
   ```
   EMAIL=your-email@gmail.com
   PASS=your-app-password
   ```

## 🔐 Setting Up an App Password  

1. Go to [Google Account Security](https://myaccount.google.com/security).  
2. Scroll down to the **Signing in to Google** section.  
3. Enable **2-Step Verification** if it's not enabled.  
4. After enabling, go back to **Signing in to Google** and click on **App Passwords**.  
5. Select **Mail** and **Other (custom name)**.  
6. Generate an **App Password** (Google will provide a 16-character password).  
7. Use this generated password instead of your regular password in the `.env` file.  

## 📩 Sending an Email  

1. Run the server:  
   ```sh
   node server.js
   ```
2. If successful, you should see:  
   ```
   Email sent: 250 OK
   ```

## 📝 Environment Variables  

- `EMAIL`: Your Gmail address  
- `PASS`: Your Gmail app password  

## 🏗️ Dependencies  
- [Node.js](https://nodejs.org/)  
- [Nodemailer](https://nodemailer.com/)  
- [Dotenv](https://www.npmjs.com/package/dotenv)  

## 👨‍💻 Author  
**Shafeeq Mohamed**  

---

