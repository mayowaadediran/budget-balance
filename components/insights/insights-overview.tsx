"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	TrendingUp,
	TrendingDown,
	Brain,
	RefreshCw,
	AlertTriangle,
	CheckCircle,
	Lightbulb,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function InsightsOverview() {
	// Mock data - in real app, this would come from AI analysis
	const insights = {
		totalIncome: 150000,
		totalExpenses: 89000,
		savingsRate: 40.7,
		spendingTrend: "decreasing",
		topSpendingCategory: "Housing",
		biggestExpense: 80000,
		savingsGoal: 50000,
		currentSavings: 61000,
		financialHealth: "excellent",
		recommendations: [
			"Your savings rate of 40.7% is excellent! Keep up the good work.",
			"Consider investing your excess savings for better returns.",
			"Your housing expenses are high but manageable.",
			"You're on track to exceed your savings goal this month.",
		],
	};

	const getHealthColor = (health: string) => {
		switch (health) {
			case "excellent":
				return "text-green-600 dark:text-green-400";
			case "good":
				return "text-blue-600 dark:text-blue-400";
			case "fair":
				return "text-yellow-600 dark:text-yellow-400";
			case "poor":
				return "text-red-600 dark:text-red-400";
			default:
				return "text-gray-600 dark:text-gray-400";
		}
	};

	return (
		<div className="space-y-6">
			{/* Key Metrics */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
						<TrendingUp className="w-4 h-4 text-green-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-600">
							{insights.savingsRate}%
						</div>
						<p className="text-xs text-gray-600 dark:text-gray-400">
							Excellent rate
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Spending Trend
						</CardTitle>
						<TrendingDown className="w-4 h-4 text-blue-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-600">Decreasing</div>
						<p className="text-xs text-gray-600 dark:text-gray-400">
							Good control
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Biggest Expense
						</CardTitle>
						<AlertTriangle className="w-4 h-4 text-orange-600" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-orange-600">
							{formatCurrency(insights.biggestExpense)}
						</div>
						<p className="text-xs text-gray-600 dark:text-gray-400">
							{insights.topSpendingCategory}
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Financial Health
						</CardTitle>
						<CheckCircle className="w-4 h-4 text-green-600" />
					</CardHeader>
					<CardContent>
						<div
							className={`text-2xl font-bold ${getHealthColor(
								insights.financialHealth
							)}`}
						>
							Excellent
						</div>
						<p className="text-xs text-gray-600 dark:text-gray-400">
							Keep it up!
						</p>
					</CardContent>
				</Card>
			</div>

			{/* AI Summary */}
			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<CardTitle className="flex items-center space-x-2">
						<Brain className="w-5 h-5 text-blue-600" />
						<span>AI Financial Summary</span>
					</CardTitle>
					<Button size="sm" variant="outline">
						<RefreshCw className="w-4 h-4 mr-2" />
						Refresh
					</Button>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2">
						<div>
							<h4 className="font-medium mb-2">Income & Expenses</h4>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-gray-600 dark:text-gray-400">
										Total Income:
									</span>
									<span className="font-medium text-green-600">
										{formatCurrency(insights.totalIncome)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600 dark:text-gray-400">
										Total Expenses:
									</span>
									<span className="font-medium text-red-600">
										{formatCurrency(insights.totalExpenses)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600 dark:text-gray-400">
										Net Savings:
									</span>
									<span className="font-medium text-green-600">
										{formatCurrency(
											insights.totalIncome - insights.totalExpenses
										)}
									</span>
								</div>
							</div>
						</div>

						<div>
							<h4 className="font-medium mb-2">Savings Progress</h4>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-gray-600 dark:text-gray-400">
										Current Savings:
									</span>
									<span className="font-medium">
										{formatCurrency(insights.currentSavings)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600 dark:text-gray-400">
										Monthly Goal:
									</span>
									<span className="font-medium">
										{formatCurrency(insights.savingsGoal)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600 dark:text-gray-400">
										Progress:
									</span>
									<span className="font-medium text-green-600">122%</span>
								</div>
							</div>
						</div>
					</div>

					<div className="border-t pt-4">
						<h4 className="font-medium mb-3 flex items-center space-x-2">
							<Lightbulb className="w-4 h-4 text-yellow-600" />
							<span>Key Insights</span>
						</h4>
						<div className="space-y-2">
							{insights.recommendations.map((recommendation, index) => (
								<div key={index} className="flex items-start space-x-2 text-sm">
									<div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
									<p className="text-gray-700 dark:text-gray-300">
										{recommendation}
									</p>
								</div>
							))}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
