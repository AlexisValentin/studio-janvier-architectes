import { NextResponse } from "next/server";
import type {
	ContactApiErrorResponse,
	ContactApiRequest,
	ContactApiSuccessResponse,
} from "@/types/contact";
import { sendContactEmail } from "@/utils/email/sendContactEmail";
import {
	sanitizeContactData,
	validateContactForm,
} from "@/utils/validation/contactValidation";

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as ContactApiRequest;

		const sanitizedData = sanitizeContactData(body);

		const errors = validateContactForm(sanitizedData);
		if (Object.keys(errors).length > 0) {
			const errorResponse: ContactApiErrorResponse = {
				success: false,
				message: "Les données du formulaire sont invalides",
				errors,
			};
			return NextResponse.json(errorResponse, { status: 400 });
		}

		await sendContactEmail(sanitizedData);

		const successResponse: ContactApiSuccessResponse = {
			success: true,
			message:
				"Message envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
		};
		return NextResponse.json(successResponse, { status: 200 });
	} catch (error) {
		console.error("Contact form error:", error);
		const errorResponse: ContactApiErrorResponse = {
			success: false,
			message:
				"Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
		};
		return NextResponse.json(errorResponse, { status: 500 });
	}
}
