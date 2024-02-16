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

  useEffect(()=>{
    console.log(formItems,"lulzo");
  },[formItems])
 

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
                    <input
                        placeholder={item.content}
                        className={styles.input}
                      />
                    </div>
                    
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <div className='mx-5'>
          <h1>Form</h1>
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
        <input  className={styles.input} key={item.id} placeholder={item.content}></input>
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
