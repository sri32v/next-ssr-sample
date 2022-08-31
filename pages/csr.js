import React, { useEffect, useState } from "react";

const csr = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.length === 0 ? (
        <div>Loading....</div>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <p>
              {todo.id}:{todo.title}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default csr;
