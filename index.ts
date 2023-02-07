import { PrismaClient } from '@prisma/client'
import hash from './crypto/hash'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.client.create({
        data: {
          name: 'carlos',
          email: 'carlos@email.com',
          hash: hash('carlos')
        },
      })
      console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })