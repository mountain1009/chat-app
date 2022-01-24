import Animal from '~/core/domains/animal'

export default interface IAnimalUseCase {
  handle(id: string): Promise<Animal | null>
}
