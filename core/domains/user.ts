import Animal from '~/core/domains/animal'

export default class User {
  readonly id: string
  readonly email: string | null
  readonly name: string | null
  readonly image: string | null
  readonly Animal: Animal | null

  constructor(
    id: string,
    email: string | null,
    name: string | null,
    image: string | null,
    Animal: Animal | null,
  ) {
    this.id = id
    this.email = email
    this.name = name
    this.image = image
    this.Animal = Animal
  }
}
