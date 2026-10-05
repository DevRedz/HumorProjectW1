# HumorProjectW1

Minimal Next.js skeleton for the Humor Project.

Getting started

1. Install dependencies

```bash
npm install
```

Create a `.env` file with your Supabase project URL, publishable key, and server-side secret key:

```env
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
SUPABASE_SECRET_KEY="your-secret-key"
```

Use the publishable (or legacy anon) key for browser authentication. Never expose the secret/service-role key in a `NEXT_PUBLIC_` variable or browser code. The home page reads all rows from the `test data` table and renders its columns automatically.

Google sign-in redirects to `/auth/callback`. In Supabase Authentication → URL Configuration, allow both:

- `https://your-deployed-domain/auth/callback`
- `http://localhost:3000/auth/callback`

In Google Cloud, the OAuth client's authorized redirect URI must be the callback URL shown in Supabase's Google provider settings (usually `https://<project-ref>.supabase.co/auth/v1/callback`).

2. Start development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run start
```

Files added

- `package.json` — project metadata and scripts
- `next.config.js` — Next.js config
- `src/app` — App Router entry (layout and page)
- `src/app/globals.css` — global styles
- `.gitignore`

# HumorProjectW1

[Nara Lee] HumorProjectW1
