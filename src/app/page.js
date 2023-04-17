import MarketStories from "@/components/marketStories";
import Navbar from "@/components/navbar";
import NewsData from "@/components/newsdata";
import Posts from "@/components/posts";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <NewsData />
      <div className="bg-slate-100">
        <h2 className="uppercase text-red-600 font-semibold text-lg px-6 py-2">
          Featured Companies
        </h2>

        <div className="h-10 bg-sky-100">
          {/*  TODO: add Featured Companies logos below */}
        </div>
        <div className="flex">
          <Sidebar />
          <Posts />
          <MarketStories />
        </div>
      </div>
    </div>
  );
}
