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
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

export function CreateSavingsInvestmentButton() {
	const [open, setOpen] = useState(false);
	const [formData, setFormData] = useState({
		type: "",
		platform: "",
		amount: "",
		amountInvested: "",
		interestRate: "",
		compounding: "",
		startDate: new Date().toISOString().split("T")[0], // Today's date
		date: new Date().toISOString().split("T")[0], // Today's date
		notes: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle savings/investment creation
		console.log("Creating savings/investment:", formData);
		setOpen(false);
		setFormData({
			type: "",
			platform: "",
			amount: "",
			amountInvested: "",
			interestRate: "",
			compounding: "",
			startDate: new Date().toISOString().split("T")[0],
			date: new Date().toISOString().split("T")[0],
			notes: "",
		});
	};

	const isInvestment = formData.type === "Investment";

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>
					<Plus className="w-4 h-4 mr-2" />
					Add Entry
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Savings or Investment</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
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
								<SelectItem value="Savings">Savings</SelectItem>
								<SelectItem value="Investment">Investment</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="platform">Platform/Source</Label>
						<Input
							id="platform"
							value={formData.platform}
							onChange={(e) =>
								setFormData({ ...formData, platform: e.target.value })
							}
							placeholder="e.g., PiggyVest, Cowrywise, Stocks"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="amount">Amount (₦)</Label>
						<Input
							id="amount"
							type="number"
							value={formData.amount}
							onChange={(e) =>
								setFormData({ ...formData, amount: e.target.value })
							}
							placeholder="50000"
							required
						/>
					</div>

					{isInvestment && (
						<>
							<div className="space-y-2">
								<Label htmlFor="amountInvested">Amount Invested (₦)</Label>
								<Input
									id="amountInvested"
									type="number"
									value={formData.amountInvested}
									onChange={(e) =>
										setFormData({ ...formData, amountInvested: e.target.value })
									}
									placeholder="50000"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="interestRate">Interest Rate (% per year)</Label>
								<Input
									id="interestRate"
									type="number"
									step="0.1"
									value={formData.interestRate}
									onChange={(e) =>
										setFormData({ ...formData, interestRate: e.target.value })
									}
									placeholder="12.5"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="compounding">Compounding Frequency</Label>
								<Select
									value={formData.compounding}
									onValueChange={(value) =>
										setFormData({ ...formData, compounding: value })
									}
								>
									<SelectTrigger>
										<SelectValue placeholder="Select frequency" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="daily">Daily</SelectItem>
										<SelectItem value="monthly">Monthly</SelectItem>
										<SelectItem value="annually">Annually</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="startDate">Investment Start Date</Label>
								<Input
									id="startDate"
									type="date"
									value={formData.startDate}
									onChange={(e) =>
										setFormData({ ...formData, startDate: e.target.value })
									}
									required
								/>
							</div>
						</>
					)}

					<div className="space-y-2">
						<Label htmlFor="date">Entry Date</Label>
						<Input
							id="date"
							type="date"
							value={formData.date}
							onChange={(e) =>
								setFormData({ ...formData, date: e.target.value })
							}
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="notes">Notes (Optional)</Label>
						<Textarea
							id="notes"
							value={formData.notes}
							onChange={(e) =>
								setFormData({ ...formData, notes: e.target.value })
							}
							placeholder="e.g., Emergency fund contribution"
							rows={3}
						/>
					</div>

					<div className="flex justify-end space-x-2 pt-4">
						<Button
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
						>
							Cancel
						</Button>
						<Button type="submit">Add Entry</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
