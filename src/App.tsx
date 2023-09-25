import "./App.css";
import { Navigation } from "./routes/Navigation";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Navigation />
    </Provider>
    </QueryClientProvider>

  );
}

export default App;
