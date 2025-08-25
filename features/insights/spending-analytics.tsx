"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, PieChart } from "lucide-react";

export function SpendingAnalytics() {
	// Mock data - in real app, this would come from API
	const monthlyData = [
		{ month: "Jan", income: 150000, expenses: 89000 },
		{ month: "Feb", income: 150000, expenses: 92000 },
		{ month: "Mar", income: 150000, expenses: 85000 },
		{ month: "Apr", income: 150000, expenses: 78000 },
		{ month: "May", income: 150000, expenses: 95000 },
		{ month: "Jun", income: 150000, expenses: 82000 },
	];

	const categoryData = [
		{ category: "Housing", amount: 80000, percentage: 32 },
		{ category: "Food & Dining", amount: 45000, percentage: 18 },
		{ category: "Transportation", amount: 25000, percentage: 10 },
		{ category: "Shopping", amount: 15000, percentage: 6 },
		{ category: "Utilities", amount: 12000, percentage: 5 },
		{ category: "Healthcare", amount: 8000, percentage: 3 },
		{ category: "Entertainment", amount: 18000, percentage: 7 },
		{ category: "Other", amount: 45000, percentage: 18 },
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center space-x-2">
					<BarChart3 className="w-5 h-5 text-blue-600" />
					<span>Spending Analytics</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue="monthly" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="monthly">Monthly Trend</TabsTrigger>
						<TabsTrigger value="categories">Category Breakdown</TabsTrigger>
					</TabsList>

					<TabsContent value="monthly" className="space-y-4">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<h4 className="font-medium">Income vs Expenses</h4>
								<div className="flex items-center space-x-4 text-sm">
									<div className="flex items-center space-x-1">
										<div className="w-3 h-3 bg-green-500 rounded"></div>
										<span>Income</span>
									</div>
									<div className="flex items-center space-x-1">
										<div className="w-3 h-3 bg-red-500 rounded"></div>
										<span>Expenses</span>
									</div>
								</div>
							</div>

							<div className="space-y-2">
								{monthlyData.map((data, index) => (
									<div key={index} className="flex items-center space-x-4">
										<div className="w-12 text-sm font-medium">{data.month}</div>
										<div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4 relative">
											<div
												className="bg-green-500 h-4 rounded-full"
												style={{ width: `${(data.income / 150000) * 100}%` }}
											></div>
											<div
												className="bg-red-500 h-4 rounded-full absolute top-0"
												style={{ width: `${(data.expenses / 150000) * 100}%` }}
											></div>
										</div>
										<div className="text-sm text-gray-600 dark:text-gray-400">
											₦{data.expenses.toLocaleString()}
										</div>
									</div>
								))}
							</div>
						</div>
					</TabsContent>

					<TabsContent value="categories" className="space-y-4">
						<div className="space-y-4">
							<div className="flex items-center space-x-2">
								<PieChart className="w-4 h-4 text-blue-600" />
								<h4 className="font-medium">Spending by Category</h4>
							</div>

							<div className="space-y-3">
								{categoryData.map((data, index) => (
									<div
										key={index}
										className="flex items-center justify-between"
									>
										<div className="flex items-center space-x-3">
											<div
												className="w-4 h-4 rounded"
												style={{
													backgroundColor: `hsl(${index * 45}, 70%, 60%)`,
												}}
											></div>
											<span className="text-sm font-medium">
												{data.category}
											</span>
										</div>
										<div className="flex items-center space-x-4">
											<div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
												<div
													className="h-2 rounded-full"
													style={{
														width: `${data.percentage}%`,
														backgroundColor: `hsl(${index * 45}, 70%, 60%)`,
													}}
												></div>
											</div>
											<span className="text-sm text-gray-600 dark:text-gray-400 w-16 text-right">
												{data.percentage}%
											</span>
											<span className="text-sm font-medium w-20 text-right">
												₦{data.amount.toLocaleString()}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
