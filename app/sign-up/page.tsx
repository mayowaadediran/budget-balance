import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
			<div className="w-full max-w-md">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
						Create Account
					</h1>
					<p className="text-gray-600 dark:text-gray-400">
						Join Budget Balance and take control of your finances
					</p>
				</div>
				<SignUp
					appearance={{
						elements: {
							rootBox: "mx-auto",
							card: "shadow-xl border-0 bg-white dark:bg-gray-900",
							headerTitle: "text-2xl font-bold text-gray-900 dark:text-white",
							headerSubtitle: "text-gray-600 dark:text-gray-400",
							socialButtonsBlockButton:
								"bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600",
							formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
							footerActionLink:
								"text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
							formFieldInput:
								"bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white",
							formFieldLabel: "text-gray-700 dark:text-gray-300",
						},
					}}
				/>
			</div>
		</div>
	);
}
