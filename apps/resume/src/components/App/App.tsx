import { AppBar } from "@/components/AppBar"
import { Box } from "@radix-ui/themes"

export const App = () => {
  return (
    <Box data-testid='app'>
      <AppBar />
    </Box>
  )
}
