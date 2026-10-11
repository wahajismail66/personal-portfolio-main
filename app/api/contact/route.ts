import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = 'force-static';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER || "wahajismail66@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "yrdo nvvu wpna bgjt";

    // Send email via Nodemailer configured for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: smtpUser,
      to: process.env.CONTACT_EMAIL || smtpUser,
      subject: `New Contact Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              background-color: #f9fafb;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            .header {
              background-color: #4f46e5;
              padding: 24px 32px;
              text-align: center;
            }
            .header h1 {
              color: #ffffff;
              margin: 0;
              font-size: 24px;
              font-weight: 600;
              letter-spacing: 0.5px;
            }
            .content {
              padding: 32px;
            }
            .field-row {
              margin-bottom: 24px;
              padding-bottom: 24px;
              border-bottom: 1px solid #e5e7eb;
            }
            .field-row:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .label {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #6b7280;
              font-weight: 600;
              margin-bottom: 8px;
            }
            .value {
              font-size: 16px;
              color: #111827;
              margin: 0;
            }
            .message-box {
              background-color: #f3f4f6;
              padding: 20px;
              border-radius: 6px;
              font-size: 15px;
              color: #374151;
              white-space: pre-wrap;
              border: 1px solid #e5e7eb;
              margin-top: 12px;
            }
            .footer {
              background-color: #f9fafb;
              padding: 16px;
              text-align: center;
              font-size: 12px;
              color: #9ca3af;
              border-top: 1px solid #e5e7eb;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Request</h1>
            </div>
            
            <div class="content">
              <div class="field-row">
                <div class="label">Sender Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field-row">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field-row">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>

            <div class="footer">
              This message was sent securely from your portfolio contact form.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    if (smtpUser && smtpPass) {
      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 201 });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}
