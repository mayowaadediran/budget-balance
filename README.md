# Budget Balance - AI-Powered Personal Finance Management

A modern, comprehensive personal finance management web application built with Next.js, featuring AI-powered insights and beautiful analytics.

## 🚀 Features

### Core Functionality
- **User Authentication** - Secure login/signup using Clerk
- **Budget Management** - Create and track monthly or custom time-frame budgets
- **Category Management** - Custom budget categories with visual indicators
- **Transaction Tracking** - Add, edit, and delete transactions with smart categorization
- **Real-time Analytics** - Beautiful charts and progress indicators
- **AI-Powered Insights** - OpenAI integration for personalized financial advice

### Key Features
- 📊 **Dashboard Overview** - Real-time financial metrics and spending insights
- 💰 **Budget Tracking** - Visual progress bars and category breakdowns
- 📈 **Analytics** - Monthly trends and spending patterns
- 🤖 **AI Assistant** - Personalized financial recommendations and insights
- 🎨 **Modern UI** - Clean, responsive design with dark/light mode support
- 🔒 **Secure** - Row-level security with Supabase

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL)
- **AI**: OpenAI API
- **Styling**: Tailwind CSS, shadcn/ui
- **Charts**: Custom analytics components
- **Icons**: Lucide React

## 📁 Project Structure

```
budget-balance/
├── app/                          # Next.js app directory
│   ├── (dashboard)/              # Dashboard pages
│   ├── budgets/                  # Budget management
│   ├── transactions/             # Transaction tracking
│   ├── categories/               # Category management
│   ├── insights/                 # AI insights & analytics
│   ├── sign-in/                  # Authentication pages
│   └── sign-up/
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── dashboard/               # Dashboard components
│   ├── budgets/                 # Budget components
│   ├── transactions/            # Transaction components
│   ├── categories/              # Category components
│   └── insights/                # Analytics components
├── lib/                         # Utility functions
├── types/                       # TypeScript interfaces
└── supabase-schema.sql          # Database schema
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Clerk account
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/budget-balance.git
   cd budget-balance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # OpenAI
   OPENAI_API_KEY=your_openai_api_key

   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up the database**
   - Create a new Supabase project
   - Run the SQL schema from `supabase-schema.sql`
   - Configure Row Level Security policies

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application uses the following main tables:

- **users** - User profiles and preferences
- **budgets** - Budget definitions and timeframes
- **categories** - Spending categories with colors and icons
- **budget_categories** - Category allocations within budgets
- **transactions** - Income and expense records
- **ai_insights** - AI-generated financial insights
- **user_preferences** - User settings and preferences

All tables include Row Level Security (RLS) for data protection.

## 🎨 UI Components

Built with shadcn/ui for consistent, accessible components:
- Cards, Buttons, Dialogs
- Progress bars and charts
- Form inputs and selects
- Navigation and layout components

## 🤖 AI Features

### OpenAI Integration
- **Spending Analysis** - Pattern recognition and trend analysis
- **Personalized Recommendations** - Actionable financial advice
- **Smart Categorization** - Automatic transaction categorization
- **Budget Optimization** - AI-suggested budget adjustments

### AI Insights Include
- Savings rate analysis
- Spending pattern identification
- Investment opportunities
- Budget optimization suggestions
- Financial health scoring

## 🔒 Security Features

- **Authentication** - Clerk handles user authentication
- **Row Level Security** - Supabase RLS policies
- **Data Encryption** - End-to-end encryption
- **API Protection** - Secure API routes
- **Input Validation** - Comprehensive form validation

## 📱 Responsive Design

- Mobile-first approach
- Responsive navigation
- Touch-friendly interfaces
- Optimized for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy with one click

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Clerk](https://clerk.com/) for authentication
- [Supabase](https://supabase.com/) for database
- [OpenAI](https://openai.com/) for AI capabilities
- [Lucide](https://lucide.dev/) for icons

## 📞 Support

For support, email support@budgetbalance.com or create an issue in this repository.

---

**Budget Balance** - Take control of your finances with AI-powered insights! 💰✨

