// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.petugas.createMany({
    data: [
      {
        id_petugas: 1,
        nama: 'Cecep',
        posisi: 'Petugas',
        no_telepon: '081234567890',
      },
      {
        id_petugas: 2,
        nama: 'Dadang',
        posisi: 'Admin',
        no_telepon: '081298765432',
      },
      {
        id_petugas: 3,
        nama: 'Asep',
        posisi: 'Petugas',
        no_telepon: '081312345678',
      },
    ],
  });
  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
