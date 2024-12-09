import { Box, Container, Text, Flex, Button } from "@radix-ui/themes"
import { DownloadIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"

import logo from "@/assets/logo.png"

export const AppBar = () => {
  return (
    <Box data-testid='app-bar'>
      <Container size='4' py='4'>
        <Flex align='center' justify='between'>
          <Flex align='center' gap='4'>
            <Box>
              <img
                src={logo}
                style={{
                  width: 24,
                  height: 36,
                }}
              />
            </Box>
            <Text weight='bold'>Personal</Text>
          </Flex>

          <Flex gap='6' display={{ initial: "none", sm: "flex" }}>
            <Text weight='medium'>About Me</Text>
            <Text weight='medium'>Skills</Text>
            <Text weight='medium'>Project</Text>
            <Text weight='medium'>Contact Me</Text>
          </Flex>

          <Box display={{ initial: "none", sm: "block" }}>
            <Button color='gray' highContrast>
              Resume <DownloadIcon />
            </Button>
          </Box>

          <Box display={{ initial: "block", sm: "none" }}>
            <HamburgerMenuIcon
              style={{
                width: 28,
                height: 28,
              }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
