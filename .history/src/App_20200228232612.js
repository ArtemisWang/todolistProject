import React,{useState} from 'react';
import './App.css'
const App=function(){
    
    const [list, setList]=useState(['todo1','todo2','todo3','todo4'])
    const [content, setContent]=useState('默认')
    const [done, setDone]=useState(['','','',''])

    function addItem(){
        setList([...list,content])
        setContent('默认值')
        setDone(done.push(''))
    }

    function changeContent(e){
        setContent(e.target.value)
        return content
    }

    function deleteItem(i){
        setList(list.filter((x,index)=>index!==i))
    }

    function hasDone(i){
        setList(list.map((x)=>x+''))
        let d=done
        d[i]=d[i]===''?'done':''
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
                {list.map((it,i)=>(<li key={it+i} onClick={hasDone.bind(this,i)} className={done[i]}>{it}</li>))}
            </ul>
        </div>
    </div>)
}




export default App