import { request } from "graphql-request";
import Link from "next/link"




const query = `
{
  categories(first: 10) {
    edges {
      node {
        id
        name
        uri
      }
    }
  }
}
`


export async function getStaticProps() {

  const data = await request('https://wp.behnoud.net/ben', query).then( (res) => {return res} );
const cat = await  data

return {
  props: {cat,}
 
  
}
}




export default  function ben( {cat} ) {

const categories = cat.categories.edges ;



return (

<div>
<h2>Categories list</h2>
   <ol> {categories.map((x) => {return <li key={x.node.id} >{x.node.name}</li>  } )}</ol>
<Link href="/"><a>Return to home</a></Link>

  </div>
)

}