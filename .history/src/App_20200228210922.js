import React,{useState} from 'react';
const App=function(){
    
    const [list, setList]=useState(['todo1','todo2','todo3','todo4'])
    const [content, setContent]=useState('something')

    function addItem(){
        console.log(list)
        setList([...list.item,content])
    }

    function changeContent(e){
        console.log(e.target.value)
    }

    return (
    <div className='app'>
        <div className='input'>
            <input defaultValue={}/>
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