"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Brain,
	Lightbulb,
	Target,
	TrendingUp,
	AlertTriangle,
	CheckCircle,
	ArrowRight,
} from "lucide-react";

interface Recommendation {
	id: string;
	type: "savings" | "spending" | "investment" | "warning";
	title: string;
	description: string;
	impact: "high" | "medium" | "low";
	icon: React.ReactNode;
	action: string;
}

export function AIRecommendations() {
	// Mock data - in real app, this would come from OpenAI API
	const recommendations: Recommendation[] = [
		{
			id: "1",
			type: "savings",
			title: "Increase Emergency Fund",
			description:
				"Your emergency fund covers 2.4 months of expenses. Consider increasing it to 6 months for better security.",
			impact: "high",
			icon: <Target className="w-5 h-5" />,
			action: "Set up auto-savings",
		},
		{
			id: "2",
			type: "investment",
			title: "Start Investing",
			description:
				"With your high savings rate, you could invest ₦25,000 monthly in index funds for long-term growth.",
			impact: "high",
			icon: <TrendingUp className="w-5 h-5" />,
			action: "Learn about investing",
		},
		{
			id: "3",
			type: "spending",
			title: "Reduce Transportation Costs",
			description:
				"Your transportation spending is 10% above average. Consider carpooling or public transport.",
			impact: "medium",
			icon: <AlertTriangle className="w-5 h-5" />,
			action: "Find alternatives",
		},
		{
			id: "4",
			type: "savings",
			title: "Optimize Food Budget",
			description:
				"You're spending 18% on food. Meal planning could save you ₦10,000 monthly.",
			impact: "medium",
			icon: <CheckCircle className="w-5 h-5" />,
			action: "Create meal plan",
		},
	];

	const getTypeColor = (type: Recommendation["type"]) => {
		switch (type) {
			case "savings":
				return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
			case "investment":
				return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
			case "spending":
				return "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300";
			case "warning":
				return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
			default:
				return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300";
		}
	};

	const getImpactColor = (impact: Recommendation["impact"]) => {
		switch (impact) {
			case "high":
				return "text-red-600 dark:text-red-400";
			case "medium":
				return "text-yellow-600 dark:text-yellow-400";
			case "low":
				return "text-green-600 dark:text-green-400";
			default:
				return "text-gray-600 dark:text-gray-400";
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center space-x-2">
					<Brain className="w-5 h-5 text-blue-600" />
					<span>AI Recommendations</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{recommendations.map((recommendation) => (
					<div
						key={recommendation.id}
						className={`p-4 rounded-lg border ${getTypeColor(
							recommendation.type
						)} border-current/20`}
					>
						<div className="flex items-start space-x-3">
							<div className="flex-shrink-0">{recommendation.icon}</div>
							<div className="flex-1">
								<div className="flex items-center justify-between mb-2">
									<h4 className="font-medium">{recommendation.title}</h4>
									<span
										className={`text-xs font-medium ${getImpactColor(
											recommendation.impact
										)}`}
									>
										{recommendation.impact.toUpperCase()} IMPACT
									</span>
								</div>
								<p className="text-sm opacity-90 mb-3">
									{recommendation.description}
								</p>
								<Button variant="outline" size="sm" className="text-xs">
									{recommendation.action}
									<ArrowRight className="w-3 h-3 ml-1" />
								</Button>
							</div>
						</div>
					</div>
				))}

				<div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
					<div className="flex items-center space-x-2 mb-2">
						<Lightbulb className="w-4 h-4 text-yellow-600" />
						<span className="text-sm font-medium">Smart Tips</span>
					</div>
					<div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
						<p>• Set up automatic transfers to your savings account</p>
						<p>• Review your subscriptions monthly</p>
						<p>• Use the 50/30/20 rule for budgeting</p>
						<p>• Track your net worth quarterly</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
