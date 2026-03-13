import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershopItem"
import { quickSearchItems } from "./_constants/search"
import BookingItem from "./_components/bookingItem"

const Home = async () => {
  const barbershops = await db.barbershop.findMany()

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Alex</h2>
        <p>Sexta-feira, 10 de outubro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Pesquisar..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchItems.map((item) => (
            <Button key={item.title} className="gap-2" variant="secondary">
              <Image
                src={item.imageUrl}
                width={16}
                height={16}
                alt={item.title}
              />
              {item.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            priority
            alt="Agende com os melhores na wsf Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <BookingItem />

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card className="w-full">
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold"> FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
