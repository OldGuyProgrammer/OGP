//
// Old Guy Programmer Web Page
//
// Display Messages
//
// Jim Olivi 2023
//
import { useEffect, useState } from "react";
import MainMenuBar from "../MainMenuBar";
import { doldguy_backend } from "../../../declarations/doldguy_backend/index";
import MessageCard from "../messages/messages";

const DisplayMessages = () => {

    const [messages, setMessages] = useState([]);

    const fetchData = async () => {
        const messages = await doldguy_backend.readMessages();
        setMessages(messages);
    };

    useEffect(() => {
        fetchData();
    }, []); // useEffect will keep running as long as the [empty] array doesn't change

    return (
        <>
            <MainMenuBar />
            <h1>Messages Received</h1>
            <div className=".message-container ">
                <ul>
                    {messages.map((message) => (
                        <MessageCard key={message.timeStamp} messageObj={message} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DisplayMessages;