import LinkBtn from '@/app/components/LinkBtn';
import { blogs } from '@/app/constants'
import { BsArrowLeft } from 'react-icons/bs';

const page = ({ params } : { params: { id: number } }) => {
    // opened blog
    const currentBlog = blogs.find(blog => blog.id == params.id);

    return (
        <div>
            <LinkBtn small={true} icons={<BsArrowLeft />} path="/blog" name="Back" />
            <h1 className='mt-8'>{currentBlog?.title}</h1>
            <p className='text-sm text-neutral-400'>{currentBlog?.body}</p>
            <p className='mt-6'>{currentBlog?.date}</p>
        </div>
    )
}

export default page