import React from "react";
import { Link } from "react-router-dom";
const ListItem = ({ item }) => {
  let getTime = (note) =>{
    return new Date(note.updated).toLocaleDateString()
  }
  let getTitle =(note)=>{
    let title=note.body.split('\n')[0]
    if(title.length >45){
      return title.slice(0,45)
    } 
    return title;
  }
  let getContent = (note) => {
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length > 45) {
        return content.slice(0, 45) + '...'
    } else {
        return content
    }
}
  return (
    <Link to={`/note/${item.id}`}>
      <div className="notes-list-item">
      <h3>{getTitle(item)}</h3>
      <p><span>{getTime(item)}</span>{getContent(item)}</p>
      </div>
    </Link>
  );
};

export default ListItem;
