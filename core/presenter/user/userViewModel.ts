import Animal from '~/core/domains/animal'

export type UserViewModel = {
  id: string
  email: string
  name: string
  image: string
  animal: Animal | null
}
