import { getAccessToken } from './email-auth.js';

export async function sendEmailViaGraph({ to, subject, html, replyTo }) {
    try {
        const accessToken = await getAccessToken();

        const email = {
            message: {
                subject,
                body: {
                    contentType: 'HTML',
                    content: html,
                },
                toRecipients: [
                    {
                        emailAddress: {
                            address: to,
                        },
                    },
                ],
                ...(replyTo && {
                    replyTo: [
                        {
                            emailAddress: {
                                address: replyTo,
                            },
                        },
                    ],
                }),
            },
        };

        const response = await fetch(
            `https://graph.microsoft.com/v1.0/users/${process.env.BUSINESS_EMAIL_ADDRESS}/sendMail`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(email),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Graph API error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        return { success: true, messageId: `graph-api-${Date.now()}` };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function sendEmail({ to, subject, html, text, replyTo }) {
    return await sendEmailViaGraph({ to, subject, html, replyTo });
}