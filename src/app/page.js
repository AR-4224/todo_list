"use client";
import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import List from './components/List';

function Home() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todosCompleted = todos.filter((todo) => todo.is_completed === true).length;

  const todosTotal = todos.length;

  return (
    <div className="flex flex-col w-[70%] max-[510px]:w-full">
      <Header />
      <Hero completed={todosCompleted} total={todosTotal} />
      <Form setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  );
}
export default Home;
