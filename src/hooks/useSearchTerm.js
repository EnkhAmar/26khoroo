import { useContext } from "react";
import { SearchTermContext } from "../contexts/SearchTermContext";

const useSearchTerm = () => useContext(SearchTermContext)
export default useSearchTerm