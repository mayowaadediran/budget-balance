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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

export function CreateTransactionButton() {
	const [open, setOpen] = useState(false);
	const [formData, setFormData] = useState({
		type: "",
		amount: "",
		category: "",
		note: "",
		date: "",
		budget: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle transaction creation
		console.log("Creating transaction:", formData);
		setOpen(false);
		setFormData({
			type: "",
			amount: "",
			category: "",
			note: "",
			date: "",
			budget: "",
		});
	};

	const categories = [
		"Food & Dining",
		"Transportation",
		"Housing",
		"Shopping",
		"Utilities",
		"Healthcare",
		"Entertainment",
		"Salary",
		"Investment",
		"Other",
	];

	const budgets = ["January 2024 Budget", "February 2024 Budget"];

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>
					<Plus className="w-4 h-4 mr-2" />
					Add Transaction
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add New Transaction</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="type">Type</Label>
							<Select
								value={formData.type}
								onValueChange={(value) =>
									setFormData({ ...formData, type: value })
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="income">Income</SelectItem>
									<SelectItem value="expense">Expense</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="amount">Amount (₦)</Label>
							<Input
								id="amount"
								type="number"
								value={formData.amount}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setFormData({ ...formData, amount: e.target.value })
								}
								placeholder="25000"
								required
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="category">Category</Label>
						<Select
							value={formData.category}
							onValueChange={(value) =>
								setFormData({ ...formData, category: value })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select category" />
							</SelectTrigger>
							<SelectContent>
								{categories.map((category) => (
									<SelectItem key={category} value={category}>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="note">Note</Label>
						<Input
							id="note"
							value={formData.note}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setFormData({ ...formData, note: e.target.value })
							}
							placeholder="Brief description of the transaction"
							required
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="date">Date</Label>
							<Input
								id="date"
								type="date"
								value={formData.date}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setFormData({ ...formData, date: e.target.value })
								}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="budget">Budget</Label>
							<Select
								value={formData.budget}
								onValueChange={(value) =>
									setFormData({ ...formData, budget: value })
								}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select budget" />
								</SelectTrigger>
								<SelectContent>
									{budgets.map((budget) => (
										<SelectItem key={budget} value={budget}>
											{budget}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="flex justify-end space-x-2 pt-4">
						<Button
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
						>
							Cancel
						</Button>
						<Button type="submit">Add Transaction</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
