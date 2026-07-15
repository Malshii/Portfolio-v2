import Image from "next/image";

export default function BlogCard({ blog, reverse }) {
  return (
    <article className={`blog-card ${reverse ? "reverse" : ""}`}>
      <div className="blog-image">
        <Image
          src={blog.image}
          alt={blog.title}
          width={720}
          height={420}
          className="blog-img"
        />
      </div>

      <div className="blog-content">
        <span className="blog-date">{blog.date}</span>

        <h3>{blog.title}</h3>

        <p>{blog.description}</p>

        <a
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-readmore"
        >
          Read Article →
        </a>
      </div>
    </article>
  );
}