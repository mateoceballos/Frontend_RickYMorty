import { FC, useState } from "react";
import Head from "next/head";

import { Navbar, SideMenu } from "../ui";

interface Props {
  title: string;
  pageDescription: string;
}

export const MainLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

      </Head>

      <nav>
        <Navbar setOpen={setOpen} />
      </nav>

      <SideMenu setOpen={setOpen} open={open} />

      <main
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer>{/* TODO: mi custom footer */}</footer>
    </>
  );
};
