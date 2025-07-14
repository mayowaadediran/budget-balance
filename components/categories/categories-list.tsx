"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Utensils,
	Car,
	Home,
	ShoppingBag,
	Wifi,
	Heart,
	Gamepad2,
	DollarSign,
	TrendingUp,
	MoreHorizontal,
	Edit,
	Trash2,
} from "lucide-react";

interface Category {
	id: string;
	name: string;
	icon: React.ReactNode;
	color: string;
	transactionCount: number;
	totalSpent: number;
	isDefault: boolean;
}

export function CategoriesList() {
	// Mock data - in real app, this would come from API
	const categories: Category[] = [
		{
			id: "1",
			name: "Food & Dining",
			icon: <Utensils className="w-5 h-5" />,
			color: "bg-blue-500",
			transactionCount: 15,
			totalSpent: 45000,
			isDefault: true,
		},
		{
			id: "2",
			name: "Transportation",
			icon: <Car className="w-5 h-5" />,
			color: "bg-green-500",
			transactionCount: 8,
			totalSpent: 25000,
			isDefault: true,
		},
		{
			id: "3",
			name: "Housing",
			icon: <Home className="w-5 h-5" />,
			color: "bg-purple-500",
			transactionCount: 2,
			totalSpent: 80000,
			isDefault: true,
		},
		{
			id: "4",
			name: "Shopping",
			icon: <ShoppingBag className="w-5 h-5" />,
			color: "bg-orange-500",
			transactionCount: 12,
			totalSpent: 15000,
			isDefault: true,
		},
		{
			id: "5",
			name: "Utilities",
			icon: <Wifi className="w-5 h-5" />,
			color: "bg-red-500",
			transactionCount: 4,
			totalSpent: 12000,
			isDefault: true,
		},
		{
			id: "6",
			name: "Healthcare",
			icon: <Heart className="w-5 h-5" />,
			color: "bg-pink-500",
			transactionCount: 3,
			totalSpent: 8000,
			isDefault: true,
		},
		{
			id: "7",
			name: "Entertainment",
			icon: <Gamepad2 className="w-5 h-5" />,
			color: "bg-indigo-500",
			transactionCount: 6,
			totalSpent: 18000,
			isDefault: false,
		},
		{
			id: "8",
			name: "Salary",
			icon: <DollarSign className="w-5 h-5" />,
			color: "bg-emerald-500",
			transactionCount: 1,
			totalSpent: 150000,
			isDefault: false,
		},
		{
			id: "9",
			name: "Investment",
			icon: <TrendingUp className="w-5 h-5" />,
			color: "bg-teal-500",
			transactionCount: 2,
			totalSpent: 50000,
			isDefault: false,
		},
	];

	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{categories.map((category) => (
				<Card key={category.id} className="hover:shadow-lg transition-shadow">
					<CardHeader>
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-3">
								<div
									className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center`}
								>
									{category.icon}
								</div>
								<div>
									<CardTitle className="text-lg">{category.name}</CardTitle>
									{category.isDefault && (
										<span className="text-xs text-gray-500 dark:text-gray-400">
											Default Category
										</span>
									)}
								</div>
							</div>
							<Button variant="ghost" size="sm">
								<MoreHorizontal className="w-4 h-4" />
							</Button>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid grid-cols-2 gap-4 text-sm">
							<div>
								<p className="text-gray-600 dark:text-gray-400">Transactions</p>
								<p className="font-medium text-gray-900 dark:text-white">
									{category.transactionCount}
								</p>
							</div>
							<div>
								<p className="text-gray-600 dark:text-gray-400">Total Spent</p>
								<p className="font-medium text-gray-900 dark:text-white">
									₦{category.totalSpent.toLocaleString()}
								</p>
							</div>
						</div>

						<div className="flex space-x-2">
							<Button variant="outline" size="sm" className="flex-1">
								<Edit className="w-4 h-4 mr-2" />
								Edit
							</Button>
							{!category.isDefault && (
								<Button variant="outline" size="sm" className="flex-1">
									<Trash2 className="w-4 h-4 mr-2" />
									Delete
								</Button>
							)}
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
