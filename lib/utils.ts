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

export function calculateCompoundInterest(
	principal: number,
	rate: number,
	time: number,
	compounding: "daily" | "monthly" | "annually"
): number {
	const r = rate / 100;
	let n: number;

	switch (compounding) {
		case "daily":
			n = 365;
			break;
		case "monthly":
			n = 12;
			break;
		case "annually":
			n = 1;
			break;
		default:
			n = 12;
	}

	const amount = principal * Math.pow(1 + r / n, n * time);
	return amount;
}

export function calculateProjectedValue(
	amountInvested: number,
	interestRate: number,
	startDate: string,
	compounding: "daily" | "monthly" | "annually"
): number {
	const start = new Date(startDate);
	const now = new Date();
	const timeInYears =
		(now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365);

	return calculateCompoundInterest(
		amountInvested,
		interestRate,
		timeInYears,
		compounding
	);
}

export function calculateTotalInterest(
	amountInvested: number,
	currentValue: number
): number {
	return currentValue - amountInvested;
}

export function formatPercentage(value: number): string {
	return `${value.toFixed(1)}%`;
}
