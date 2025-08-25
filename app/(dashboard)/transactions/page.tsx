import { Suspense } from "react";
import { TransactionsList } from "@/features/transactions/transactions-list";
import { CreateTransactionButton } from "@/features/transactions/create-transaction-button";

export default function TransactionsPage() {
  return (
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

      <Suspense fallback={<div>Loading transactions...</div>}>
        <TransactionsList />
      </Suspense>
    </main>
  );
}
