import { Home } from "./components/home/index.jsx"
import { ThemeProvider } from "./contexts/theme-context.jsx"

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ ThemeProvider>
  )
}

export default App