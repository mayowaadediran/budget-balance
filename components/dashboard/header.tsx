"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Plus, Bell, Search, Menu, User } from "lucide-react";

export function DashboardHeader() {
	return (
		<header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					{/* Logo and Navigation */}
					<div className="flex items-center space-x-8">
						<Link href="/dashboard" className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
								<TrendingUp className="w-5 h-5 text-white" />
							</div>
							<span className="text-xl font-bold text-gray-900 dark:text-white">
								Budget Balance
							</span>
						</Link>

						{/* Navigation Links */}
						<nav className="hidden md:flex items-center space-x-6">
							<Link href="/dashboard">
								<Button
									variant="ghost"
									className="text-gray-700 dark:text-gray-300"
								>
									Dashboard
								</Button>
							</Link>
							<Link href="/budgets">
								<Button
									variant="ghost"
									className="text-gray-700 dark:text-gray-300"
								>
									Budgets
								</Button>
							</Link>
							<Link href="/transactions">
								<Button
									variant="ghost"
									className="text-gray-700 dark:text-gray-300"
								>
									Transactions
								</Button>
							</Link>
							<Link href="/categories">
								<Button
									variant="ghost"
									className="text-gray-700 dark:text-gray-300"
								>
									Categories
								</Button>
							</Link>
							<Link href="/insights">
								<Button
									variant="ghost"
									className="text-gray-700 dark:text-gray-300"
								>
									Insights
								</Button>
							</Link>
						</nav>
					</div>

					{/* Right Side Actions */}
					<div className="flex items-center space-x-4">
						{/* Search */}
						<div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
							<Search className="w-4 h-4 text-gray-500" />
							<input
								type="text"
								placeholder="Search..."
								className="bg-transparent border-none outline-none text-sm text-gray-700 dark:text-gray-300 placeholder-gray-500"
							/>
						</div>

						{/* Quick Add Button */}
						<Button size="sm" className="hidden md:flex">
							<Plus className="w-4 h-4 mr-2" />
							Add Transaction
						</Button>

						{/* Notifications */}
						<Button variant="ghost" size="sm" className="relative">
							<Bell className="w-5 h-5" />
							<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
						</Button>

						{/* Mobile Menu */}
						<Button variant="ghost" size="sm" className="md:hidden">
							<Menu className="w-5 h-5" />
						</Button>

						{/* Mock User Avatar */}
						<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
							<User className="w-4 h-4 text-white" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
