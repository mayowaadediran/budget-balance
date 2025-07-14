import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { TransactionsList } from "@/components/transactions/transactions-list";
import { CreateTransactionButton } from "@/components/transactions/create-transaction-button";
import { TransactionFilters } from "@/components/transactions/transaction-filters";

export default function TransactionsPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<DashboardHeader />

			<main className="container mx-auto px-4 py-8">
				<div className="flex items-center justify-between mb-8">
					<div>
						<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
							Transactions
						</h1>
						<p className="text-gray-600 dark:text-gray-400 mt-2">
							Track your income and expenses
						</p>
					</div>
					<CreateTransactionButton />
				</div>

				<div className="mb-6">
					<TransactionFilters />
				</div>

				<Suspense fallback={<div>Loading transactions...</div>}>
					<TransactionsList />
				</Suspense>
			</main>
		</div>
	);
}
