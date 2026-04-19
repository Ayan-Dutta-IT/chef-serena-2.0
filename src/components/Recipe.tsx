import ReactMarkdown from "react-markdown"
export default function Recipe(props:any){
    return (
    <section className="suggested-recipe-container">
        <h2>Chef Serena Recommends:</h2>
        <div dangerouslySetInnerHTML={{__html: props.recipe}}></div>
</section>
    )
}