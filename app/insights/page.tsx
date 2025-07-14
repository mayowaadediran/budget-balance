import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { InsightsOverview } from "@/components/insights/insights-overview";
import { SpendingAnalytics } from "@/components/insights/spending-analytics";
import { AIRecommendations } from "@/components/insights/ai-recommendations";

export default function InsightsPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<DashboardHeader />

			<main className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
						Financial Insights
					</h1>
					<p className="text-gray-600 dark:text-gray-400 mt-2">
						AI-powered analysis of your spending patterns and financial health
					</p>
				</div>

				<div className="grid gap-8">
					<Suspense fallback={<div>Loading insights...</div>}>
						<InsightsOverview />
					</Suspense>

					<div className="grid lg:grid-cols-2 gap-8">
						<Suspense fallback={<div>Loading analytics...</div>}>
							<SpendingAnalytics />
						</Suspense>

						<Suspense fallback={<div>Loading recommendations...</div>}>
							<AIRecommendations />
						</Suspense>
					</div>
				</div>
			</main>
		</div>
	);
}
