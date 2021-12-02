import Stories from "./Stories";
import Posts from "./posts";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:mal-w-6l mx-auto">
      {/* */}
      {/* Section */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories></Stories>

        {/* Posts */}
        <Posts></Posts>
      </section>
      {/* Section */}
      <section>
        {/*Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
