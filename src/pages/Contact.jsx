import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  
  const handleFocus = () => {}
  const handleBlur = () => {}
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Erika",
        from_email: form.email,
        to_email: "erikacapiral1@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      toast.success("Message sent successfully!")
      setForm({ name: "", email: "", message: "" })
    }).catch((error) => {
      setIsLoading(false)
      toast.error("Failed to send message. Please try again later.");
    })
  }
  
  const formRef = useRef()

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-screen'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='sm:text-5xl text-3xl font-semibold sm:leading-snug text-white'>Get in touch</h1>
        <ToastContainer />
        <form 
          ref={formRef}
          className='w-full flex flex-col gap-7 mt-4'
          onSubmit={handleSubmit}
        >
          <label className='text-white font-light'>Name
            <input 
              type="text" 
              name="name" 
              id="name" 
              className='input' 
              placeholder='Erika Capiral' 
              required 
              value={form.name} 
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-white font-light'>Email address
            <input 
              type="email" 
              name="email" 
              id="email" 
              className='input' 
              placeholder='erika@gmail.com' 
              required 
              value={form.email} 
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-white font-light'>Message
            <textarea 
              name="message" 
              rows={4}
              id="message" 
              className='input' 
              placeholder="Hi! Message me and let's work together!" 
              required 
              value={form.message} 
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur} 
            />
          </label>
          <button
            type='submit'
            className='text-white bg-[#121B3A] focus:ring-4 focus:outline-none font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
