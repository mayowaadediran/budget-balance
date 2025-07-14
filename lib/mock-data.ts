import { formatCurrency } from "./utils";

// Mock User Data
export const mockUser = {
	id: "user-1",
	name: "John Doe",
	email: "john@example.com",
	avatar: "/api/placeholder/32/32",
	preferences: {
		currency: "NGN",
		theme: "light" as const,
		notifications: true,
	},
};

// Mock Budgets Data
export const mockBudgets = [
	{
		id: "budget-1",
		name: "January 2024 Budget",
		totalAmount: 250000,
		spentAmount: 185000,
		startDate: "2024-01-01",
		endDate: "2024-01-31",
		status: "active" as const,
		categories: 6,
		userId: "user-1",
	},
	{
		id: "budget-2",
		name: "February 2024 Budget",
		totalAmount: 250000,
		spentAmount: 0,
		startDate: "2024-02-01",
		endDate: "2024-02-29",
		status: "upcoming" as const,
		categories: 6,
		userId: "user-1",
	},
	{
		id: "budget-3",
		name: "December 2023 Budget",
		totalAmount: 200000,
		spentAmount: 195000,
		startDate: "2023-12-01",
		endDate: "2023-12-31",
		status: "completed" as const,
		categories: 5,
		userId: "user-1",
	},
];

// Mock Categories Data
export const mockCategories = [
	{
		id: "cat-1",
		name: "Food & Dining",
		color: "bg-blue-500",
		icon: "🍽️",
		transactionCount: 15,
		totalSpent: 45000,
		isDefault: true,
		userId: "user-1",
	},
	{
		id: "cat-2",
		name: "Transportation",
		color: "bg-green-500",
		icon: "🚗",
		transactionCount: 8,
		totalSpent: 25000,
		isDefault: true,
		userId: "user-1",
	},
	{
		id: "cat-3",
		name: "Housing",
		color: "bg-purple-500",
		icon: "🏠",
		transactionCount: 2,
		totalSpent: 80000,
		isDefault: true,
		userId: "user-1",
	},
	{
		id: "cat-4",
		name: "Shopping",
		color: "bg-orange-500",
		icon: "🛍️",
		transactionCount: 12,
		totalSpent: 15000,
		isDefault: true,
		userId: "user-1",
	},
	{
		id: "cat-5",
		name: "Utilities",
		color: "bg-red-500",
		icon: "📡",
		transactionCount: 4,
		totalSpent: 12000,
		isDefault: true,
		userId: "user-1",
	},
	{
		id: "cat-6",
		name: "Healthcare",
		color: "bg-pink-500",
		icon: "❤️",
		transactionCount: 3,
		totalSpent: 8000,
		isDefault: true,
		userId: "user-1",
	},
	{
		id: "cat-7",
		name: "Entertainment",
		color: "bg-indigo-500",
		icon: "🎮",
		transactionCount: 6,
		totalSpent: 18000,
		isDefault: false,
		userId: "user-1",
	},
	{
		id: "cat-8",
		name: "Salary",
		color: "bg-emerald-500",
		icon: "💰",
		transactionCount: 1,
		totalSpent: 150000,
		isDefault: false,
		userId: "user-1",
	},
	{
		id: "cat-9",
		name: "Investment",
		color: "bg-teal-500",
		icon: "📈",
		transactionCount: 2,
		totalSpent: 50000,
		isDefault: false,
		userId: "user-1",
	},
];

// Mock Transactions Data
export const mockTransactions = [
	{
		id: "trans-1",
		type: "expense" as const,
		amount: 25000,
		category: "Food & Dining",
		note: "Lunch at restaurant",
		date: "2024-01-15",
		budget: "January 2024 Budget",
		color: "bg-blue-500",
		userId: "user-1",
	},
	{
		id: "trans-2",
		type: "income" as const,
		amount: 150000,
		category: "Salary",
		note: "Monthly salary",
		date: "2024-01-14",
		budget: "January 2024 Budget",
		color: "bg-green-500",
		userId: "user-1",
	},
	{
		id: "trans-3",
		type: "expense" as const,
		amount: 50000,
		category: "Transportation",
		note: "Fuel for car",
		date: "2024-01-13",
		budget: "January 2024 Budget",
		color: "bg-orange-500",
		userId: "user-1",
	},
	{
		id: "trans-4",
		type: "expense" as const,
		amount: 80000,
		category: "Housing",
		note: "Rent payment",
		date: "2024-01-12",
		budget: "January 2024 Budget",
		color: "bg-purple-500",
		userId: "user-1",
	},
	{
		id: "trans-5",
		type: "expense" as const,
		amount: 15000,
		category: "Shopping",
		note: "Groceries",
		date: "2024-01-11",
		budget: "January 2024 Budget",
		color: "bg-pink-500",
		userId: "user-1",
	},
	{
		id: "trans-6",
		type: "expense" as const,
		amount: 12000,
		category: "Utilities",
		note: "Electricity bill",
		date: "2024-01-10",
		budget: "January 2024 Budget",
		color: "bg-red-500",
		userId: "user-1",
	},
];

