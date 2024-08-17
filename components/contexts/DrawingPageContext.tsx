import React, { useCallback, useEffect, useRef, useState } from "react";
import { BottomSheetMethods } from "../custom/bottomSheet/BottomSheet";
import { Colors } from "../../constants/Colors";

export const DrawingContext = React.createContext<any>({});

export interface Shape {
  id: string;
  type: "rect" | "circle" | "text" | "icon";
  x: number;
  y: number;
  width?: number;
  height?: number;
  radius?: number;
  color: string;
  text?: string;
  name?: string;
  seats?: number;
}
export type Floor = {
  id: string;
  floorNumber: number;
  shapes: Shape[];
};
function DrawingPageContext({ children }: any) {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const bottomSheetRefSeats = useRef<BottomSheetMethods>(null);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [history, setHistory] = useState<Shape[][]>([shapes]); // State history for undo/redo
  const [historyIndex, setHistoryIndex] = useState(0);
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null);
  const [floors, setFloors] = useState<Floor[]>([
    {
      id: Math.random().toString(36).substr(2, 9),
      floorNumber: 1,
      shapes: [],
    },
  ]);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [floorCounter, setFloorCounter] = useState(1);

  useEffect(() => {
    setShapes(
      floors?.filter((item: Floor) => item?.floorNumber === currentFloor)?.[0]
        ?.shapes || []
    );
  }, [currentFloor]);

  return (
    <DrawingContext.Provider
      value={{
        bottomSheetRef,
        bottomSheetRefSeats,
        shapes,
        setShapes,
        history,
        setHistory,
        historyIndex,
        setHistoryIndex,
        selectedShapeId,
        setSelectedShapeId,
        currentFloor,
        setCurrentFloor,
        floorCounter,
        setFloorCounter,
        setFloors,
        floors,
      }}
    >
      {children}
    </DrawingContext.Provider>
  );
}

export default DrawingPageContext;
