import Parser from 'rss-parser';

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};

async function getMediumPosts(): Promise<MediumPost[]> {
  const parser = new Parser();
  const feed = await parser.parseURL('https://medium.com/feed/@hartheekreddy'); // Replace with your Medium username

  return (
    feed.items?.map((item) => ({
      title: item.title ?? '',
      link: item.link ?? '',
      pubDate: item.pubDate ?? '',
      contentSnippet: item.contentSnippet ?? '',
    })) ?? []
  );
}

export default async function Medium() {
  const posts = await getMediumPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Medium Articles</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.link} className="border-b pb-4">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-600 hover:underline"
            >
              {post.title}
            </a>
            <p className="text-sm text-gray-500">
              {new Date(post.pubDate).toLocaleDateString()}
            </p>
            <p className="mt-2 text-gray-700">{post.contentSnippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
