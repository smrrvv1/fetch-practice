import { useState } from "react"
import { BASE_URL } from "../../constants"
import type { CreatePost as CreatPostType } from "../../types"

export const createPost = () =>{
    const [inputTitle, setInputTitle] = useState('')
    const [inputBody, setInputBody] = useState('')

    const CreatePost = async() => {
        try{
            const newPost: CreatPostType = {
                title: inputTitle,
                body: inputBody,
                userId:
            }
            const response = await fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            })
            if (!response.ok) {
                throw new Error('error on creating post')
            }
            const data = await response.json()
            console.log(data)
        }catch (e) {
            console.error(e)
        }
    }

    return(
        <div>
            <input 
                placeholder="Post title" 
                value={inputTitle}
                onChange={(event) => setInputTitle(event.target.value)}
            />
            <input 
                placeholder="Write your post here" 
                value={inputBody}
                onChange={(event) => setInputBody(event.target.value)}
            />
            <button onClick={CreatPostType}>add</button>
        </div>
    )
}