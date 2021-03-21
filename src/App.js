import 'tachyons';
import './App.css';
import Card from './card/card';

function App() {
  const dataList = [
    {name:"Mashrefee", age:35},
    {name:"Sakib", age:31},
    {name:"Mushfiq", age:30},
    {name:"Sachin", age:43}
  ];

  const list = dataList.map((data,i)=>{
    return(
      <Card key={i} name={dataList[i].name} age={dataList[i].age} />
    );
  });
  console.log(list);
  return (
    <div className="App">
      <h1 className="tc">Welcome to Avatar World</h1>
      {list}
    </div>
  );
}

export default App;
