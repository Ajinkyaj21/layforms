import './App.css'
import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'
import { demoData } from './demo'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App=() =>{

  const [items, setItems] = useState([]);
  const [formItems,setFormItems]=useState([])

  useEffect(() => {
    setItems(demoData);
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    
    // if (result.destination.droppableId === "droppable") {
   
    // }
    else if (result.destination.droppableId === "form-droppable") {
      
      const item = items.filter((item) => item.id == result.draggableId) 

      const valExists=formItems.some(value=> value== item[0])
      console.log(valExists,item[0],items,"lulz");
      
      const reorderedItems = reorder(
        items,
        result.source.index,
        result.destination.index
      );
  
      console.log({ reorderedItems });
      // setFormItems(reorderedItems);

      if(!valExists){
        setFormItems((prev)=>[...prev,item[0]]);
      }
    
    }
  };

  // useEffect(()=>{
  //   console.log(formItems,"lulzo");
  // },[formItems])
 

  return (
    <>
      {/* <h2 className='text-center mt-5 fw-bold'>FORM</h2>  */}
     <div className={styles.main_content}>
     <div className='d-flex'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='mt-5'
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={styles.inputContainer}
                                        >
                    {item.display_name}
                        </div> 
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <div className={styles.formContainer}>
          <h2 className='text-center '>Form</h2>
          <form>
          <Droppable droppableId="form-droppable">
  {(provided, snapshot) => (
    <form ref={provided.innerRef} {...provided.droppableProps}>
      {formItems.map((item,index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
        {(provided, snapshot) => (
         <div
         ref={provided.innerRef}
         {...provided.draggableProps}
         {...provided.dragHandleProps}
         className={styles.inputContainer}
                             >
        {
          item.input_type == 'text' &&
          <div>
            {item.value_type=="number" ?
          <div>
            <label className='fw-bold'>{item.display_name}</label>         
            <input type='number' readOnly className={styles.input} key={item.id} placeholder={`Enter ${item.display_name}`}></input> 
          </div>
          :
          <div>
            <label className='fw-bold'>{item.display_name}</label>         
            <input  className={styles.input} readOnly key={item.id} placeholder={`Enter ${item.display_name}`}></input> 
          </div>
        } 
          </div>
        }  
        {
          item.input_type == 'password' && 
          <div>
            <label className='fw-bold'>{item.display_name}</label>         
            <input type='password' readOnly className={styles.input} key={item.id} placeholder={`Enter ${item.display_name}`}></input> 
          </div>
        }  
        {
          item.input_type == 'checkbox' && 
          <div>
            <label className='fw-bold'>{item.display_name}</label> 
            <div>    
            {item.options.map((item) => (
              <>
              <input disabled={true} type="checkbox" value={item}/> 
              <label className='px-1' key={item}>{item}</label>
              </>
            ))}
            </div>
          </div>  
        }
        {
          item.input_type == 'radio' && 
          <div>
            <label className='fw-bold'>{item.display_name}</label> 
            <div>    
            {item.options.map((item) => (
              <>
              <input disabled={true} readOnly type="radio" value={item}  name="radioGroupName" /> 
              <label className='px-1' key={item}>{item}</label>
              </>
            ))}
            </div>
          </div>  
        }      
        {
          item.input_type == 'select' && 
          <div>
            <label className='fw-bold'>{item.display_name}</label> 
            <div>    
            <select className='my-1'>
              {
                item.options.map(el=><>
                  <option disabled={true} value={el}>{el}</option>
                </>)
              }
            </select>  
          </div>
          </div>  
        }           
        </div>
            )}
            </Draggable>
      ))}
      {provided.placeholder}
    </form>
  )}
</Droppable>
          </form>
        </div>
      </DragDropContext>
      </div>
    </div>
  </>
  )
}

export default App
