"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockSavingsInvestments } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";

export function SavingsInvestmentsList() {
	// Sort entries by date (newest first)
	const sortedEntries = [...mockSavingsInvestments].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return (
		<Card className="rounded-xl bg-white p-4 shadow-md">
			<CardHeader>
				<CardTitle className="text-lg">Recent Entries</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b">
								<th className="text-left py-2 px-2 text-sm font-medium text-gray-600">
									Type
								</th>
								<th className="text-left py-2 px-2 text-sm font-medium text-gray-600">
									Platform
								</th>
								<th className="text-right py-2 px-2 text-sm font-medium text-gray-600">
									Amount
								</th>
								<th className="text-left py-2 px-2 text-sm font-medium text-gray-600">
									Date
								</th>
								<th className="text-left py-2 px-2 text-sm font-medium text-gray-600">
									Notes
								</th>
							</tr>
						</thead>
						<tbody>
							{sortedEntries.map((entry) => (
								<tr key={entry.id} className="border-b hover:bg-gray-50">
									<td className="py-3 px-2">
										<span
											className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
												entry.type === "Savings"
													? "bg-green-100 text-green-800"
													: "bg-blue-100 text-blue-800"
											}`}
										>
											{entry.type}
										</span>
									</td>
									<td className="py-3 px-2 font-medium">{entry.platform}</td>
									<td className="py-3 px-2 text-right font-semibold">
										{formatCurrency(entry.amount)}
									</td>
									<td className="py-3 px-2 text-sm text-gray-600">
										{formatDate(entry.date)}
									</td>
									<td className="py-3 px-2 text-sm text-gray-600 max-w-xs truncate">
										{entry.notes}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</CardContent>
		</Card>
	);
}
