"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { CATEGORIES } from "@/lib/mock-data";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function CreateBudgetButton() {
	const [open, setOpen] = useState(false);
	const [month, setMonth] = useState(""); // YYYY-MM
	const [totalBudget, setTotalBudget] = useState("");
	const [categoryBudgets, setCategoryBudgets] = useState([
		{ category: "", amount: "" },
	]);

	// Calculate remaining
	const sumCategoryBudgets = categoryBudgets.reduce(
		(sum, cb) => sum + (parseInt(cb.amount) || 0),
		0
	);
	const remaining = (parseInt(totalBudget) || 0) - sumCategoryBudgets;

	// Add/remove category rows
	const addCategoryRow = () =>
		setCategoryBudgets([...categoryBudgets, { category: "", amount: "" }]);
	const removeCategoryRow = (idx: number) =>
		setCategoryBudgets(categoryBudgets.filter((_, i) => i !== idx));

	// Handle category/amount change
	const handleCategoryChange = (idx: number, value: string) => {
		setCategoryBudgets(
			categoryBudgets.map((cb, i) =>
				i === idx ? { ...cb, category: value } : cb
			)
		);
	};
	const handleAmountChange = (idx: number, value: string) => {
		setCategoryBudgets(
			categoryBudgets.map((cb, i) =>
				i === idx ? { ...cb, amount: value } : cb
			)
		);
	};

	// Prevent duplicate categories
	const selectedCategories = categoryBudgets.map((cb) => cb.category);

	// Handle submit
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = {
			month,
			totalBudget: parseInt(totalBudget) || 0,
			budgets: categoryBudgets
				.filter((cb) => cb.category && cb.amount)
				.map((cb) => ({
					category: cb.category,
					amount: parseInt(cb.amount) || 0,
				})),
			deficit: remaining,
		};
		// Save data (replace with actual save logic)
		console.log("Saving budget:", data);
		setOpen(false);
		setMonth("");
		setTotalBudget("");
		setCategoryBudgets([{ category: "", amount: "" }]);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>
					<Plus className="w-4 h-4 mr-2" />
					Create Budget
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Create New Budget</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="month">Month</Label>
						<Input
							id="month"
							type="month"
							value={month}
							onChange={(e) => setMonth(e.target.value)}
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="totalBudget">Total Budget (₦)</Label>
						<Input
							id="totalBudget"
							type="number"
							value={totalBudget}
							onChange={(e) => setTotalBudget(e.target.value)}
							placeholder="150000"
							required
						/>
					</div>
					<div className="space-y-2">
						<Label>Category Budgets</Label>
						<div className="space-y-2">
							{categoryBudgets.map((cb, idx) => (
								<div key={idx} className="flex items-center gap-2">
									<Select
										value={cb.category}
										onValueChange={(value) => handleCategoryChange(idx, value)}
									>
										<SelectTrigger className="w-40">
											<SelectValue placeholder="Select category" />
										</SelectTrigger>
										<SelectContent>
											{CATEGORIES.filter(
												(cat) =>
													!selectedCategories.includes(cat.name) ||
													cb.category === cat.name
											).map((cat) => (
												<SelectItem key={cat.id} value={cat.name}>
													{cat.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<Input
										type="number"
										placeholder="Amount (₦)"
										value={cb.amount}
										onChange={(e) => handleAmountChange(idx, e.target.value)}
										className="w-32"
										required
									/>
									{categoryBudgets.length > 1 && (
										<Button
											type="button"
											variant="ghost"
											onClick={() => removeCategoryRow(idx)}
										>
											Remove
										</Button>
									)}
								</div>
							))}
							<Button type="button" variant="outline" onClick={addCategoryRow}>
								+ Add Category
							</Button>
						</div>
					</div>
					<div>
						{remaining > 0 && (
							<span className="text-green-600">
								Surplus: ₦{remaining.toLocaleString()}
							</span>
						)}
						{remaining < 0 && (
							<span className="text-red-600">
								Deficit: ₦{Math.abs(remaining).toLocaleString()}
							</span>
						)}
						{remaining === 0 && <span className="text-gray-600">Balanced</span>}
					</div>
					<div className="flex justify-end space-x-2 pt-4">
						<Button
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
						>
							Cancel
						</Button>
						<Button type="submit">Save Budget</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
