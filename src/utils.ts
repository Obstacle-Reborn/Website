import { TypedDocumentNode } from "@apollo/client";
import { useNavigate } from "@remix-run/react";
import { print } from "graphql";

export function useNav() {
  const nav = useNavigate();

  return (action: string = ".") => {
    nav(action, {
      preventScrollReset: true,
    });
  };
}

export async function fetchGraphql<O, P = { [key: string]: any }>(
  query: TypedDocumentNode<O, P>,
  variables?: P
) {
  const out: { data: O } = await fetch(getGraphqlApiUrl(), {
    method: "post",
    body: JSON.stringify({
      query: print(query),
      variables,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());

  return out.data;
}

export function getGraphqlApiUrl() {
  return "http://localhost:3001/graphql";
}
