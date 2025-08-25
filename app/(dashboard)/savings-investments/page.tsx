"use client";

import { Suspense } from "react";
import { SavingsInvestmentsList } from "@/features/savings-investments/savings-investments-list";
import { CreateSavingsInvestmentButton } from "@/features/savings-investments/create-savings-investment-button";
import { SavingsInvestmentsSummary } from "@/features/savings-investments/savings-investments-summary";
import { SavingsInvestmentsBreakdown } from "@/features/savings-investments/savings-investments-breakdown";

export default function SavingsInvestmentsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Savings & Investments
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Track your savings and investment activities
          </p>
        </div>
        <CreateSavingsInvestmentButton />
      </div>

      <div className="grid gap-8">
        {/* Summary Cards */}
        <Suspense fallback={<div>Loading summary...</div>}>
          <SavingsInvestmentsSummary />
        </Suspense>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Platform Breakdown */}
          <Suspense fallback={<div>Loading breakdown...</div>}>
            <SavingsInvestmentsBreakdown />
          </Suspense>

          {/* Recent Entries */}
          <Suspense fallback={<div>Loading entries...</div>}>
            <SavingsInvestmentsList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
