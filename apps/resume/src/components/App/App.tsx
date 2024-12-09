import { AppBar } from "@/components/AppBar"
import { AboutMe } from "@/components/AboutMe"
import { Box } from "@radix-ui/themes"

export const App = () => {
  return (
    <Box data-testid='app'>
      <AppBar />
      <AboutMe />
    </Box>
  )
}
