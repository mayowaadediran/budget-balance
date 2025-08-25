"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	TrendingUp,
	TrendingDown,
	Wallet,
	Target,
	ArrowUpRight,
	ArrowDownRight,
} from "lucide-react";
import { getMockData } from "@/lib/mock-data";

interface StatCardProps {
	title: string;
	value: string;
	change: string;
	changeType: "positive" | "negative";
	icon: React.ReactNode;
}

function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
					{title}
				</CardTitle>
				<div className="text-gray-600 dark:text-gray-400">{icon}</div>
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold text-gray-900 dark:text-white">
					{value}
				</div>
				<div
					className={`flex items-center text-xs ${
						changeType === "positive"
							? "text-green-600 dark:text-green-400"
							: "text-red-600 dark:text-red-400"
					}`}
				>
					{changeType === "positive" ? (
						<ArrowUpRight className="w-3 h-3 mr-1" />
					) : (
						<ArrowDownRight className="w-3 h-3 mr-1" />
					)}
					{change}
				</div>
			</CardContent>
		</Card>
	);
}

export function DashboardStats() {
	// Using mock data
	const mockStats = getMockData.stats();
	const stats = [
		{
			title: mockStats[0].title,
			value: mockStats[0].value,
			change: mockStats[0].change,
			changeType: mockStats[0].changeType,
			icon: <TrendingUp className="w-4 h-4" />,
		},
		{
			title: mockStats[1].title,
			value: mockStats[1].value,
			change: mockStats[1].change,
			changeType: mockStats[1].changeType,
			icon: <TrendingDown className="w-4 h-4" />,
		},
		{
			title: mockStats[2].title,
			value: mockStats[2].value,
			change: mockStats[2].change,
			changeType: mockStats[2].changeType,
			icon: <Wallet className="w-4 h-4" />,
		},
		{
			title: mockStats[3].title,
			value: mockStats[3].value,
			change: mockStats[3].change,
			changeType: mockStats[3].changeType,
			icon: <Target className="w-4 h-4" />,
		},
	];

	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			{stats.map((stat, index) => (
				<StatCard key={index} {...stat} />
			))}
		</div>
	);
}
