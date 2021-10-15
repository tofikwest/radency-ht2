import NoteControls from "../ui/NoteControls.js";
import { getCategoryName, getImgName } from "../utils/utils.js";

function ArchiveNote(props) {
  const note = props.item;
  return (
    <div className="row item">
      <div className="col-2 name">
        <img src={"/img/" + getImgName(note.category)} alt="" />
        <p>{note.name}</p>
      </div>
      <div className="col-1">{note.createdAt}</div>
      <div className="col-2 category">{getCategoryName(note.category)}</div>
      <div className="col-4 content">{note.content}</div>
      <div className="col-1">
        {note.dates.reduce((prev, cur) => {
          return prev + " " + cur;
        }, "")}
      </div>
      <NoteControls note={note} inArchive={true}></NoteControls>
    </div>
  );
}

export default ArchiveNote;
