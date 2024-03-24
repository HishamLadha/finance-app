## To be worked on:

### Pages

#### Home/ Dashboard

- [ ] Work on the monthly spending feature (needs to track only the spending over the last month. Each month, the spending should be reset to 0)
- The above can be done by scheduling a cron job using supabase edge functions. To watch: https://www.youtube.com/watch?v=-U6DJcjVvGo
- [ ] Work on the Chart feature
- [ ] Potentially update schema to make it easier to query for the chart feature

#### Transactions

- [x] Transactions page - Should display all transactions in a table format with pagination.
- [ ] Work on edit transaction feature (currently disabled)
- [ ] Work on delete transaction feature (currently disabled)

#### Accounts

- [ ] When a user makes a transaction, money is deducted from an account (maybe they choose an account to deduct from or they set a default account).
- [ ] Work on the feature where a user can transfer money between accounts
- [ ] Work on the edit account feature (current not functional)

#### Backlog/ Maintenance

- [ ] Work on responsiveness for different screen sizes
- [ ] Modify component names to be Pascal case instead of camelCase

#### Future features

- [ ] Look into integrating plaid API
- [x] Add email verification upon sign up
- [ ] Need to add custom SMTP server as the current supabase limit is 3 emails/hour
- [ ] Add a feature to allow users to reset their password
- [ ] Potentially make the switch to a self hosted instance of Supabase

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
