import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  const data = [
    {
      id: 1,
      name: "Client 1",
    },
    {
      id: 2,
      name: "Client 2",
    },
    {
      id: 3,
      name: "Client 3",
    },
  ];

  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {data.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
