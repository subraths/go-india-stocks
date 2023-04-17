import Button from "./button";
import Card from "./card";

export default function Posts() {
  const posts = [
    {
      id: 1,
      username: "Subrath S",
      profilePic: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident odio nemo distinctio animi, aut molestias harum et tenetur velit doloribus. Ipsam velit a ex esse enim minus culpa magnam.",
    },
    {
      id: 2,
      username: "Subrath S",
      profilePic: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident odio nemo distinctio animi, aut molestias harum et tenetur velit doloribus. Ipsam velit a ex esse enim minus culpa magnam.",
    },
    {
      id: 3,
      username: "Subrath S",
      profilePic: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident odio nemo distinctio animi, aut molestias harum et tenetur velit doloribus. Ipsam velit a ex esse enim minus culpa magnam.",
    },
    {
      id: 4,
      username: "Subrath S",
      profilePic: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident odio nemo distinctio animi, aut molestias harum et tenetur velit doloribus. Ipsam velit a ex esse enim minus culpa magnam.",
    },
    {
      id: 5,
      username: "Subrath S",
      profilePic: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident odio nemo distinctio animi, aut molestias harum et tenetur velit doloribus. Ipsam velit a ex esse enim minus culpa magnam.",
    },
    {
      id: 6,
      username: "Subrath S",
      profilePic: "",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident odio nemo distinctio animi, aut molestias harum et tenetur velit doloribus. Ipsam velit a ex esse enim minus culpa magnam.",
    },
  ];
  return (
    <div className="max-w-5xl mx-10 flex-shrink-0">
      <div>
        <h2 className="text-2xl font-bold uppercase text-red-500">
          discussion form
        </h2>
      </div>
      <div className="px-28">
        <h4>Filters</h4>
        <Card>
          <div className="space-x-4 px-6">
            <Button innerText="Section 1" color="bg-red-700" />
            <Button innerText="Section 2" color="bg-blue-700" />
            <Button innerText="Section 3" color="bg-yellow-400" />
            <input
              type="text"
              placeholder="search"
              className="bg-slate-300 px-4 py-2 rounded-full"
            />
          </div>
        </Card>
        {posts.map((post) => (
          <div key={post.id}>
            <Card>
              <div className="flex">
                <div>
                  <img alt="profilePic" />
                </div>
                <div>
                  <h2>{post.username}</h2>
                  <p>{post.content}</p>
                  <div className="flex justify-between">
                    <span>likes</span>
                    <span>views</span>
                    <span>comment</span>
                    <span>share</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
