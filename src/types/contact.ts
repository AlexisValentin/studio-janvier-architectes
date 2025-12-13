export interface ContactFormData {
	nom: string;
	prénom: string;
	téléphone: string;
	description: string;
}

export interface ContactFormErrors {
	nom?: string;
	prénom?: string;
	téléphone?: string;
	description?: string;
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormState {
	data: ContactFormData;
	errors: ContactFormErrors;
	status: ContactFormStatus;
	message: string;
}

export interface ContactApiRequest {
	nom: string;
	prénom: string;
	téléphone: string;
	description: string;
}

export interface ContactApiSuccessResponse {
	success: true;
	message: string;
}

export interface ContactApiErrorResponse {
	success: false;
	message: string;
	errors?: Partial<Record<keyof ContactApiRequest, string>>;
}

export type ContactApiResponse =
	| ContactApiSuccessResponse
	| ContactApiErrorResponse;

export interface ContactEmailData {
	nom: string;
	prénom: string;
	téléphone: string;
	description: string;
}
