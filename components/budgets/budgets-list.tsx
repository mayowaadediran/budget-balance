"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatCurrency, formatDate, getPercentage } from "@/lib/utils";
import { Calendar, MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";

interface Budget {
	id: string;
	name: string;
	totalAmount: number;
	spentAmount: number;
	startDate: string;
	endDate: string;
	status: "active" | "completed" | "upcoming";
	categories: number;
}

export function BudgetsList() {
	// Mock data - in real app, this would come from API
	const budgets: Budget[] = [
		{
			id: "1",
			name: "January 2024 Budget",
			totalAmount: 250000,
			spentAmount: 185000,
			startDate: "2024-01-01",
			endDate: "2024-01-31",
			status: "active",
			categories: 6,
		},
		{
			id: "2",
			name: "February 2024 Budget",
			totalAmount: 250000,
			spentAmount: 0,
			startDate: "2024-02-01",
			endDate: "2024-02-29",
			status: "upcoming",
			categories: 6,
		},
		{
			id: "3",
			name: "December 2023 Budget",
			totalAmount: 200000,
			spentAmount: 195000,
			startDate: "2023-12-01",
			endDate: "2023-12-31",
			status: "completed",
			categories: 5,
		},
	];

	const getStatusColor = (status: Budget["status"]) => {
		switch (status) {
			case "active":
				return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
			case "completed":
				return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
			case "upcoming":
				return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
			default:
				return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
		}
	};

	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{budgets.map((budget) => {
				const progress = getPercentage(budget.spentAmount, budget.totalAmount);
				const remaining = budget.totalAmount - budget.spentAmount;

				return (
					<Card key={budget.id} className="hover:shadow-lg transition-shadow">
						<CardHeader>
							<div className="flex items-center justify-between">
								<CardTitle className="text-lg">{budget.name}</CardTitle>
								<Button variant="ghost" size="sm">
									<MoreHorizontal className="w-4 h-4" />
								</Button>
							</div>
							<div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
								<Calendar className="w-4 h-4" />
								<span>
									{formatDate(budget.startDate)} - {formatDate(budget.endDate)}
								</span>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							{/* Progress */}
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span className="text-gray-600 dark:text-gray-400">
										Progress
									</span>
									<span className="font-medium">{progress}%</span>
								</div>
								<Progress value={progress} className="h-2" />
							</div>

							{/* Amounts */}
							<div className="grid grid-cols-2 gap-4 text-sm">
								<div>
									<p className="text-gray-600 dark:text-gray-400">
										Total Budget
									</p>
									<p className="font-medium text-gray-900 dark:text-white">
										{formatCurrency(budget.totalAmount)}
									</p>
								</div>
								<div>
									<p className="text-gray-600 dark:text-gray-400">Spent</p>
									<p className="font-medium text-gray-900 dark:text-white">
										{formatCurrency(budget.spentAmount)}
									</p>
								</div>
								<div>
									<p className="text-gray-600 dark:text-gray-400">Remaining</p>
									<p className="font-medium text-gray-900 dark:text-white">
										{formatCurrency(remaining)}
									</p>
								</div>
								<div>
									<p className="text-gray-600 dark:text-gray-400">Categories</p>
									<p className="font-medium text-gray-900 dark:text-white">
										{budget.categories}
									</p>
								</div>
							</div>

							{/* Status */}
							<div className="flex items-center justify-between">
								<span
									className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
										budget.status
									)}`}
								>
									{budget.status.charAt(0).toUpperCase() +
										budget.status.slice(1)}
								</span>
								<div className="flex space-x-2">
									<Button variant="ghost" size="sm">
										<Eye className="w-4 h-4" />
									</Button>
									<Button variant="ghost" size="sm">
										<Edit className="w-4 h-4" />
									</Button>
									<Button variant="ghost" size="sm">
										<Trash2 className="w-4 h-4" />
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
