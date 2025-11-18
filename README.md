# n8n - Workflow Automation Platform

A modern, full-stack workflow automation platform built with Next.js 16, featuring AI integration, authentication, and subscription management. This project provides a powerful foundation for creating and managing automated workflows with a beautiful, responsive user interface.

## 🚀 Features

- **Workflow Management**: Create, edit, and manage automated workflows
- **AI Integration**: Built-in support for Google Gemini via AI SDK
- **Authentication**: Secure user authentication with Better Auth
- **Subscription Management**: Integrated billing with Polar.sh
- **Real-time Updates**: Live workflow execution and monitoring
- **Responsive Design**: Modern UI built with SHADCN UI and Tailwind CSS
- **Database Integration**: PostgreSQL with Prisma ORM
- **Type Safety**: Full TypeScript support with tRPC for end-to-end type safety

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with concurrent feature
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **SHADCN UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **React Query (TanStack Query)** - Server state management
- **Nuqs** - Type-safe URL and search params utilities
- **React Error Boundary** - Declarative error boundaries for React components 
- **Sonner** - Beautiful toast notifications for React apps

### Backend
- **tRPC** - End-to-end typesafe APIs
- **Better Auth** - Modern authentication solution
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **Inngest** - Background job processing

### AI & Integrations
- **AI SDK** - AI model integration
- **Google Gemini** - via `@ai-sdk/google`
- **Polar.sh** - Subscription and billing management

### Development Tools
- **Biome** - Fast linter and formatter
- **Sentry** - Error monitoring and performance tracking
- **Turbopack** - Fast bundling for development

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd n8n
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill out the values in `.env.local`. See `.env.example` for all required and optional variables.

4. **Set up the database**
   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard pages
│   └── api/               # API routes
├── components/            # Reusable UI components
│   └── ui/               # Radix UI components
├── features/             # Feature-based modules
│   ├── auth/             # Authentication features
│   ├── subscriptions/    # Billing features
│   └── workflows/        # Workflow management
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
│   ├── auth.ts          # Authentication configuration
│   ├── db.ts            # Database connection
│   └── utils.ts         # Utility functions
├── trpc/                 # tRPC configuration
│   └── routers/         # API route handlers
└── inngest/             # Background job functions
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

## 🎯 Key Features

### Workflow Management
- Create and manage automated workflows
- Visual workflow builder interface
- Real-time workflow execution
- Workflow templates and sharing

### Authentication & Authorization
- Email/password authentication
- OAuth integration ready
- Session management
- Protected routes

### AI Integration
- AI-powered workflow suggestions
- Natural language workflow creation

### Subscription Management
- Stripe integration via Polar.sh
- Multiple subscription tiers
- Usage-based billing
- Customer portal

