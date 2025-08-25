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

export function CreateCategoryButton() {
	const [open, setOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		color: "",
		icon: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle category creation
		console.log("Creating category:", formData);
		setOpen(false);
		setFormData({ name: "", color: "", icon: "" });
	};

	const colors = [
		{ name: "Blue", value: "bg-blue-500" },
		{ name: "Green", value: "bg-green-500" },
		{ name: "Purple", value: "bg-purple-500" },
		{ name: "Orange", value: "bg-orange-500" },
		{ name: "Red", value: "bg-red-500" },
		{ name: "Pink", value: "bg-pink-500" },
		{ name: "Indigo", value: "bg-indigo-500" },
		{ name: "Teal", value: "bg-teal-500" },
		{ name: "Emerald", value: "bg-emerald-500" },
		{ name: "Yellow", value: "bg-yellow-500" },
	];

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>
					<Plus className="w-4 h-4 mr-2" />
					Create Category
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create New Category</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="name">Category Name</Label>
						<Input
							id="name"
							value={formData.name}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setFormData({ ...formData, name: e.target.value })
							}
							placeholder="e.g., Entertainment"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="color">Color</Label>
						<Select
							value={formData.color}
							onValueChange={(value) =>
								setFormData({ ...formData, color: value })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select color" />
							</SelectTrigger>
							<SelectContent>
								{colors.map((color) => (
									<SelectItem key={color.value} value={color.value}>
										<div className="flex items-center space-x-2">
											<div
												className={`w-4 h-4 rounded-full ${color.value}`}
											></div>
											<span>{color.name}</span>
										</div>
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="icon">Icon</Label>
						<Select
							value={formData.icon}
							onValueChange={(value) =>
								setFormData({ ...formData, icon: value })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select icon" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="utensils">🍽️ Food</SelectItem>
								<SelectItem value="car">🚗 Transportation</SelectItem>
								<SelectItem value="home">🏠 Housing</SelectItem>
								<SelectItem value="shopping">🛍️ Shopping</SelectItem>
								<SelectItem value="wifi">📡 Utilities</SelectItem>
								<SelectItem value="heart">❤️ Healthcare</SelectItem>
								<SelectItem value="gamepad">🎮 Entertainment</SelectItem>
								<SelectItem value="dollar">💰 Salary</SelectItem>
								<SelectItem value="trending">📈 Investment</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex justify-end space-x-2 pt-4">
						<Button
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
						>
							Cancel
						</Button>
						<Button type="submit">Create Category</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
