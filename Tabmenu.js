export default function Tabmenu({children,command}){
    return (
        <button onClick={command}>{children}</button>
    );
}