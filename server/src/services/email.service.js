import nodemailer from "nodemailer";

export const sendCertificateEmail = async (teamLeadEmail) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: process.env.SMTP_PORT || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: teamLeadEmail,
            subject: "Collect Your Participants Certificate - SIH2026",
            text: "collect your participants certificate from the pr panel at room rom u-108",
            html: "<p>collect your participants certificate from the pr panel at room rom u-108</p>",
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
};
