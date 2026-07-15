import BlogCard from "../ui/BlogCard";
import PrimaryButton from "../ui/PrimaryButton";

export default function BlogsSection({ blogs }) {
  return (
    <section className="blogs-section" id="blogs">
      <div className="blogs-container">
        <div className="blogs-header">
          <div>
            <p className="blogs-eyebrow">Blogs</p>

            <h2 className="blogs-title">
              Latest Articles & Tutorials
            </h2>

            <p className="blogs-subtitle">
              I enjoy writing about software engineering,
              React, Next.js, backend development,
              testing and modern web technologies.
            </p>
          </div>

          <PrimaryButton
            href="https://medium.com/@Malshii"
            target="_blank"
          >
            View All Articles
          </PrimaryButton>
        </div>

        <div className="blogs-list">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}