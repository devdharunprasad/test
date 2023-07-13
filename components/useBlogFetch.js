const useBlogFetch = (url) => {
  const getBlogs = async () => {
    const res = await fetch(url, {
      next: { revalidate: 10 },
    });
    const data = res.json();

    return data;
  };

  return getBlogs;
};

export default useBlogFetch;
