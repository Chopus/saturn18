import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarSection() {
  return (
    <div className="flex flex-col bg-gray-900 h-72 w-full ">
    <div className="flex flex-row mt-4 ml-4 items-center">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <span className="ml-4">Placeholder Text</span>
    </div>
    <div className="flex flex-row mt-4 ml-4 items-center">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <span className="ml-4">Placeholder Text</span>
    </div>
    <div className="flex flex-row mt-4 ml-4 items-center">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <span className="ml-4">Placeholder Text</span>
    </div>
    <div className="flex flex-row mt-4 ml-4 items-center">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <span className="ml-4">Placeholder Text</span>
    </div>
    <div className="flex flex-row mt-4 ml-4 items-center">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <span className="ml-4">Placeholder Text</span>
    </div>
  </div>
  );
}