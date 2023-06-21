import Head from "next/head";

import { type NextPage } from "next";
import Navigation from "./_shared/navigation";

const Home: NextPage = () => {
  const HeroSection = (
    <div className="container flex-col items-center">
      <h1 className="pb-4 text-4xl font-bold text-white">
        Welcome to Envelope
      </h1>
      <h3 className="pb-4 text-xl text-white">
        Reach your goals with the help of a smart cash stash.
      </h3>
      <p className="text-md text-white">
        We empower you to take control of your finances like never before.
        Seamlessly manage multiple accounts, track your progress towards goals,
        and create personalized savings strategies. Our app provides real-time
        insights, budgeting capabilities, and recommendations tailored to your
        financial situation. Experience peace of mind with robust security
        measures and privacy controls. Join us on a journey towards financial
        success and let us be your trusted partner in building a brighter
        future.
      </p>
    </div>
  );

  return (
    <>
      <Head>
        <title>Envelope</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-green-900 from-5% via-emerald-700 via-50% to-cyan-500 px-16 py-8">
        <Navigation></Navigation>
        {HeroSection}
      </div>
    </>
  );
};

export default Home;
