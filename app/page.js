import BlogsList from "@/components/BlogsList";
export const revalidate = 10;
const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BlogsList />
    </main>
  );
};

export default Home;
