import React,{useState} from 'react';
const App=function(){
    
    const [list, setList]=useState({item:['todo1','todo2','todo3'],})

    return (
    <div className='app'>
        <div className='input'>
            <input/>
            <button>添加项目</button>
        </div>
        <div className='u-list'>
            <ul>
                <li>todo1</li>
                <li>todo2</li>
                <li>todo3</li>
            </ul>
        </div>
    </div>)
}




export default App