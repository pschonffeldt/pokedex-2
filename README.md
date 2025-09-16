# Pokémon Explorer

Discover, learn, and explore the world of Pokémon in one simple web app.

A Next.js 15 + TypeScript + Tailwind v4 web app for exploring Pokémon data.

---

## Quick Start

1. **Clone the repo**
   git clone git@github.com:username/pokemon-explorer.git
   cd pokemon-explorer

2. **Install dependencies**
   npm install

3. **Set environment variables**  
   Copy the example file and fill in real values:
   cp .env.example .env

4. **Run the development server**
   npm run dev

   The app will be available at:
   - Local: http://localhost:3000
   - Network (LAN): http://192.168.x.x:3000

---

## Environment Variables

Use the `.env.example` file as a template and explain each key’s purpose and whether it’s required or optional.

| Variable            | Description                                         | Required |
| ------------------- | --------------------------------------------------- | -------- |
| DATABASE_URL        | Database connection string (e.g. PostgreSQL, MySQL) | Yes      |
| NEXT_PUBLIC_API_KEY | Public API key for frontend requests                | Yes      |

---

## Useful Commands

These scripts are available in `package.json`:

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| npm run dev       | Start the development server                  |
| npm run build     | Create a production build                     |
| npm run start     | Run the production build                      |
| npm run lint      | Lint the code with ESLint                     |
| npm run typecheck | Check TypeScript types without emitting files |
| npm run format    | Format code using Prettier                    |

---

## Project Structure

src/
app/
layout.tsx
page.tsx
not-found.tsx
lib/
styles/
public/

- src/app/ – App Router pages and layouts
- src/lib/ – Shared utilities and helpers
- src/styles/ – Global and component-specific styles
- public/ – Static assets (images, icons, etc.)

---

## Deployment

This project can be deployed on Vercel or a similar platform.

1. Add all environment variables listed in `.env.example` to your hosting provider’s environment settings.
2. Run the build command:
   npm run build
3. Start the production server:
   npm run start

---

## Built With

- Next.js 15 – React framework for production apps
- TypeScript – Strongly typed JavaScript
- Tailwind CSS v4 – Utility-first CSS framework
- ESLint + Prettier – Code quality and formatting

---

## License

This project is licensed under the MIT License.
