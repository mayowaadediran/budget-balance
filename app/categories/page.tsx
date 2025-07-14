import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/header";
import { CategoriesList } from "@/components/categories/categories-list";
import { CreateCategoryButton } from "@/components/categories/create-category-button";

export default function CategoriesPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<DashboardHeader />

			<main className="container mx-auto px-4 py-8">
				<div className="flex items-center justify-between mb-8">
					<div>
						<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
							Categories
						</h1>
						<p className="text-gray-600 dark:text-gray-400 mt-2">
							Manage your budget categories and spending classifications
						</p>
					</div>
					<CreateCategoryButton />
				</div>

				<Suspense fallback={<div>Loading categories...</div>}>
					<CategoriesList />
				</Suspense>
			</main>
		</div>
	);
}
