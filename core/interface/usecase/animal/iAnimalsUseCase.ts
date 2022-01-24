import Animal from '~/core/domains/animal'

export default interface IAnimalUseCase {
  handle(): Promise<Animal[]>
}
