import Debug "mo:base/Debug";
import List "mo:base/List";

actor OldGuyCannister {

  Debug.print("OldGuy server starting");

  public type Message = {
    firstName : Text;
    lastName : Text;
    email : Text;
    message : Text;
  };

  var messages : List.List<Message> = List.nil<Message>();

  public func createMessage(
    firstNameTxt : Text,
    lastNameTxt : Text,
    emailTxt : Text,
    messageTxt : Text,
  ) {

    let newMessage : Message = {
      firstName = firstNameTxt;
      lastName = lastNameTxt;
      email = emailTxt;
      message = messageTxt;
    };

    messages := List.push(newMessage, messages);
  };
};
