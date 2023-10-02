import React, { useState } from 'react'

function AddBlog() {

    const [blog,setBlog] = useState([])
    const [showInput,setShowInput] = useState(false)
    const [message,setMessage] = useState('')
    const [tag,setTag] = useState('')
    
    const [text, setText] = useState('');

    const handleTextareaChange = (e) => {
      const textarea = e.target
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
      setText(textarea.value)
    }

    const changeTagAndAdd = ()=>{
        
        let jsxElement

        switch (tag) {
        case 'h1':
            jsxElement = <h1>{text}</h1>
            break
        case 'h3':
            jsxElement = <h2>{text}</h2>
            break

        default:
            jsxElement = <p>{text}</p>
            break
        }

        setBlog([...blog, jsxElement])
        setShowInput(false)
        setTag('')
        setMessage('')
        setText('')
    }

    return (
        <div className='add_blog'>

            <div className='add_blog_left'>
                <input className='add_blog_search' placeholder='Search blogs'></input>
                <div className='recent_blogs'>
                    <p>Docker</p>
                    <p>Docker</p>
                    <p>Docker</p>
                    <p>Docker</p>
                    <p>Docker</p>
                </div>
            </div>

            <div className='add_blog_right'>
                <div className="tools">
                    <button onClick={()=>{
                        setShowInput(true)
                        setMessage("Add Heading")
                        setTag('h1')
                    }}>Heading Large</button>
                    <button onClick={()=>{
                        setShowInput(true)
                        setMessage("Add Heading")
                        setTag('h3')
                    }}>Heading small</button>
                    <button onClick={()=>{
                        setShowInput(true)
                        setMessage("Add Paragraph")
                        setTag('p')
                    }}>Paragraph</button>
                    <button>Tool 1</button>
                    <button>Tool 1</button>
                </div>
                <div className='blog'>
                    {
                        blog
                    }
                    {
                        showInput && <div className='blog_inputs'>
                            <textarea 
                            onChange={handleTextareaChange}className='blog_input' placeholder={message}></textarea>
                            <button onClick={changeTagAndAdd}>{message}</button>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default AddBlog