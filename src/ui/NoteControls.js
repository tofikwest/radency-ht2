import React from "react";
import store, {
  noteAdded,
  noteDeleted,
  archiveDeleted,
  archiveAdded,
} from "../redux/store";

class NoteControls extends React.Component {
  constructor(props) {
    super(props);

    this.inArchive = props.inArchive || false;

    this.archiveHandler = this.inArchive
      ? this.handleUnarchive.bind(this)
      : this.handleArchive.bind(this);
    this.deleteHandler = this.inArchive
      ? this.handleDeleteFromArchive.bind(this)
      : this.handleDelete.bind(this);
    this.handleEdit = this.props.onEditClick;
  }

  handleUnarchive(e) {
    const id = this.props.note.id;
    const note = { ...this.props.note };
    store.dispatch(archiveDeleted({ id }));
    store.dispatch(noteAdded({ ...note }));
  }

  handleArchive(e) {
    const id = this.props.note.id;
    const note = { ...this.props.note };
    store.dispatch(
      noteDeleted({
        id,
      })
    );
    store.dispatch(archiveAdded({ ...note }));
  }

  handleDelete(e) {
    const id = this.props.note.id;
    store.dispatch(
      noteDeleted({
        id,
      })
    );
  }

  handleDeleteFromArchive(e) {
    const id = this.props.note.id;
    store.dispatch(
      archiveDeleted({
        id,
      })
    );
  }

  render() {
    return (
      <div className="col-2 controls">
        {this.inArchive || (
          <img src="img/edit.svg" alt="edit" onClick={this.handleEdit} />
        )}
        <img src="img/doc.svg" alt="archive" onClick={this.archiveHandler} />
        <img src="img/delete.svg" alt="delete" onClick={this.deleteHandler} />
      </div>
    );
  }
}

export default NoteControls;
