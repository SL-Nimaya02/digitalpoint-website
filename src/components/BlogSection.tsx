import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const blogs = [
  {
    date: '10 Dec | Printing Trends',
    title: 'Top Trends in Banner and Flex Printing for 2025',
    image: '/projects/project01.jpeg'
  },
  {
    date: '5 Dec | Branding',
    title: 'How High-Quality Flag Printing Boosts Brand Visibility',
    image: '/projects/project02.jpeg'
  },
  {
    date: '2 Dec | Stickers',
    title: 'Sticker and Transparent Sticker Printing: Elevate Your Products',
    image: '/projects/project03.jpeg'
  },
  {
    date: '28 Nov | Event Printing',
    title: 'Creating Impactful Funeral and Event Banners',
    image: '/projects/project06.jpeg'
  },
  {
    date: '20 Nov | Signage',
    title: 'Light and Name Board Printing: Stand Out in Style',
    image: '/projects/project05.jpeg'
  }
];

export function BlogSection() {
  return <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Blogs</h2>
        <Link to="/blog" className="text-[#1b63bb] font-medium flex items-center hover:underline">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Blog */}
        <div className="group cursor-pointer">
          <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6 bg-black">
            <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1000&auto=format&fit=crop" alt="Featured Blog" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-thin text-white tracking-tighter">
                Digital Point<span className="text-[#E91E63]">.</span>
              </span>
            </div>
            <div className="absolute bottom-6 left-6 text-white text-xs tracking-widest uppercase">
              • create • publish • deliver
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-medium text-gray-500">
              17 Feb | Printing
            </span>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#E91E63] transition-colors">
              Marketing Is Made Simple With Digital Point
            </h3>
          </div>
        </div>

        {/* Blog List */}
        <div className="space-y-6">
          {blogs.map((blog, index) => <div key={index} className="flex gap-4 group cursor-pointer items-start">
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
              <img src={blog.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-1 py-1">
              <span className="text-xs font-medium text-gray-500 block mb-1">
                {blog.date}
              </span>
              <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#E91E63] transition-colors">
                {blog.title}
              </h3>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}