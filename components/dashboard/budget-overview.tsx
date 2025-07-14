"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils";
import { getMockData } from "@/lib/mock-data";

export function BudgetOverview() {
	// Using mock data
	const budgetCategories = getMockData.budgetCategories().map((cat) => ({
		id: cat.id,
		name: cat.name,
		icon: <span className="text-white">{cat.icon}</span>,
		color: cat.color,
		spent: cat.spent,
		budget: cat.budget,
	}));

	const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
	const totalBudget = budgetCategories.reduce(
		(sum, cat) => sum + cat.budget,
		0
	);

	function getPercentage(spent: number, budget: number): number {
		if (budget === 0) return 0;
		return Math.round((spent / budget) * 100);
	}

	const overallProgress = getPercentage(totalSpent, totalBudget);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<span>Budget Overview</span>
					<span className="text-sm font-normal text-gray-600 dark:text-gray-400">
						{formatCurrency(totalSpent)} / {formatCurrency(totalBudget)}
					</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{/* Overall Progress */}
				<div className="space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-gray-600 dark:text-gray-400">
							Overall Progress
						</span>
						<span className="font-medium">{overallProgress}%</span>
					</div>
					<Progress value={overallProgress} className="h-2" />
				</div>

				{/* Category Breakdown */}
				<div className="space-y-4">
					<h4 className="text-sm font-medium text-gray-900 dark:text-white">
						Category Breakdown
					</h4>
					<div className="space-y-3">
						{budgetCategories.map((category) => {
							const progress = getPercentage(category.spent, category.budget);
							const isOverBudget = category.spent > category.budget;

							return (
								<div key={category.id} className="space-y-2">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-2">
											<div
												className={`w-6 h-6 rounded-full ${category.color} flex items-center justify-center`}
											>
												{category.icon}
											</div>
											<span className="text-sm font-medium text-gray-900 dark:text-white">
												{category.name}
											</span>
										</div>
										<div className="text-right">
											<div className="text-sm font-medium text-gray-900 dark:text-white">
												{formatCurrency(category.spent)}
											</div>
											<div className="text-xs text-gray-500">
												of {formatCurrency(category.budget)}
											</div>
										</div>
									</div>
									<div className="space-y-1">
										<div className="flex justify-between text-xs">
											<span className="text-gray-600 dark:text-gray-400">
												Progress
											</span>
											<span
												className={`font-medium ${
													isOverBudget
														? "text-red-600 dark:text-red-400"
														: "text-gray-900 dark:text-white"
												}`}
											>
												{progress}%
											</span>
										</div>
										<Progress
											value={Math.min(progress, 100)}
											className={`h-1.5 ${
												isOverBudget ? "bg-red-100 dark:bg-red-900" : ""
											}`}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
