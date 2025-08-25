import { Suspense } from "react";
import { BudgetsList } from "@/features/budgets/budgets-list";
import { CreateBudgetButton } from "@/features/budgets/create-budget-button";

export default function BudgetsPage() {
  return (
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
  );
}
