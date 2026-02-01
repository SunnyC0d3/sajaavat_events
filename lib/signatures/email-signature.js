export const getEmailSignature = (
    logoUrl = process.env.NEXT_PUBLIC_SITE_URL + '/images/logo-3.png'
) => {
    return `
        <div style="background-color: #6a2929; padding: 40px;">
            <div style="padding-top: 20px; border-top: 2px solid #e8e1e1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td style="width: 60px; padding-right: 15px; vertical-align: top;">
                            <img 
                                src="${logoUrl}" 
                                alt="Sajaavat Events - Bespoke Event Decor" 
                                style="width: 85px; height: auto;"
                            >
                        </td>
                        <td style="vertical-align: top;">
                            <p style="color: #e8e1e1; margin: 0 0 4px; font-size: 16px; font-weight: 700;">
                                Sajaavat Events
                            </p>
                            <p style="color: #e8e1e1; margin: 0 0 10px; font-size: 12px; font-style: italic;">
                                Bespoke Event Decor Specialists
                            </p>
                            <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #e8e1e1;">
                                <a href="mailto:enquiry@sajaavat-events.com" style="color: #e8e1e1; text-decoration: none;">
                                    ✉️ enquiry@sajaavat-events.com
                                </a><br>
                                <a href="https://www.sajaavat-events.com" style="color: #e8e1e1; text-decoration: none;">
                                    🌐 www.sajaavat-events.com
                                </a>
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    `;
};
