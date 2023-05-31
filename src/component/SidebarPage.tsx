import { useParams } from "react-router-dom";

const SidebarPage = () =>{
    const { sidebarId } = useParams();
    return(
        <div>{sidebarId}</div>
    )
}
export default SidebarPage