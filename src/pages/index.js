import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 w-full">
      <Head>
        <title>Rita's Amazon</title>
        <meta
          name="description"
          content="Amazon Replica - Rita Guilherme - Web Engineer"
          key="desc"
        />
      </Head>

      {/* header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto  ">
        {/* banner */}
        <Banner />

        <ProductFeed products={products} />

        {/* Product Feed */}

        <Footer />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json(),
  );

  return {
    props: {
      products,
    },
  };
}
