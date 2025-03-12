import { MessageCircle, ThumbsUp } from "lucide-react"

const PopularBlog = () => {
    const blogs = [
        {
            title:'My Amazing Blog Title 1',
            author:'Jordan',
            likes:142,
            comments:44
        },
        {
            title:'My Amazing Blog Title 2',
            author:'John',
            likes:153,
            comments:25
        },
        {
            title:'My Amazing Blog Title 3',
            author:'Bell',
            likes:180,
            comments:32
        },
    ]
  return (
    <div className="bg-white p-5 w-[25rem] mt-4 border ml-5 rounded">
        <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
        <ul>
            {blogs.map((blog,index)=>(
                <li key={index} className="mb-4">
                    <div className="flex justify-between items-center">
                        <span className="font-bold mb-2">{blog.title}</span>
                    </div>
                    <span className="text-gray-600">Publish by{blog.author}</span>
                    <div className="flex items-center mt-2">
                        <MessageCircle size={16} />
                        <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
                        <ThumbsUp size={16}/>
                        <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PopularBlog