import { blogPosts, doctor } from "@/lib/config";
import { Youtube, ArrowUpRight } from "lucide-react";
import HeartbeatDivider from "./HeartbeatDivider";

export default function Blog() {
  return (
    <section id="blog" className="max-w-5xl mx-auto px-5 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="eyebrow text-teal">Reading & Watching</p>
          <h2 className="font-display text-3xl mt-2">From the blog</h2>
        </div>
        <a
          href={doctor.youtubeChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FF0000] text-white px-5 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          <Youtube className="w-5 h-5" />
          Watch on YouTube
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {blogPosts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-line rounded-xl p-5 bg-white hover:border-teal/50 transition-colors flex flex-col"
          >
            <h3 className="font-semibold text-navy flex items-start justify-between gap-2">
              {post.title}
              <ArrowUpRight className="w-4 h-4 shrink-0 text-navy/40 group-hover:text-teal transition-colors" />
            </h3>
            <p className="text-sm text-navy/60 mt-2 flex-1">{post.summary}</p>
          </a>
        ))}
      </div>
      <HeartbeatDivider className="mt-14 opacity-30" />
    </section>
  );
}
