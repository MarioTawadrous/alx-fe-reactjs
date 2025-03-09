import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px" }}>
        <button
          onClick={() => setShowPosts(!showPosts)}
          style={{ marginBottom: "20px", padding: "10px" }}
        >
          {showPosts ? "Hide Posts" : "Show Posts"}
        </button>
        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
