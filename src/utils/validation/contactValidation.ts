import type { ContactFormData, ContactFormErrors } from "@/types/contact";

const FRENCH_PHONE_REGEX = /^(?:(?:\+|00)33|0)[1-9](?:\d{2}){4}$/;

export const validateContactForm = (
	data: ContactFormData,
): ContactFormErrors => {
	const errors: ContactFormErrors = {};

	const trimmedNom = data.nom.trim();
	if (!trimmedNom) {
		errors.nom = "Le nom est requis";
	} else if (trimmedNom.length < 2) {
		errors.nom = "Le nom doit contenir au moins 2 caractères";
	} else if (trimmedNom.length > 50) {
		errors.nom = "Le nom ne peut pas dépasser 50 caractères";
	}

	const trimmedPrénom = data.prénom.trim();
	if (!trimmedPrénom) {
		errors.prénom = "Le prénom est requis";
	} else if (trimmedPrénom.length < 2) {
		errors.prénom = "Le prénom doit contenir au moins 2 caractères";
	} else if (trimmedPrénom.length > 50) {
		errors.prénom = "Le prénom ne peut pas dépasser 50 caractères";
	}

	const normalizedPhone = data.téléphone.replace(/\s/g, "");
	if (!normalizedPhone) {
		errors.téléphone = "Le téléphone est requis";
	} else if (!FRENCH_PHONE_REGEX.test(normalizedPhone)) {
		errors.téléphone =
			"Format invalide. Ex: 06 12 34 56 78 ou +33 6 12 34 56 78";
	}

	const trimmedDescription = data.description.trim();
	if (!trimmedDescription) {
		errors.description = "La description est requise";
	} else if (trimmedDescription.length < 10) {
		errors.description = "La description doit contenir au moins 10 caractères";
	} else if (trimmedDescription.length > 1000) {
		errors.description = "La description ne peut pas dépasser 1000 caractères";
	}

	return errors;
};

export const sanitizeContactData = (data: ContactFormData): ContactFormData => {
	return {
		nom: data.nom.trim(),
		prénom: data.prénom.trim(),
		téléphone: data.téléphone.trim(),
		description: data.description.trim(),
	};
};
