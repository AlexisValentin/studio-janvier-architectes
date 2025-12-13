"use server";

import { Resend } from "resend";
import type { ContactEmailData } from "@/types/contact";

export const sendContactEmail = async (data: ContactEmailData) => {
	if (!process.env.RESEND_API_KEY) {
		throw new Error("RESEND_API_KEY is not configured");
	}

	const resend = new Resend(process.env.RESEND_API_KEY);

	try {
		const { data: emailData, error } = await resend.emails.send({
			from: process.env.CONTACT_EMAIL_FROM!,
			to: process.env.CONTACT_EMAIL_TO!,
			subject: `Nouveau message de ${data.prénom} ${data.nom}`,
			html: `
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Nouveau message de contact</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 2rem;">
	<h1 style="font-size: 1.5rem; font-weight: 300; letter-spacing: 0.05em; margin-bottom: 2rem; border-bottom: 1px solid #e5e5e5; padding-bottom: 1rem;">
		Nouveau message de contact
	</h1>

	<div style="margin-bottom: 1.5rem;">
		<p style="margin: 0.5rem 0; font-weight: 300;">
			<strong style="opacity: 0.5; font-weight: 300;">Nom :</strong> ${data.nom}
		</p>
		<p style="margin: 0.5rem 0; font-weight: 300;">
			<strong style="opacity: 0.5; font-weight: 300;">Prénom :</strong> ${data.prénom}
		</p>
		<p style="margin: 0.5rem 0; font-weight: 300;">
			<strong style="opacity: 0.5; font-weight: 300;">Téléphone :</strong> ${data.téléphone}
		</p>
	</div>

	<div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #e5e5e5;">
		<p style="margin: 0 0 0.5rem 0; font-weight: 300; opacity: 0.5;">Message :</p>
		<p style="margin: 0; font-weight: 300; white-space: pre-wrap;">${data.description.replace(/\n/g, "<br>")}</p>
	</div>

	<div style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #e5e5e5; font-size: 0.875rem; opacity: 0.5; font-weight: 300;">
		<p style="margin: 0;">Message envoyé depuis le formulaire de contact de Studio Janvier Architectes</p>
	</div>
</body>
</html>
			`,
		});

		if (error) {
			throw new Error(error.message);
		}

		return emailData;
	} catch (error) {
		console.error("Email send error:", error);
		throw error;
	}
};
