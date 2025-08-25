"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { mockTransactions } from "@/lib/mock-data";

const MOCK_BUDGETS = [
  {
    id: "1",
    month: "2024-01",
    totalBudget: 250000,
    budgets: [
      { category: "Food", amount: 50000 },
      { category: "Transport", amount: 30000 },
      { category: "Rent", amount: 100000 },
      { category: "Utilities", amount: 20000 },
    ],
    deficit: 50000,
  },
  {
    id: "2",
    month: "2024-02",
    totalBudget: 250000,
    budgets: [
      { category: "Food", amount: 40000 },
      { category: "Transport", amount: 25000 },
      { category: "Rent", amount: 100000 },
      { category: "Utilities", amount: 15000 },
    ],
    deficit: 70000,
  },
  {
    id: "3",
    month: "2023-12",
    totalBudget: 200000,
    budgets: [
      { category: "Food", amount: 35000 },
      { category: "Transport", amount: 20000 },
      { category: "Rent", amount: 90000 },
      { category: "Utilities", amount: 10000 },
    ],
    deficit: 45000,
  },
];

function formatCurrency(amount: number) {
  return `₦${amount.toLocaleString()}`;
}

function getCategoryColor(percent: number) {
  if (percent < 80) return "bg-green-500";
  if (percent < 100) return "bg-yellow-500";
  return "bg-red-500";
}

export default function BudgetDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [budget, setBudget] = useState<any>(null);
  const [categoryBreakdown, setCategoryBreakdown] = useState<any[]>([]);

  useEffect(() => {
    const found = MOCK_BUDGETS.find((b) => b.id === id);
    setBudget(found);
    if (found) {
      // Get month and year for filtering transactions
      const [year, month] = found.month.split("-");
      // For each budgeted category, calculate actual spent
      const breakdown = found.budgets.map((cat: any) => {
        // Find all transactions for this category and month
        const spent = mockTransactions
          .filter(
            (t) =>
              t.type === "expense" &&
              t.category.toLowerCase().includes(cat.category.toLowerCase()) &&
              t.date.startsWith(`${year}-${month}`)
          )
          .reduce((sum, t) => sum + t.amount, 0);
        const remaining = cat.amount - spent;
        const percentUsed =
          cat.amount === 0 ? 0 : Math.round((spent / cat.amount) * 100);
        return {
          category: cat.category,
          budgeted: cat.amount,
          spent,
          remaining,
          percentUsed,
        };
      });
      setCategoryBreakdown(breakdown);
    }
  }, [id]);

  if (!budget) {
    return <div className="p-8">Budget not found.</div>;
  }

  const totalSpent = categoryBreakdown.reduce((sum, c) => sum + c.spent, 0);
  const totalRemaining = budget.totalBudget - totalSpent;
  const monthLabel = new Date(budget.month + "-01").toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Button variant="outline" onClick={() => router.back()} className="mb-4">
        Back
      </Button>
      <Card className="p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-2">Budget for {monthLabel}</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <div className="text-gray-500 text-sm">Total Budget</div>
            <div className="text-xl font-bold">
              {formatCurrency(budget.totalBudget)}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">Total Spent</div>
            <div className="text-xl font-bold text-red-600">
              {formatCurrency(totalSpent)}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm">Total Remaining</div>
            <div className="text-xl font-bold text-green-600">
              {formatCurrency(totalRemaining)}
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Category Breakdown</h3>
          <div className="space-y-4">
            {categoryBreakdown.map((cat) => (
              <div
                key={cat.category}
                className="p-4 rounded-lg border bg-white dark:bg-gray-900"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{cat.category}</span>
                  <span className="text-xs">{cat.percentUsed}% used</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>
                    Budgeted:{" "}
                    <span className="font-semibold">
                      {formatCurrency(cat.budgeted)}
                    </span>
                  </span>
                  <span>
                    Spent:{" "}
                    <span className="font-semibold text-red-600">
                      {formatCurrency(cat.spent)}
                    </span>
                  </span>
                  <span>
                    Remaining:{" "}
                    <span className="font-semibold text-green-600">
                      {formatCurrency(cat.remaining)}
                    </span>
                  </span>
                </div>
                <Progress
                  value={Math.min(cat.percentUsed, 100)}
                  className="h-2"
                  indicatorClassName={getCategoryColor(cat.percentUsed)}
                />
                <div className="flex justify-end mt-1">
                  {cat.percentUsed < 80 && (
                    <span className="text-green-600 text-xs font-medium">
                      ✅ Good
                    </span>
                  )}
                  {cat.percentUsed >= 80 && cat.percentUsed <= 100 && (
                    <span className="text-yellow-600 text-xs font-medium">
                      ⚠️ Caution
                    </span>
                  )}
                  {cat.percentUsed > 100 && (
                    <span className="text-red-600 text-xs font-medium">
                      ❌ Over budget
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
