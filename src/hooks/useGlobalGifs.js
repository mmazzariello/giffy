import { useContext } from "react";
import GifsContext from "./../context/GifsContext";

export default function useGlobalGifs() {
  const { gifs } = useContext(GifsContext);
  return gifs;
}

//Este custom hook lo que hace es devolver los gifs, es un hook solo de lectura, porque los trae y no hace nada.
