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
            subject: "SIH 2026 Review Completed – Certificate Collection",
            text: "🎉Congratulations! Your team's status is now completed. Please collect your certificates from the panel at U108 room no.",
            html: `
                <div style="font-family: sans-serif; color: #333;">
                    <h2>Dear Participants,
                    <br/>
                    Congratulations! 🎉
                    </h2>
                    <p>Your team has successfully completed the SIH 2026 review.</p>
                    <p>Please <strong>Please collect your SIH 2026 participation certificates from the IIC team at U108.</strong></p>
                    <br/>
                    <p>📍 Venue: U108</p>
                    <p>📄 Certificates: SIH 2026</p>
                    <p><strong>Carry this experience forward, keep learning, and continue taking on new challenges.</strong></p>
                    <p>Best regards,<br/>IIC Web Team</p>
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
};
