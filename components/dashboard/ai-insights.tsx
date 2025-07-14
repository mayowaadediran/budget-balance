"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getMockData } from "@/lib/mock-data";
import {
	Brain,
	TrendingUp,
	AlertTriangle,
	Lightbulb,
	RefreshCw,
} from "lucide-react";

export function AIInsights() {
	// Using mock data
	const mockInsights = getMockData.aiInsights();
	const insights = mockInsights.insights.map((insight) => ({
		...insight,
		icon:
			insight.icon === "📈" ? (
				<TrendingUp className="w-5 h-5" />
			) : insight.icon === "⚠️" ? (
				<AlertTriangle className="w-5 h-5" />
			) : insight.icon === "💡" ? (
				<Lightbulb className="w-5 h-5" />
			) : insight.icon === "🧠" ? (
				<Brain className="w-5 h-5" />
			) : (
				<TrendingUp className="w-5 h-5" />
			),
	}));

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="flex items-center space-x-2">
					<Brain className="w-5 h-5 text-blue-600" />
					<span>AI Financial Insights</span>
				</CardTitle>
				<Button size="sm" variant="outline">
					<RefreshCw className="w-4 h-4 mr-2" />
					Refresh
				</Button>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4 md:grid-cols-2">
					{insights.map((insight) => (
						<div
							key={insight.id}
							className={`p-4 rounded-lg border ${insight.color} border-current/20`}
						>
							<div className="flex items-start space-x-3">
								<div className="flex-shrink-0">{insight.icon}</div>
								<div className="flex-1">
									<h4 className="font-medium mb-1">{insight.title}</h4>
									<p className="text-sm opacity-90">{insight.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
					<div className="flex items-center space-x-2 mb-2">
						<Brain className="w-4 h-4 text-blue-600" />
						<span className="text-sm font-medium">AI Summary</span>
					</div>
					<p className="text-sm text-gray-600 dark:text-gray-300">
						{mockInsights.summary}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
