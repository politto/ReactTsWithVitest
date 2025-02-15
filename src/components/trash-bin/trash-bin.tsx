type Props = {
    trashBin: number[];
    handleTrashBin: (index: number) => void;
}

export default function TrashBinManager({trashBin, handleTrashBin}: Props) {
  return (
    <>
    <p> trash bin:</p>
    <div className="counter-history">
        
        {
        
        trashBin.length > 0 && trashBin.map((counter, index) => {
            
            return (
            <div>
                <span key = {counter}> {counter} </span>
                <button id = "btn2" onClick={() => handleTrashBin(index)}>restore</button>
            </div>
            )
        })
        }
    </div>
    </>  
  )
}