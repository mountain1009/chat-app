type Props = {
  image: string
  alt: string
}

const CircleSelect = (props: Props) => {
  return <img className="" src={props.image} alt={props.alt} />
}

export default CircleSelect
