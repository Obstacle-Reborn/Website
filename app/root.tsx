import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";

import GlobalFonts from "src/styles/fonts";
import GlobalCss from "src/styles/globals";

import backgroundImg from "src/assets/img/background.jpg";
import { Navigation } from "src/components/Navigation";
import { useEffect, useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

function calcProgress(x: number) {
  return 100 * (1 - Math.pow(Math.E, -(x / 25)));
}

function GlobalLoading() {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const { state } = useNavigation();

  clearInterval(intervalRef.current);

  if (state === "loading" || state === "submitting") {
    intervalRef.current = setInterval(() => {
      setProgress((progress) => Math.min(100, progress + 10));
    }, 500);
  } else {
    clearInterval(intervalRef.current);
  }

  const progressValue = calcProgress(progress);

  return (
    <LoadingBar
      color="#346ab4"
      progress={progressValue}
      onLoaderFinished={() => setProgress(0)}
    />
  );
}

function Root() {
  return (
    <>
      {/* <GlobalLoading /> */}
      <Navigation />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ backgroundImage: `url(${backgroundImg})` }}>
        <GlobalFonts />
        <GlobalCss />
        <Root />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
