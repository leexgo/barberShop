import { Badge } from "../_components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../_components/ui/avatar"
import { Card, CardContent } from "./ui/card"

const BookingItem = () => {
  return (
    <>
      <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
        Agendamentos
      </h2>

      <Card className="py-0">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm">Barbearia FSW</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Fevereiro</p>
            <p className="text-2xl">8</p>
            <p className="text-sm">10:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
