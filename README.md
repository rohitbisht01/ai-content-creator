# AI Content Creator

AI Content Creator is an application designed to generate customized content based on user input. It supports creating content for popular platforms like YouTube, Twitter, LinkedIn, and Instagram

### User Features:

- **User Authentication**: Secure login and logout using clerk.
- **Content Creation**: Generate tailored content for multiple social media platforms, including:
  - YouTube descriptions
  - Twitter posts
  - Instagram posts
  - LinkedIn posts
- **Subscription based**: Access premium features through a subscription plan.

## Installation and Setup

1. **Clone the repository**:
   ```
   git clone git@github.com:rohitbisht01/ai-content-creator.git
   ```
2. **Install Dependencies**:

   ```
   npm install
   ```

3. **Environment Variables**: Create a .env file and add the necessary configuration:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. **Run the application:**

   ```
   cd frontend
   npm run dev
   ```
