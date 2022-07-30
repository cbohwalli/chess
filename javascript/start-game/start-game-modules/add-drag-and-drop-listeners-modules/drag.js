export default function drag(e) {
    e.dataTransfer.setData("text", e.target.id);        
}

