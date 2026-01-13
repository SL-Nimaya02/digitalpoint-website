import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_DATA } from '../pages/Blog';

export function BlogSection() {
  const featuredBlog = BLOG_DATA[0];
  const listBlogs = BLOG_DATA.slice(1, 5); // Show more items as requested

  return <section className="py-16 bg-white font-['Montserrat']">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Premium Header */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
          <span className="block text-gray-900 leading-none">Latest</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1b63bb] via-[#E91E63] to-[#ff8a00] bg-[length:200%_auto] animate-gradient-x italic pb-2 px-2">
            Insights
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#1b63bb] to-[#E91E63] mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Blog */}
        <Link
          to="/blog"
          state={{ postId: featuredBlog.id }}
          className="group cursor-pointer block relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          <img
            src={featuredBlog.image}
            alt={featuredBlog.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 tracking-tighter opacity-90 group-hover:opacity-100 transition-opacity">
              Digital Point<span className="text-[#E91E63]">.</span>
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="inline-block px-3 py-1 bg-[#E91E63] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-3">
              Featured
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
              {featuredBlog.title}
            </h3>
            <p className="text-gray-300 text-sm font-medium">
              {featuredBlog.date} • {featuredBlog.category}
            </p>
          </div>
        </Link>

        {/* Blog List & View All */}
        <div className="flex flex-col justify-between">
          <div className="space-y-1">
            {listBlogs.map((blog, index) => (
              <Link
                key={index}
                to="/blog"
                state={{ postId: blog.id }}
                className="flex gap-4 group cursor-pointer items-center p-2 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                  <img src={blog.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-[#1b63bb] block mb-2 tracking-wide uppercase">
                    {blog.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#E91E63] transition-colors mb-2">
                    {blog.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-400">
                    {blog.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/blog" className="mt-8 inline-flex items-center justify-center space-x-2 group w-fit md:w-auto mx-auto md:mx-0 md:self-start px-6 py-3 md:px-8 md:py-4 bg-gray-900 text-white rounded-full hover:bg-[#E91E63] transition-colors duration-300">
            <span className="font-bold tracking-widest uppercase text-[14px] md:text-sm">View All Articles</span>
            <ArrowRight className="w-6 h-6 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </section>;
}