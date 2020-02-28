import React,{useState} from 'react';
const App=function(){
    
    const [list, setList]=useState({item:['todo1','todo2','todo3','todo4'],content:'some'})

    function addItem(){
        console.log(list)
        setList({item:[...list.item,list.content],content:''})
    }

    function changeContent(e){
        console.log(e.target.value)
    }

    return (
    <div className='app'>
        <div className='input'>
            <input value={list.content} onChange={e=>console.log(e.target.value)}/>
            <button onClick={addItem}>添加项目</button>
        </div>
        <div className='u-list'>
            <ul>
                {list.item.map((it,i)=>(<li key={it+i}>{it}</li>))}
            </ul>
        </div>
    </div>)
}




export default App