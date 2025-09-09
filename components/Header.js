import { Flex, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const Header = () => {
  const [hasMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!hasMounted) return false

  return (
    <Flex
      position="fixed"
      top={0}
      width="full"
      p={4}
      as="header"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image 
        src="/logo.svg" 
        alt="Bonhomme" 
        display={{ base: "none", md: "block" }}
      />

    </Flex>
  )
}
