import {RemoveScroll} from 'react-remove-scroll';

type Props = {
    counterHistory: number[];
    handleRemoveHistory: (index: number) => void;
}

export default function Section({counterHistory, handleRemoveHistory}: Props) {
  return (
    <RemoveScroll>
    <p> counter history(hello from component):</p>
    <div className="counter-history">
        
        {
        
        counterHistory.length > 0 && counterHistory.map((counter, index) => {
            
            return (
            <div>
                <span key = {counter}> {counter} </span>
                <button onClick={() => handleRemoveHistory(index)}>delete</button>
            </div>
            )
        })
        }
    </div>
    </RemoveScroll>  
  )
}