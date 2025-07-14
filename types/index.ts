export interface User {
	id: string;
	email: string;
	name?: string;
	avatar_url?: string;
	created_at: string;
}

export interface Budget {
	id: string;
	user_id: string;
	name: string;
	total_amount: number;
	start_date: string;
	end_date: string;
	created_at: string;
	updated_at: string;
}

export interface Category {
	id: string;
	user_id: string;
	name: string;
	color: string;
	icon?: string;
	created_at: string;
}

export interface BudgetCategory {
	id: string;
	budget_id: string;
	category_id: string;
	max_amount: number;
	spent_amount: number;
	created_at: string;
	category?: Category;
}

export interface Transaction {
	id: string;
	user_id: string;
	budget_id: string;
	category_id: string;
	amount: number;
	type: "income" | "expense";
	note: string;
	date: string;
	created_at: string;
	updated_at: string;
	category?: Category;
	budget?: Budget;
}

export interface AIInsight {
	id: string;
	user_id: string;
	summary: string;
	suggestions: string[];
	spending_habits: string;
	created_at: string;
}

export interface UserPreferences {
	id: string;
	user_id: string;
	default_currency: string;
	theme: "light" | "dark";
	notifications_enabled: boolean;
	created_at: string;
	updated_at: string;
}
