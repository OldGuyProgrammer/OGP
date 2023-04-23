const MessageCard = ({ messageObj }) => {

    const { firstName, lastName, email, message } = messageObj;

    const deleteMessage = (msg) => {
        console.log("Delete Message");
    };

    return (
        <div className="flex">
            <li>
                <div className="row">
                    <h2>{firstName} {lastName}</h2>
                    <div className='text-font-roman'>
                        <p>{email}</p>
                        <p>{message}</p>
                    </div>
                    <div className='col-1'>
                        <button type="button" onClick={deleteMessage} className="btn btn-primary" >Delete</button>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default MessageCard;