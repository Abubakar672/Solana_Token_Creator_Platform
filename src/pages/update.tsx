import type { NextPage } from "next";
import Head from "next/head";
import { UpdateView } from "../views";

const Update: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Token Creatpr</title>
        <meta
          name="description"
          content="Solana Creator"
        />
      </Head>
      <UpdateView />
    </div>
  );
};

export default Update;