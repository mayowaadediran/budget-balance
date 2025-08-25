import { Suspense } from "react";
import { CategoriesList } from "@/features/categories/categories-list";
import { CreateCategoryButton } from "@/features/categories/create-category-button";

export default function CategoriesPage() {
  return (
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
  );
}
