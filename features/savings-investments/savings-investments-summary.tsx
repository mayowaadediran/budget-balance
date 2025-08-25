"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockSavingsInvestments } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";
import { PiggyBank, TrendingUp, DollarSign } from "lucide-react";

export function SavingsInvestmentsSummary() {
	// Calculate totals
	const totalSavings = mockSavingsInvestments
		.filter((entry) => entry.type === "Savings")
		.reduce((sum, entry) => sum + entry.amount, 0);

	const totalInvestments = mockSavingsInvestments
		.filter((entry) => entry.type === "Investment")
		.reduce((sum, entry) => sum + entry.amount, 0);

	const totalCombined = totalSavings + totalInvestments;

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			<Card className="rounded-xl bg-white p-4 shadow-md">
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center gap-2 text-lg">
						<PiggyBank className="w-5 h-5 text-green-600" />
						Total Savings
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold text-green-600">
						{formatCurrency(totalSavings)}
					</div>
				</CardContent>
			</Card>

			<Card className="rounded-xl bg-white p-4 shadow-md">
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center gap-2 text-lg">
						<TrendingUp className="w-5 h-5 text-blue-600" />
						Total Investments
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold text-blue-600">
						{formatCurrency(totalInvestments)}
					</div>
				</CardContent>
			</Card>

			<Card className="rounded-xl bg-white p-4 shadow-md">
				<CardHeader className="pb-2">
					<CardTitle className="flex items-center gap-2 text-lg">
						<DollarSign className="w-5 h-5 text-purple-600" />
						Total Combined
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold text-purple-600">
						{formatCurrency(totalCombined)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
