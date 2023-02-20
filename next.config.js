/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: "AIzaSyB2BUkq7L9liWQdUEz67RfJRpSQDhzDUUU",
    AUTH_DOMAIN: "project-notes-backend.firebaseapp.com",
    PROJECT_ID: "project-notes-backend",
    STORAGE_BUCKET: "project-notes-backend.appspot.com",
    MESSAGING_SENDER_ID: "762928031475",
    APP_ID: "1:762928031475:web:cc4191ba3b77a882173986",
    MEASUREMENT_ID: "G-77X8LDTX1Z"
  }
}

module.exports = nextConfig