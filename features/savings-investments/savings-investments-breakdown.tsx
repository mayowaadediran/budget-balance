"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockSavingsInvestments } from "@/lib/mock-data";
import {
	formatCurrency,
	calculateProjectedValue,
	calculateTotalInterest,
	formatPercentage,
} from "@/lib/utils";

export function SavingsInvestmentsBreakdown() {
	// Separate savings and investments
	const savingsEntries = mockSavingsInvestments.filter(
		(entry) => entry.type === "Savings"
	);
	const investmentEntries = mockSavingsInvestments.filter(
		(entry) => entry.type === "Investment"
	);

	// Calculate platform breakdown for savings
	const savingsBreakdown = savingsEntries.reduce((acc, entry) => {
		if (!acc[entry.platform]) {
			acc[entry.platform] = 0;
		}
		acc[entry.platform] += entry.amount;
		return acc;
	}, {} as Record<string, number>);

	// Calculate platform breakdown for investments with projected values
	const investmentBreakdown = investmentEntries.reduce(
		(acc, entry) => {
			if (!acc[entry.platform]) {
				acc[entry.platform] = {
					amountInvested: 0,
					projectedValue: 0,
					totalInterest: 0,
					avgInterestRate: 0,
					entries: [],
				};
			}
			const projectedValue = calculateProjectedValue(
				entry.amountInvested,
				entry.interestRate,
				entry.startDate,
				entry.compounding
			);
			const interest = calculateTotalInterest(
				entry.amountInvested,
				projectedValue
			);

			acc[entry.platform].amountInvested += entry.amountInvested;
			acc[entry.platform].projectedValue += projectedValue;
			acc[entry.platform].totalInterest += interest;
			acc[entry.platform].entries.push(entry);
			return acc;
		},
		{} as Record<
			string,
			{
				amountInvested: number;
				projectedValue: number;
				totalInterest: number;
				avgInterestRate: number;
				entries: typeof mockSavingsInvestments;
			}
		>
	);

	// Calculate average interest rates
	Object.keys(investmentBreakdown).forEach((platform) => {
		const entries = investmentBreakdown[platform].entries;
		const totalRate = entries.reduce(
			(sum: number, entry) => sum + entry.interestRate,
			0
		);
		investmentBreakdown[platform].avgInterestRate = totalRate / entries.length;
	});

	const totalSavings = Object.values(savingsBreakdown).reduce(
		(sum, amount) => sum + amount,
		0
	);
	const totalInvestments = Object.values(investmentBreakdown).reduce(
		(sum, platform) => sum + platform.amountInvested,
		0
	);
	const totalProjectedValue = Object.values(investmentBreakdown).reduce(
		(sum, platform) => sum + platform.projectedValue,
		0
	);
	const totalInterestEarned = Object.values(investmentBreakdown).reduce(
		(sum, platform) => sum + platform.totalInterest,
		0
	);

	// Sort platforms by amount (descending)
	const sortedSavings = Object.entries(savingsBreakdown)
		.sort(([, a], [, b]) => b - a)
		.map(([platform, amount]) => ({
			platform,
			amount,
			percentage:
				totalSavings > 0 ? ((amount / totalSavings) * 100).toFixed(1) : "0.0",
		}));

	const sortedInvestments = Object.entries(investmentBreakdown)
		.sort(([, a], [, b]) => b.amountInvested - a.amountInvested)
		.map(([platform, data]) => ({
			platform,
			amountInvested: data.amountInvested,
			projectedValue: data.projectedValue,
			totalInterest: data.totalInterest,
			avgInterestRate: data.avgInterestRate,
			percentage:
				totalInvestments > 0
					? ((data.amountInvested / totalInvestments) * 100).toFixed(1)
					: "0.0",
		}));

	const renderSavingsBreakdown = (items: typeof sortedSavings) => (
		<div className="space-y-4">
			{items.length > 0 ? (
				items.map((item) => (
					<div
						key={item.platform}
						className="flex items-center justify-between"
					>
						<div className="flex items-center gap-3">
							<div className="w-3 h-3 rounded-full bg-green-500"></div>
							<span className="font-medium">{item.platform}</span>
						</div>
						<div className="text-right">
							<div className="font-semibold">{formatCurrency(item.amount)}</div>
							<div className="text-sm text-gray-500">{item.percentage}%</div>
						</div>
					</div>
				))
			) : (
				<div className="text-center text-gray-500 py-4">No entries found</div>
			)}
		</div>
	);

	const renderInvestmentBreakdown = (items: typeof sortedInvestments) => (
		<div className="space-y-4">
			{items.length > 0 ? (
				items.map((item) => (
					<div
						key={item.platform}
						className="p-3 rounded-lg border bg-gray-50 dark:bg-gray-800"
					>
						<div className="flex items-center justify-between mb-2">
							<div className="flex items-center gap-3">
								<div className="w-3 h-3 rounded-full bg-blue-500"></div>
								<span className="font-medium">{item.platform}</span>
							</div>
							<div className="text-right">
								<div className="text-sm text-gray-500">{item.percentage}%</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2 text-sm">
							<div>
								<span className="text-gray-500">Invested:</span>
								<div className="font-semibold">
									{formatCurrency(item.amountInvested)}
								</div>
							</div>
							<div>
								<span className="text-gray-500">Projected:</span>
								<div className="font-semibold text-blue-600">
									{formatCurrency(item.projectedValue)}
								</div>
							</div>
							<div>
								<span className="text-gray-500">Interest:</span>
								<div className="font-semibold text-green-600">
									{formatCurrency(item.totalInterest)}
								</div>
							</div>
							<div>
								<span className="text-gray-500">Rate:</span>
								<div className="font-semibold">
									{formatPercentage(item.avgInterestRate)}
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<div className="text-center text-gray-500 py-4">No entries found</div>
			)}
		</div>
	);

	return (
		<Card className="rounded-xl bg-white p-4 shadow-md">
			<CardHeader>
				<CardTitle className="text-lg">Breakdown by Platform</CardTitle>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue="savings" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="savings" className="text-green-600">
							Savings
						</TabsTrigger>
						<TabsTrigger value="investments" className="text-blue-600">
							Investments
						</TabsTrigger>
					</TabsList>
					<TabsContent value="savings" className="mt-4">
						<div className="mb-4">
							<div className="text-sm text-gray-500">Total Savings</div>
							<div className="text-lg font-bold text-green-600">
								{formatCurrency(totalSavings)}
							</div>
						</div>
						{renderSavingsBreakdown(sortedSavings)}
					</TabsContent>
					<TabsContent value="investments" className="mt-4">
						<div className="mb-4 space-y-2">
							<div className="text-sm text-gray-500">Total Invested</div>
							<div className="text-lg font-bold text-blue-600">
								{formatCurrency(totalInvestments)}
							</div>
							<div className="text-sm text-gray-500">Projected Value</div>
							<div className="text-lg font-bold text-purple-600">
								{formatCurrency(totalProjectedValue)}
							</div>
							<div className="text-sm text-gray-500">Total Interest Earned</div>
							<div className="text-lg font-bold text-green-600">
								{formatCurrency(totalInterestEarned)}
							</div>
						</div>
						{renderInvestmentBreakdown(sortedInvestments)}
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
