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

  useEffect(() => {
    setItems(demoData);
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    console.log({ reorderedItems });
    setItems(reorderedItems);
  };
  return (
    <>
      <h2 className='text-center mt-5 fw-bold'>FORM</h2> 
     <div className={styles.main_content}>

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
      </DragDropContext>
    </div>
  </>
  )
}

export default App
