import React, { useEffect, useRef, useState } from 'react'
import { DictionaryService } from '../service/DictionaryService'
import { dictionary } from '../models/dictionary'

function Dictionary() {

    const [word, setWord] = useState<dictionary[]>([])
    const [inputWord,setInputWord]=useState("")
    const inputRef=useRef<HTMLDivElement>(null);

    const audio=new Audio(word[0]?.phonetics[0]?.audio)
    // useEffect(()=>{
    //     inputRef.current.focus()
    // },[])

    const wordSubmit=(e:any)=>{
        e.preventDefault()
        let wordServise = new DictionaryService()
        wordServise.getİnfo(inputWord)
            .then(data => {
                setWord(data)
            })
    }
    return (
        <div className='container'>
            <div className='dictionary'>
                <div className='searchArea'>
                    <h1>English Dictionary</h1>
                    <form onSubmit={(e)=>wordSubmit(e)}>
                        <input  onChange={(e)=>setInputWord(e.target.value)} type="text" />
                        <span>X</span>
                    </form>
                    <p>Type any existing word and press enter to get meaning, example, synonyms, etc.</p>
                </div>

                <div className='definitions'>
                    <div className='word-mean'>
                        <div className='word-mean-text'>
                            <div className='top'>
                                <h3>{word[0]?.word}</h3>
                                <span>{word[0]?.phonetic}</span>
                            </div>
                            <div className='bottom'>
                                noun, verb, interjection
                            </div>
                        </div>
                        <button className='word-voice' onClick={()=>audio.play()} >
                          vioce
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dictionary