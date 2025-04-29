import Parser from 'rss-parser';
import styles from './medium.module.css';

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};

async function getMediumPosts(): Promise<MediumPost[]> {
  const parser = new Parser();
  const feed = await parser.parseURL('https://medium.com/feed/@hartheekreddy'); // 👈 Replace with your actual username

  return (
    feed.items?.map((item) => ({
      title: item.title ?? '',
      link: item.link ?? '',
      pubDate: item.pubDate ?? '',
      contentSnippet: item.contentSnippet ?? '',
    })) ?? []
  );
}

export default async function MediumFeed() {
  const posts = await getMediumPosts();

  return (
    <section className={styles.mediumContainer}>
  <h2 className={styles.mediumHeader}>My Latest Medium Articles</h2>
  <div className={styles.mediumGrid}>
    {posts.map((post, idx) => (
      <a
        href={post.link}
        key={idx}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.mediumCard} no-underline text-black`}
      >
        <h3 className={styles.mediumTitle}>{post.title}</h3>
        <p className={styles.mediumDate}>
          {new Date(post.pubDate).toLocaleDateString()}
        </p>
        <p className={styles.mediumSnippet}>{post.contentSnippet}</p>
        <span className={styles.mediumReadMore}>Read more →</span>
      </a>
    ))}
  </div>
</section>
  );
}
