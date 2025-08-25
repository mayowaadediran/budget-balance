"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate } from "@/lib/utils";
import {
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Edit,
  Trash2,
  Download,
} from "lucide-react";
import { TransactionSummary } from "@/features/transactions/transaction-summary";
import { TransactionFilters } from "@/features/transactions/transaction-filters";

interface Transaction {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  note: string;
  date: string;
  budget: string;
  color: string;
}

export function TransactionsList() {
  // Mock data - in real app, this would come from API
  const transactions: Transaction[] = [
    {
      id: "1",
      type: "expense",
      amount: 25000,
      category: "Food & Dining",
      note: "Lunch at restaurant",
      date: "2024-01-15",
      budget: "January 2024 Budget",
      color: "bg-blue-500",
    },
    {
      id: "2",
      type: "income",
      amount: 150000,
      category: "Salary",
      note: "Monthly salary",
      date: "2024-01-14",
      budget: "January 2024 Budget",
      color: "bg-green-500",
    },
    {
      id: "3",
      type: "expense",
      amount: 50000,
      category: "Transportation",
      note: "Fuel for car",
      date: "2024-01-13",
      budget: "January 2024 Budget",
      color: "bg-orange-500",
    },
    {
      id: "4",
      type: "expense",
      amount: 80000,
      category: "Housing",
      note: "Rent payment",
      date: "2024-01-12",
      budget: "January 2024 Budget",
      color: "bg-purple-500",
    },
    {
      id: "5",
      type: "expense",
      amount: 15000,
      category: "Shopping",
      note: "Groceries",
      date: "2024-01-11",
      budget: "January 2024 Budget",
      color: "bg-pink-500",
    },
    {
      id: "6",
      type: "expense",
      amount: 12000,
      category: "Utilities",
      note: "Electricity bill",
      date: "2024-01-10",
      budget: "January 2024 Budget",
      color: "bg-red-500",
    },
  ];

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <TransactionSummary
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
      />
      <TransactionFilters />

      {/* Transactions Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Transactions</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-full ${transaction.color} flex items-center justify-center`}
                  >
                    {transaction.type === "income" ? (
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {transaction.category}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {transaction.note}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {transaction.budget}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-sm font-medium ${
                            transaction.type === "income"
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {transaction.type === "income" ? "+" : "-"}
                          {formatCurrency(transaction.amount)}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(transaction.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
