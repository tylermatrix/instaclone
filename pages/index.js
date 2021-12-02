import Head from "next/head";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Head>
        <title>Instaclone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is the instaclone </h1>
      {/* */}
      {/* Header */}
      <Header></Header>
      {/* Feed */}
      {/* Modal */}
    </div>
  );
}

export default Home;
