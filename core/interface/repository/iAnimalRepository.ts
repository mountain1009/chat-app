import Animal from '~/core/domains/animal'

export default interface IAnimalRepository {
  getAnimals(): Promise<Animal[]>
  findAnimal(id: string): Promise<Animal | null>
}
