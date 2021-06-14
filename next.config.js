module.exports = {
  env: {
    DB_URI:
      "mongodb+srv://hassan:hassan@shopit.qqjca.mongodb.net/shopit?retryWrites=true&w=majority",

    CLOUDINARY_CLOUD_NAME: "bokking",
    CLOUDINARY_API_KEY: "164785462551357",
    CLOUDINARY_SECRET_KEY: "tBSU9sIFbtt__YI4zCTxxWDWibU",

    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "fc8b2f0c806d97",
    SMTP_PASSWORD: "3c0dc821f37363",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
    SMTP_FROM_NAME: "BookiT",

    NEXTAUTH_URL: "https://bookitbyhassan.herokuapp.com/",
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};
