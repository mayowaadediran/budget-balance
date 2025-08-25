"use client";

import { Suspense } from "react";
import { DashboardStats } from "@/features/home/stats";
import { RecentTransactions } from "@/features/home/recent-transactions";
import { BudgetOverview } from "@/features/home/budget-overview";
import { AIInsights } from "@/features/home/ai-insights";
import { WelcomeBanner } from "@/components/onboarding/welcome-banner";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function HomePage() {
  const { user } = useUser();
  const currentTime = new Date().getHours();
  let greeting = "Good morning";
  if (currentTime >= 12 && currentTime < 17) {
    greeting = "Good afternoon";
  } else if (currentTime >= 17) {
    greeting = "Good evening";
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Welcome Banner for New Users */}
      <WelcomeBanner />

      {/* Welcome Section */}
      <div className="mb-8">
        {/* Today's Summary */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="mb-2">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {greeting}, {user?.firstName}! 👋
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400"></p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Welcome back to your financial dashboard <br />
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              You&apos;re doing great! Your savings are growing and you&apos;re
              staying within budget. Keep up the excellent financial habits! 💪
            </p>
          </CardContent>
        </Card>
      </div>

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
  );
}
