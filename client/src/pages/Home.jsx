const Home = () => {
  const data = [
    {
      title: 'Getting Started with React',
      author: 'John Smith',
      category: 'Web Development',
      isPublished: true,
      body: "In this blog post, we'll cover the basics of setting up a React project and creating your first components.",
    },
    {
      title: 'Mastering Spring Boot',
      author: 'Emily Brown',
      category: 'Backend Development',
      isPublished: true,
      body: 'Explore advanced techniques for building robust backend applications with Spring Boot, including dependency injection, RESTful APIs, and data persistence.',
    },
    {
      title: 'Introduction to Machine Learning',
      author: 'David Jones',
      category: 'Data Science',
      isPublished: true,
      body: 'Discover the fundamentals of machine learning, including supervised and unsupervised learning algorithms, and how to apply them to solve real-world problems.',
    },
  ];

  return (
    <div>
      {data.map((post) => (
        <div key={post.title}>
          <h2>
            {post.title} by {post.author}
          </h2>
          <p>{post.category}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
