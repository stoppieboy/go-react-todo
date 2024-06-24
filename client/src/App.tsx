import { Container, Stack } from '@chakra-ui/react'
import Navbar from './component/Navbar'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'

export const BASE_URL = 'http://localhost:5000/api'

function App() {

  return (
    <Stack h="100vh">
      <Navbar/>
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  )
}

export default App
