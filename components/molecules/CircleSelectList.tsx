import CircleSelect from '../atoms/CircleSelect'

type ImageProps = {
  image: string
  name: string
}

type Props = {
  items: ImageProps[]
}

const CircleSelectList = (props: Props) => {
  return (
    <ul>
      {props.items.map((v, i) => {
        return (
          <li key={i}>
            <CircleSelect image={v.image} alt={v.name} />
          </li>
        )
      })}
    </ul>
  )
}

export default CircleSelectList
