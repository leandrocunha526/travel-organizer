import { Link2 } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="https://www.airbnb.com.br/rooms"
              target="_blank"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              Airbnb
            </a>
          </div>

          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
    </div>
  );
}
