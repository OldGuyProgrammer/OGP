import Debug "mo:base/Debug";
import List "mo:base/List";
import Text "mo:base/Text";

actor doldguy_backend {

  public type Message = {
    timeStamp : Text;
    firstName : Text;
    lastName : Text;
    email : Text;
    message : Text;
  };

  var messages : List.List<Message> = List.nil<Message>();

  public func createMessage(
    timeStampTxt : Text,
    firstNameTxt : Text,
    lastNameTxt : Text,
    emailTxt : Text,
    messageTxt : Text,
  ) {

    let newMessage : Message = {
      timeStamp = timeStampTxt;
      firstName = firstNameTxt;
      lastName = lastNameTxt;
      email = emailTxt;
      message = messageTxt;
    };

    Debug.print(debug_show (newMessage));
    messages := List.push(newMessage, messages);
  };

  public query func readMessages() : async [Message] {
    return List.toArray(messages);
  };

  public func deleteMessage(id : Nat) {

  };
};
