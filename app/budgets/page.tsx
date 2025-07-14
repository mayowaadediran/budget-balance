import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { BudgetsList } from "@/components/budgets/budgets-list";
import { CreateBudgetButton } from "@/components/budgets/create-budget-button";

export default function BudgetsPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<DashboardHeader />

			<main className="container mx-auto px-4 py-8">
				<div className="flex items-center justify-between mb-8">
					<div>
						<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
							Budgets
						</h1>
						<p className="text-gray-600 dark:text-gray-400 mt-2">
							Manage your budgets and track your spending
						</p>
					</div>
					<CreateBudgetButton />
				</div>

				<Suspense fallback={<div>Loading budgets...</div>}>
					<BudgetsList />
				</Suspense>
			</main>
		</div>
	);
}
