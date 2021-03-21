import 'tachyons';
import './card.css';
const card = ({name = "anonymous" ,age = 18}) => {
    return (
        <div className="main_box ma4 bg-light-purple dib pa4 tc grow shadow-4">
            <img src ={`//joeschmoe.io/api/v1/${name}`} alt="avatar" />
            <h1>{name}</h1>
            <p>Age: {age}</p>
        </div>
    );
}
export default card;