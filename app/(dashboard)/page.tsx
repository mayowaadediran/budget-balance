import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardStats } from "@/components/dashboard/stats";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { BudgetOverview } from "@/components/dashboard/budget-overview";
import { AIInsights } from "@/components/dashboard/ai-insights";

export default function DashboardPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<DashboardHeader />

			<main className="container mx-auto px-4 py-8">
				<div className="grid gap-8">
					{/* Stats Overview */}
					<Suspense fallback={<div>Loading stats...</div>}>
						<DashboardStats />
					</Suspense>

					<div className="grid lg:grid-cols-2 gap-8">
						{/* Budget Overview */}
						<Suspense fallback={<div>Loading budgets...</div>}>
							<BudgetOverview />
						</Suspense>

						{/* Recent Transactions */}
						<Suspense fallback={<div>Loading transactions...</div>}>
							<RecentTransactions />
						</Suspense>
					</div>

					{/* AI Insights */}
					<Suspense fallback={<div>Loading insights...</div>}>
						<AIInsights />
					</Suspense>
				</div>
			</main>
		</div>
	);
}
