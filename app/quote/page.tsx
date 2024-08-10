'use client';
// components/Quote.tsx

import React, { useState } from 'react';
import LinkBtn from '../components/LinkBtn';
import { BsArrowLeft } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Quote: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', budget: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send('service_tzsf2nv', 'template_gmmwib8', {...form, type: 'Quote'}, 'ZzfLdF1SCwuT8AETH')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-screen">
      <div className="mb-4">
        <LinkBtn icons={<BsArrowLeft />} small={true} path="/" name="Back to Home" />
      </div>
      <div className="p-8 rounded-lg shadow-md w-full max-w-md text-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-center">Request a Quote</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-transparent mt-1 p-2 block w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent mt-1 p-2 block w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-200"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="bg-transparent mt-1 p-2 block w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-200"
            ></textarea>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium">Budget ($)</label>
            <input
                type="number"
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="bg-transparent mt-1 p-2 block w-full border border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-gray-800 font-semibold mt-2 py-2 px-4 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Quote;
