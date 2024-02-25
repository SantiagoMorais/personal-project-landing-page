import { Container } from "./components/container"
import { ThemeProvider } from "./contexts/theme-context.jsx"

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ ThemeProvider>
  )
}

export default App