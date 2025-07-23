<p align="center">
  <img src="https://raw.githubusercontent.com/AhmeddSaid/reelradar/refs/heads/master/public/assets/images/reelradar-banner.png" alt="ReelRadar banner" />
</p>

# 🎬 ReelRadar

**ReelRadar** is a sleek and responsive movie discovery app built with **Next.js 15**, **React 19**, and **Tailwind CSS**. Powered by the [OMDb API](https://www.omdbapi.com/), it offers fast and accurate movie lookups with a modern UI.

Whether you're hunting for a nostalgic classic or the latest blockbuster, ReelRadar makes finding, filtering, and saving your favorite films effortless.

---

## 📸 Preview

<p align="center">
  <a href="https://reelradar.ahmedsaidadnan.com" target="_blank" style="
    display: inline-block;
    background-color: #e50914;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
  ">
    🔗 View Live Preview
  </a>
</p>

---

## 🔍 Features

- 🔎 **Search** by movie title
- 🗂️ **Filter** by year and type
- 📄 **Pagination** with clean navigation between pages
- 📄 **Detailed movie view** with full plot and metadata
- ❤️ **Favorites system** (stored locally)
- ⚠️ **404 and error boundary** pages for graceful failure
- ⚡ Fast, responsive, and SEO-friendly
- 🎨 Clean UI with **Tailwind CSS**

---

## 🚀 Tech Stack

- ⚛️ [Next.js 15](https://nextjs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🔥 [React 19](https://react.dev/)
- 🌐 [Axios](https://axios-http.com/)
- 🎞️ [OMDb API](https://www.omdbapi.com/)
- 🧩 [UIVerse](https://uiverse.io/) – for stylish UI component inspiration
- 🔔 [react-hot-toast](https://react-hot-toast.com/) for elegant toast notifications
- 🔧 TypeScript, ESLint, Prettier, Husky

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/AhmeddSaid/reelradar.git
cd reelradar
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

🔐 Environment Variables

To run this project, create a `.env.local` file in the root directory and add the following environment variables:

```NODE_ENV=development
NEXT_PUBLIC_API_URL=https://www.omdbapi.com
NEXT_PUBLIC_API_KEY=your_api_key_here
NEXT_PUBLIC_INITIAL_QUERY=avengers
```

You can refer to the included .env.example file as a template.


> Don't have an API key yet? Get one for free from [OMDb API](https://www.omdbapi.com/apikey.aspx)

### 4. Start the Dev Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧪 Linting & Formatting

To lint and auto-fix issues:

```bash
npm run lint -- --fix
```

To format code using Prettier (with Tailwind sorting):

```bash
npm run format
```

Husky and lint-staged are also configured to enforce formatting and linting on commits.

---

## 🧱 Project Structure

```
/app
  /about
  /favorites
  /movie/[id]
  layout.tsx
  page.tsx
/components
  Header.tsx
  Footer.tsx
  SearchInput.tsx
  Dropdown.tsx
  ResultGrid.tsx
/library
  /lib/api.ts
  /pages/Movie.tsx
/types
/public
/styles
```

---

## 👤 Author

Built and maintained by **[Ahmed Said](https://ahmedsaidadnan.com)**

- 🌐 [Portfolio](https://ahmedsaidadnan.com)
- 📧 [ahmedsaidadnan@outlook.com](mailto:ahmedsaidadnan@outlook.com)
- 🐦 [Twitter](https://x.com/AhmedSaid9610)
- 💼 [LinkedIn](https://www.linkedin.com/in/ahmedsaidadnan)
- 🖥️ [GitHub](https://github.com/ahmeddsaid)
