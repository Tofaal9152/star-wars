# 🌌 Star Wars Characters App ()

### website: https://star-wars-bice-two.vercel.app/

This is a **Next.js** application that fetches data from the **Star Wars API (SWAPI)** and displays character cards with pagination and search functionality.

---

## 🚀 Getting Started

### 1️⃣ Install & Run Locally

First, **clone the repository**:

```bash
git clone https://github.com/yourusername/star-wars-app.git
cd star-wars-app

npm install
npm run dev

Then go your browser - http://localhost:3000/

```

---

## 🚀 Features

✅ **Fetch Star Wars Characters** from SWAPI  
✅ **Pagination** to navigate through character lists  
✅ **Search bar** to filter characters by name  
✅ **Character details page** with additional information  
✅ **Dark Mode** for better accessibility  
✅ **Mobile Responsive** design

---

## 🛠 Tech Stack

- **Next.js** (React.js framework)
- **React Hooks** (`useState`, `useEffect`, `useRouter`)
- **Axios** (for API requests)
- **TailwindCSS** (for styling)
- **ShadCn** (for UI components)
- **Next.js Dynamic Routing** (`/character/[id]`)
- **Debounced Search Input** (for better performance)
- **Pagination Logic** (fetching next/previous pages)

---

## 📂 Project Structure

```
│── /components
│ │── CharactersCard.tsx # Character card UI
│ │── PaginationClient.tsx # Client-side pagination
│ │── IndividualCharacter.tsx # Client-side pagination
│ │── Navbar.tsx # Search input field
│── /pages
│ │── /character
│ │ │── [id].tsx # Character details page
│ │── page.tsx # Homepage with character list
│── not-found.tsx#
│── package.json # Project dependencies
│── README.md # Project documentation
```

.

## 🔍 API Fetching, Pagination & Search

📡 Fetching Data from SWAPI
The app uses Axios to fetch Star Wars characters from https://swapi.dev/api/people/.
The API is queried with the page number and search term.

```
useEffect(() => {
  const FetchingApi = async () => {
    try {
      const res = await axios.get(
        `https://swapi.dev/api/people/?page=${page}&search=${debouncedSearch}`
      );
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  FetchingApi();
}, [page, debouncedSearch]);

```

## 🔄 Pagination

The pagination component updates the page state.
Only valid page numbers can be clicked.

```
 const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent invalid pages
    setPage(newPage);
    console.log(page);
  };
```

## 🔗 Character Details Page

Clicking a character opens /character/[id], fetching detailed information:

```
const FetchingApi = async () => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    setData(res.data);
  } catch (error) {
    console.error(error);
  }
};

```
## 🌟 Extra Features
✅ Dark Mode (Auto-detects system preference)
✅ Mobile Responsive (Optimized layout for all screen sizes)

