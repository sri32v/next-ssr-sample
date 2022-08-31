import React from "react";
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}
const ssr = ({ todos }) => {
  return (
    <div>
      {todos?.length === 0 ? (
        <div>Loading....</div>
      ) : (
        todos?.map((todo) => (
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

export default ssr;
