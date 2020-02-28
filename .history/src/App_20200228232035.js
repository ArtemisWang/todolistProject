import React,{useState} from 'react';
import './App.css'
const App=function(){
    
    const [list, setList]=useState(['todo1','todo2','todo3','todo4'])
    const [content, setContent]=useState('默认')
    const [done, setDone]=useState(['unline','line-through','unline','unline'])

    function addItem(){
        setList([...list,content])
        setContent('默认值')
    }

    function changeContent(e){
        setContent(e.target.value)
        return content
    }

    function deleteItem(i){
        setList(list.filter((x,index)=>index!==i))
    }

    function hasDone(i){
        let d=done
        d[i]=d[i]==='unline'?'line-through':'unline'
        setDone(d)
        console.log(done)
    }

    return (
    <div className='app'>
        <div className='input'>
            <input onChange={changeContent} value={content} className='input-text'/>
            <button onClick={addItem} className='button'>添加项目</button>
        </div>
        <div className='u-list'>
            <ul className={`todo-list`}>
                {list.map((it,i)=>(<li key={it+i} onClick={deleteItem.bind(this,i)} style={{textDecoration:done[i]}} className={done[i]}>{it}</li>))}
            </ul>
        </div>
    </div>)
}




export default App