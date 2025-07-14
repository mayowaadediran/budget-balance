"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate } from "@/lib/utils";
import { getMockData } from "@/lib/mock-data";
import {
	ArrowUpRight,
	ArrowDownRight,
	Plus,
	MoreHorizontal,
} from "lucide-react";

export function RecentTransactions() {
	// Using mock data
	const transactions = getMockData.transactions().slice(0, 5);

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle>Recent Transactions</CardTitle>
				<Button size="sm" variant="outline">
					<Plus className="w-4 h-4 mr-2" />
					Add
				</Button>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{transactions.map((transaction) => (
						<div
							key={transaction.id}
							className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
						>
							<div className="flex items-center space-x-3">
								<div
									className={`w-8 h-8 rounded-full ${transaction.color} flex items-center justify-center`}
								>
									{transaction.type === "income" ? (
										<ArrowUpRight className="w-4 h-4 text-white" />
									) : (
										<ArrowDownRight className="w-4 h-4 text-white" />
									)}
								</div>
								<div className="flex-1">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-sm font-medium text-gray-900 dark:text-white">
												{transaction.category}
											</p>
											<p className="text-xs text-gray-500 dark:text-gray-400">
												{transaction.note}
											</p>
										</div>
										<div className="text-right">
											<p
												className={`text-sm font-medium ${
													transaction.type === "income"
														? "text-green-600 dark:text-green-400"
														: "text-red-600 dark:text-red-400"
												}`}
											>
												{transaction.type === "income" ? "+" : "-"}
												{formatCurrency(transaction.amount)}
											</p>
											<p className="text-xs text-gray-500 dark:text-gray-400">
												{formatDate(transaction.date)}
											</p>
										</div>
									</div>
								</div>
							</div>
							<Button variant="ghost" size="sm">
								<MoreHorizontal className="w-4 h-4" />
							</Button>
						</div>
					))}
				</div>

				<div className="mt-6 text-center">
					<Button variant="outline" size="sm">
						View All Transactions
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
