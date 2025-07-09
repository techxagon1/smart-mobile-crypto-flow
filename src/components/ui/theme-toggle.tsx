
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/providers/ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "dark") {
      return <Moon className="h-4 w-4" />
    } else if (theme === "light") {
      return <Sun className="h-4 w-4" />
    } else {
      return <Sun className="h-4 w-4" />
    }
  }

  const getLabel = () => {
    if (theme === "dark") {
      return "Dark"
    } else if (theme === "light") {
      return "Light"
    } else {
      return "System"
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-full justify-start gap-2"
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </Button>
  )
}
