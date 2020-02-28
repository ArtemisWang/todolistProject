import React,{useState} from 'react';
const App=function(){
    
    const [list, setList]=useState({item:['todo1','todo2','todo3','todo4'],content:'some'})

    return (
    <div className='app'>
        <div className='input'>
            <input defaultValue={list.content}/>
            <button onClick={addItem.bind(list)}>添加项目</button>
        </div>
        <div className='u-list'>
            <ul>
                {list.item.map((it,i)=>(<li key={it+i}>{it}</li>))}
            </ul>
        </div>
    </div>)
}

function addItem(){
    console.log(this)
}


export default App