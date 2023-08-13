import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import SectionTitle from "../Shared/SectionTitle";
import BlogPost from "./BlogPost";

const Blog = () => {
    const [blogs, setBlogs] = useState();
    const [blogLoading, setBlogLoading] = useState(true);
    useTitle('Blog');

    useEffect(() => {
        fetch("blog.json")
            .then((response) => response.json()
                .then(data => {
                    setBlogLoading(false)
                    setBlogs(data);
                })
            );
    }, []);

    return (
        <>
            {
                blogLoading && <div className="flex justify-center items-center h-screen">
                    <span className="text-mysecondary loading loading-bars loading-lg"></span>
                </div>
            }
            <SectionTitle heading={"Latest Blog posts"} subheading={"Discover a World of Words and Cultures through Our Insightful Language Learning Blog"}></SectionTitle>
            <section className="my-container mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogs?.map((post) => (
                            <BlogPost
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                description={post.description}
                                authorName={post.author.name}
                                authorImage={post.author.image}
                                authorEmail={post.author.email}
                            />
                        ))}
                    </div>


                {/* <div className="grid grid-cols-1 ">
                    {blogs && blogs.map((blog) => (
                        <div className="bg-my-card border p-4 rounded-lg hover:border-myprimary mb-8" key={blog.id}>
                            <div
                                className="flex items-center" >
                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center rounded-full mr-4" src={blog.author.image} />
                                <div className="">
                                    <h2 className="text-gray-900 title-font font-medium">{blog.author.name}</h2>
                                    <p className="text-gray-500">{blog.author.email}</p>
                                </div>
                            </div>
                            <p className="font-semibold py-2">{blog.title}</p>
                            <p>{blog.description}</p>
                        </div>
                    ))}
                </div> */}
            </section>
        </>
    );
};

export default Blog;