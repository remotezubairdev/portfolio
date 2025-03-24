'use client'
import { useState } from React;
import { useRouter } from 'next/navigation';

const ADMIN_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

interface FormProps {
    username: string;
    password: string;
}

const router = useRouter();

const page = () => {
    
    const [form, setForm] = useState<FormProps>({
        username: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prevForm) => {
            const updatedForm = {
                ...prevForm,
                [e.target.name]: e.target.value
            };
            return updatedForm;
        })
    }

    const submitChanges = () => {
        if (form.username === ADMIN_USERNAME && form.password === ADMIN_PASSWORD) {
            document.cookie = `token=admin-token; path=/; max-age=3600`;
            router.push("/admin")
        } else {
            alert("Invalid credentials, Please try again!")
        }
    }

  return (
    <div className='mx-auto max-w-xl text-center'>
        <h1 className='text-2xl font-medium tracking-tighter text-white'>
            Admin Page
        </h1>
        <input
            type="text"
            placeholder='Username'
            name='username'
            onChange={(e) => handleChange(e)}
            className="bg-transparent my-2 p-2 block w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <input
            type="password"
            placeholder='Password'
            name='password'
            onChange={(e) => handleChange(e)}
            className="bg-transparent my-2 p-2 block w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <button
            onClick={() => submitChanges()}
            className="w-full bg-white text-neutral-900 font-semibold mt-2 py-2 px-4 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
    </div>
  )
}

export default page;
