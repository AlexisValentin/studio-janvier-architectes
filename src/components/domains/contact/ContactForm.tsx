"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import type {
	ContactApiResponse,
	ContactFormData,
	ContactFormErrors,
	ContactFormStatus,
} from "@/types/contact";
import { validateContactForm } from "@/utils/validation/contactValidation";

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<ContactFormData>({
		nom: "",
		prénom: "",
		téléphone: "",
		description: "",
	});

	const [errors, setErrors] = useState<ContactFormErrors>({});
	const [status, setStatus] = useState<ContactFormStatus>("idle");
	const [message, setMessage] = useState("");

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name as keyof ContactFormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const validationErrors = validateContactForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setStatus("submitting");
		setMessage("");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = (await response.json()) as ContactApiResponse;

			if (!response.ok) {
				if (data.success === false && data.errors) {
					setErrors(data.errors);
					setStatus("error");
					setMessage(data.message);
				} else {
					setStatus("error");
					setMessage(
						data.success === false
							? data.message
							: "Une erreur est survenue lors de l'envoi de votre message.",
					);
				}
				return;
			}

			setStatus("success");
			setMessage(data.message);
			setFormData({
				nom: "",
				prénom: "",
				téléphone: "",
				description: "",
			});
			setErrors({});

			setTimeout(() => {
				setStatus("idle");
				setMessage("");
			}, 5000);
		} catch (error) {
			console.error("Form submission error:", error);
			setStatus("error");
			setMessage(
				"Une erreur de connexion est survenue. Veuillez vérifier votre connexion et réessayer.",
			);
		}
	};

	const baseInputClasses =
		"w-full px-4 py-3 text-sm font-light border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 transition-colors";
	const errorInputClasses = "border-red-300 focus:border-red-400";
	const disabledInputClasses = "bg-gray-50 cursor-not-allowed opacity-60";

	const getInputClasses = (fieldName: keyof ContactFormErrors) => {
		const classes = [baseInputClasses];
		if (errors[fieldName]) classes.push(errorInputClasses);
		if (status === "submitting") classes.push(disabledInputClasses);
		return classes.join(" ");
	};

	return (
		<div>
			<h2 className="mb-8 text-lg font-light tracking-wider">
				Envoyez-nous un message
			</h2>

			<form onSubmit={handleSubmit} className="space-y-6" noValidate>
				<div>
					<label
						htmlFor="nom"
						className="block text-sm font-light tracking-wider mb-2 opacity-50"
					>
						NOM *
					</label>
					<input
						type="text"
						id="nom"
						name="nom"
						value={formData.nom}
						onChange={handleChange}
						required
						aria-required="true"
						aria-invalid={!!errors.nom}
						aria-describedby={errors.nom ? "nom-error" : undefined}
						disabled={status === "submitting"}
						className={getInputClasses("nom")}
					/>
					{errors.nom && (
						<p
							id="nom-error"
							className="mt-2 text-xs text-red-600"
							role="alert"
						>
							{errors.nom}
						</p>
					)}
				</div>

				<div>
					<label
						htmlFor="prénom"
						className="block text-sm font-light tracking-wider mb-2 opacity-50"
					>
						PRÉNOM *
					</label>
					<input
						type="text"
						id="prénom"
						name="prénom"
						value={formData.prénom}
						onChange={handleChange}
						required
						aria-required="true"
						aria-invalid={!!errors.prénom}
						aria-describedby={errors.prénom ? "prénom-error" : undefined}
						disabled={status === "submitting"}
						className={getInputClasses("prénom")}
					/>
					{errors.prénom && (
						<p
							id="prénom-error"
							className="mt-2 text-xs text-red-600"
							role="alert"
						>
							{errors.prénom}
						</p>
					)}
				</div>

				<div>
					<label
						htmlFor="téléphone"
						className="block text-sm font-light tracking-wider mb-2 opacity-50"
					>
						TÉLÉPHONE *
					</label>
					<input
						type="tel"
						id="téléphone"
						name="téléphone"
						value={formData.téléphone}
						onChange={handleChange}
						placeholder="Ex: 06 12 34 56 78"
						required
						aria-required="true"
						aria-invalid={!!errors.téléphone}
						aria-describedby={errors.téléphone ? "téléphone-error" : undefined}
						disabled={status === "submitting"}
						className={getInputClasses("téléphone")}
					/>
					{errors.téléphone && (
						<p
							id="téléphone-error"
							className="mt-2 text-xs text-red-600"
							role="alert"
						>
							{errors.téléphone}
						</p>
					)}
				</div>

				<div>
					<label
						htmlFor="description"
						className="block text-sm font-light tracking-wider mb-2 opacity-50"
					>
						DESCRIPTION DE VOTRE DEMANDE *
					</label>
					<textarea
						id="description"
						name="description"
						value={formData.description}
						onChange={handleChange}
						rows={6}
						required
						aria-required="true"
						aria-invalid={!!errors.description}
						aria-describedby={
							errors.description ? "description-error" : undefined
						}
						disabled={status === "submitting"}
						className={getInputClasses("description")}
					/>
					{errors.description && (
						<p
							id="description-error"
							className="mt-2 text-xs text-red-600"
							role="alert"
						>
							{errors.description}
						</p>
					)}
				</div>

				{status === "success" && (
					<div
						className="p-4 bg-green-50 border border-green-200 rounded-sm"
						role="alert"
					>
						<p className="text-sm font-light text-green-800">{message}</p>
					</div>
				)}

				{status === "error" && message && (
					<div
						className="p-4 bg-red-50 border border-red-200 rounded-sm"
						role="alert"
					>
						<p className="text-sm font-light text-red-800">{message}</p>
					</div>
				)}

				<button
					type="submit"
					disabled={status === "submitting"}
					className="w-full px-6 py-3 text-sm font-light tracking-wider uppercase bg-black text-white hover:opacity-75 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
					aria-busy={status === "submitting"}
				>
					{status === "submitting" ? (
						<span className="inline-flex items-center gap-2">
							<svg
								className="animate-spin h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								/>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg>
							Envoi en cours...
						</span>
					) : (
						"Envoyer"
					)}
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
