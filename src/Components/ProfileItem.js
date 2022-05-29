import { Logger } from "../Utils/Logger";

const log = new Logger("Profile Item");

export default function ProfileItem({ label, value, isEditable = true, getCount }) {

    let count;
    if (getCount !== undefined)
        count = getCount();
    //log.trace("getCount", getCount);

    return (
        <div className="card-panel hoverable row">
            <div className="col s6">
                <p>{label}</p>
                <div>
                    {value}
                </div>
            </div>
            { isEditable ? 
            <div className="col s6">
                <a className="waves-effect waves-light btn modal-trigger" href={`#modal${count}`}>Edit</a> 
                <div id={`#modal${count}`} className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div> : <></> }
        </div>
    );
}