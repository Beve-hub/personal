import './Card.css'


const Card = ({Children, className,onclick}) => {
  return (
   <article className={`card ${className}`} onClick={onclick}>
      {Children}
   </article>
  )
}

export default Card
