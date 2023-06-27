'use client'
import {DragDropContext,Droppable} from 'react-beautiful-dnd'

import React, { useEffect } from 'react'
import { useBoardStore } from '@/store/BoardStore'
function Board() {
  const [board,getBoard]=useBoardStore((state)=>[state.board,state.getBoard])
  useEffect(()=>{
    getBoard()
  },[getBoard])
  console.log(board)

  return (
    <h1>hello</h1>
  //  <DragDropContext>
  //   <Droppable droppableId="board" direction="horizontal" type="column">
  //       {(provided:any)=>(
  //           <div className=''>

  //           </div>
  //       )}

  //   </Droppable>
    
  //  </DragDropContext>
  )
}

export default Board