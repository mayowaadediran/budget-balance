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

export function CreateBudgetButton() {
	const [open, setOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		totalAmount: "",
		startDate: "",
		endDate: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle budget creation
		console.log("Creating budget:", formData);
		setOpen(false);
		setFormData({ name: "", totalAmount: "", startDate: "", endDate: "" });
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>
					<Plus className="w-4 h-4 mr-2" />
					Create Budget
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create New Budget</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="name">Budget Name</Label>
						<Input
							id="name"
							value={formData.name}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setFormData({ ...formData, name: e.target.value })
							}
							placeholder="e.g., January 2024 Budget"
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="totalAmount">Total Amount (₦)</Label>
						<Input
							id="totalAmount"
							type="number"
							value={formData.totalAmount}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setFormData({ ...formData, totalAmount: e.target.value })
							}
							placeholder="250000"
							required
						/>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="startDate">Start Date</Label>
							<Input
								id="startDate"
								type="date"
								value={formData.startDate}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setFormData({ ...formData, startDate: e.target.value })
								}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="endDate">End Date</Label>
							<Input
								id="endDate"
								type="date"
								value={formData.endDate}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setFormData({ ...formData, endDate: e.target.value })
								}
								required
							/>
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
						<Button type="submit">Create Budget</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
