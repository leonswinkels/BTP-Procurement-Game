
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
  ];

export default function Index(): JSX.Element{
    return <div>Index says hello from Index() function</div>;
}