// Mock Budget Categories Data
export const mockBudgetCategories = [
	{
		id: "bc-1",
		name: "Food & Dining",
		icon: "🍽️",
		color: "bg-blue-500",
		spent: 45000,
		budget: 60000,
		budgetId: "budget-1",
	},
	{
		id: "bc-2",
		name: "Transportation",
		icon: "🚗",
		color: "bg-green-500",
		spent: 25000,
		budget: 30000,
		budgetId: "budget-1",
	},
	{
		id: "bc-3",
		name: "Housing",
		icon: "🏠",
		color: "bg-purple-500",
		spent: 80000,
		budget: 100000,
		budgetId: "budget-1",
	},
	{
		id: "bc-4",
		name: "Shopping",
		icon: "🛍️",
		color: "bg-orange-500",
		spent: 15000,
		budget: 25000,
		budgetId: "budget-1",
	},
	{
		id: "bc-5",
		name: "Utilities",
		icon: "📡",
		color: "bg-red-500",
		spent: 12000,
		budget: 15000,
		budgetId: "budget-1",
	},
	{
		id: "bc-6",
		name: "Healthcare",
		icon: "❤️",
		color: "bg-pink-500",
		spent: 8000,
		budget: 12000,
		budgetId: "budget-1",
	},
];

// Mock Analytics Data
export const mockAnalytics = {
	totalIncome: 150000,
	totalExpenses: 89000,
	netSavings: 61000,
	savingsRate: 40.7,
	spendingTrend: "decreasing",
	topSpendingCategory: "Housing",
	biggestExpense: 80000,
	savingsGoal: 50000,
	currentSavings: 61000,
	financialHealth: "excellent" as const,
	monthlyData: [
		{ month: "Jan", income: 150000, expenses: 89000 },
		{ month: "Feb", income: 150000, expenses: 92000 },
		{ month: "Mar", income: 150000, expenses: 85000 },
		{ month: "Apr", income: 150000, expenses: 78000 },
		{ month: "May", income: 150000, expenses: 95000 },
		{ month: "Jun", income: 150000, expenses: 82000 },
	],
	categoryData: [
		{ category: "Housing", amount: 80000, percentage: 32 },
		{ category: "Food & Dining", amount: 45000, percentage: 18 },
		{ category: "Transportation", amount: 25000, percentage: 10 },
		{ category: "Shopping", amount: 15000, percentage: 6 },
		{ category: "Utilities", amount: 12000, percentage: 5 },
		{ category: "Healthcare", amount: 8000, percentage: 3 },
		{ category: "Entertainment", amount: 18000, percentage: 7 },
		{ category: "Other", amount: 45000, percentage: 18 },
	],
};

// Mock AI Insights Data
export const mockAIInsights = {
	insights: [
		{
			id: "insight-1",
			type: "positive" as const,
			title: "Great Savings Progress",
			description:
				"You're on track to save ₦50,000 this month. Your food spending is 15% below budget!",
			icon: "📈",
			color:
				"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
		},
		{
			id: "insight-2",
			type: "warning" as const,
			title: "Transportation Budget Alert",
			description:
				"You've spent 85% of your transportation budget. Consider carpooling or public transport.",
			icon: "⚠️",
			color:
				"bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
		},
		{
			id: "insight-3",
			type: "suggestion" as const,
			title: "Smart Spending Opportunity",
			description:
				"Your shopping expenses are 20% higher than last month. Consider setting a weekly limit.",
			icon: "💡",
			color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
		},
		{
			id: "insight-4",
			type: "suggestion" as const,
			title: "Investment Opportunity",
			description:
				"With your current savings rate, you could invest ₦25,000 monthly for better returns.",
			icon: "🧠",
			color:
				"bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
		},
	],
	recommendations: [
		"Your savings rate of 40.7% is excellent! Keep up the good work.",
		"Consider investing your excess savings for better returns.",
		"Your housing expenses are high but manageable.",
		"You're on track to exceed your savings goal this month.",
	],
	summary:
		"Your overall financial health is good! You're saving 28% of your income, which is above the recommended 20%. Focus on reducing transportation costs and consider setting up automatic savings transfers.",
};

// Mock Stats Data
export const mockStats = [
	{
		title: "Total Income",
		value: formatCurrency(125000),
		change: "+12.5%",
		changeType: "positive" as const,
		icon: "📈",
	},
	{
		title: "Total Expenses",
		value: formatCurrency(89000),
		change: "+8.2%",
		changeType: "negative" as const,
		icon: "📉",
	},
	{
		title: "Net Savings",
		value: formatCurrency(36000),
		change: "+15.3%",
		changeType: "positive" as const,
		icon: "💰",
	},
	{
		title: "Budget Progress",
		value: "78%",
		change: "+5.2%",
		changeType: "positive" as const,
		icon: "🎯",
	},
];

// Helper functions for mock data
export const getMockData = {
	user: () => mockUser,
	budgets: () => mockBudgets,
	categories: () => mockCategories,
	transactions: () => mockTransactions,
	budgetCategories: () => mockBudgetCategories,
	analytics: () => mockAnalytics,
	aiInsights: () => mockAIInsights,
	stats: () => mockStats,
};
