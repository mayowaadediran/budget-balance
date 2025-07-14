"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter } from "lucide-react";

export function TransactionFilters() {
	return (
		<Card>
			<CardContent className="p-4">
				<div className="flex flex-col md:flex-row gap-4">
					{/* Search */}
					<div className="flex-1">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
							<Input placeholder="Search transactions..." className="pl-10" />
						</div>
					</div>

					{/* Type Filter */}
					<div className="w-full md:w-32">
						<Select defaultValue="all">
							<SelectTrigger>
								<SelectValue placeholder="Type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Types</SelectItem>
								<SelectItem value="income">Income</SelectItem>
								<SelectItem value="expense">Expense</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Category Filter */}
					<div className="w-full md:w-40">
						<Select defaultValue="all">
							<SelectTrigger>
								<SelectValue placeholder="Category" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Categories</SelectItem>
								<SelectItem value="food">Food & Dining</SelectItem>
								<SelectItem value="transport">Transportation</SelectItem>
								<SelectItem value="housing">Housing</SelectItem>
								<SelectItem value="shopping">Shopping</SelectItem>
								<SelectItem value="utilities">Utilities</SelectItem>
								<SelectItem value="healthcare">Healthcare</SelectItem>
								<SelectItem value="entertainment">Entertainment</SelectItem>
								<SelectItem value="salary">Salary</SelectItem>
								<SelectItem value="investment">Investment</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Date Range */}
					<div className="w-full md:w-40">
						<Select defaultValue="all">
							<SelectTrigger>
								<SelectValue placeholder="Date Range" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Time</SelectItem>
								<SelectItem value="today">Today</SelectItem>
								<SelectItem value="week">This Week</SelectItem>
								<SelectItem value="month">This Month</SelectItem>
								<SelectItem value="quarter">This Quarter</SelectItem>
								<SelectItem value="year">This Year</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Sort By */}
					<div className="w-full md:w-32">
						<Select defaultValue="date">
							<SelectTrigger>
								<SelectValue placeholder="Sort by" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="date">Date</SelectItem>
								<SelectItem value="amount">Amount</SelectItem>
								<SelectItem value="category">Category</SelectItem>
								<SelectItem value="type">Type</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Filter Button */}
					<Button variant="outline" className="w-full md:w-auto">
						<Filter className="w-4 h-4 mr-2" />
						Filters
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
