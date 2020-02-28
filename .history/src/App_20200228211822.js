import React,{useState} from 'react';
const App=function(){
    
    const [list, setList]=useState(['todo1','todo2','todo3','todo4'])
    const [content, setContent]=useState('something')

    function addItem(){
        setList([...list,content])
        setContent('a')
    }

    function changeContent(e){
        setContent(e.target.value)
        return content
    }

    return (
    <div className='app'>
        <div className='input'>
            <input onChange={changeContent}>{content}</input>
            <button onClick={addItem}>添加项目</button>
        </div>
        <div className='u-list'>
            <ul>
                {list.map((it,i)=>(<li key={it+i}>{it}</li>))}
            </ul>
        </div>
    </div>)
}




export default App