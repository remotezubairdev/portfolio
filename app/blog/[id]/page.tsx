import LinkBtn from '@/app/components/LinkBtn';
import { blogs } from '@/app/constants';
import { BsArrowLeft } from 'react-icons/bs';

const Page = ({ params }: { params: { id: string } }) => {
    // Convert params.id to a number
    const blogId = parseInt(params.id);

    // Find the blog with the matching ID
    const currentBlog = blogs.find(blog => blog.id === blogId);

    return (
        <div>
            <LinkBtn small={true} icons={<BsArrowLeft />} path="/blog" name="Back" />
            <h1 className='mt-8'>{currentBlog?.title}</h1>
            <p className='text-sm text-neutral-400'>{currentBlog?.body}</p>
            <p className='mt-6'>{currentBlog?.date}</p>
        </div>
    )
}

export default Page;
