import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "api";

const Home: NextPage = () => {
  const memberships = api.memberships.getAll.useQuery();

  console.log({ memberships });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>Organizations</div>
        <div>
          <ul>
            {memberships.data?.map((mem) => (
              <li key={mem.id}>
                <Link href={`/${mem.organization.slug}/spaces`}>
                  {mem.organization.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;