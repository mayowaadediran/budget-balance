import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = "NGN") {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: currency,
	}).format(amount);
}

export function formatDate(date: string | Date) {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

export function getPercentage(amount: number, total: number) {
	if (total === 0) return 0;
	return Math.round((amount / total) * 100);
}

export function generateId() {
	return Math.random().toString(36).substr(2, 9);
}
