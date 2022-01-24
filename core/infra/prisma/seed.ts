import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const animals = [
    {name: "クジラ", image: "kujira.jpg"},
    {name: "ペンギン", image: "pengin.jpg"},
    {name: "トリ", image: "tori.jpg"}
]

async function main(){
    for (const v of animals) {
        await prisma.animal.upsert({
            where: {name: v.name},
            create: {
                name: v.name,
                image: v.image
            },
            update: {}
        });
    }
}


main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
