// function Message() {
//   return (
//     <div className="message">
//       <h2>Message</h2>
//       <p>This is a message component.</p>
//     </div>
//   );
// }

function Message() {
    const name: string | null = getName();
    if (name === 'Derek')
        return <h1>Hello {name}</h1>;
    else
        return <h1>Hello Stranger</h1>;

}

function getName() {
    return null;
}

export default Message;