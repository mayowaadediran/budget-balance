import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	TrendingUp,
	Shield,
	Brain,
	BarChart3,
	Zap,
	ArrowRight,
	CheckCircle,
} from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
			{/* Header */}
			<header className="container mx-auto px-4 py-6">
				<nav className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
							<TrendingUp className="w-5 h-5 text-white" />
						</div>
						<span className="text-xl font-bold text-gray-900 dark:text-white">
							Budget Balance
						</span>
					</div>
					<div className="flex items-center space-x-4">
						<Link href="/sign-in">
							<Button variant="ghost">Sign In</Button>
						</Link>
						<Link href="/sign-up">
							<Button>Get Started</Button>
						</Link>
					</div>
				</nav>
			</header>

			{/* Hero Section */}
			<section className="container mx-auto px-4 py-20 text-center">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
						Master Your Money with
						<span className="text-blue-600 dark:text-blue-400">
							{" "}
							AI-Powered
						</span>{" "}
						Insights
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
						Take control of your finances with intelligent budgeting, real-time
						tracking, and personalized AI insights to help you save more and
						spend smarter.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/sign-up">
							<Button size="lg" className="text-lg px-8 py-3">
								Start Free Trial
								<ArrowRight className="ml-2 w-5 h-5" />
							</Button>
						</Link>
						<Link href="/dashboard">
							<Button variant="outline" size="lg" className="text-lg px-8 py-3">
								View Demo
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="container mx-auto px-4 py-20">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Everything You Need to Manage Your Money
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Powerful features designed to help you track, analyze, and optimize
						your spending habits.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
						<CardHeader>
							<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
								<BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
							</div>
							<CardTitle className="text-xl">Smart Budgeting</CardTitle>
							<CardDescription>
								Create custom budgets with categories and track your spending in
								real-time with visual progress indicators.
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
						<CardHeader>
							<div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
								<Brain className="w-6 h-6 text-green-600 dark:text-green-400" />
							</div>
							<CardTitle className="text-xl">AI Insights</CardTitle>
							<CardDescription>
								Get personalized financial advice and spending pattern analysis
								powered by advanced AI.
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
						<CardHeader>
							<div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
								<Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
							</div>
							<CardTitle className="text-xl">Secure & Private</CardTitle>
							<CardDescription>
								Bank-level security with end-to-end encryption and complete data
								privacy protection.
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
						<CardHeader>
							<div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
								<Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
							</div>
							<CardTitle className="text-xl">Quick Transactions</CardTitle>
							<CardDescription>
								Add transactions instantly with smart category suggestions and
								quick entry forms.
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
						<CardHeader>
							<div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
								<TrendingUp className="w-6 h-6 text-red-600 dark:text-red-400" />
							</div>
							<CardTitle className="text-xl">Analytics Dashboard</CardTitle>
							<CardDescription>
								Beautiful charts and graphs to visualize your spending patterns
								and financial progress.
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
						<CardHeader>
							<div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
								<CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
							</div>
							<CardTitle className="text-xl">Goal Tracking</CardTitle>
							<CardDescription>
								Set financial goals and track your progress with automated
								reminders and milestones.
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</section>

			{/* CTA Section */}
			<section className="container mx-auto px-4 py-20">
				<div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Ready to Take Control of Your Finances?
					</h2>
					<p className="text-xl mb-8 opacity-90">
						Join thousands of users who are already saving more and spending
						smarter.
					</p>
					<Link href="/sign-up">
						<Button size="lg" variant="secondary" className="text-lg px-8 py-3">
							Start Your Free Trial
							<ArrowRight className="ml-2 w-5 h-5" />
						</Button>
					</Link>
				</div>
			</section>

			{/* Footer */}
			<footer className="container mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-700">
				<div className="text-center text-gray-600 dark:text-gray-400">
					<p>&copy; 2024 Budget Balance. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
