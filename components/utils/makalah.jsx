import Image from "next/image";

export default function Makalah() {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-auto">
      <div className="mb-2">
       
      </div>
       <div className="w-20 h-20 sm:w-32 sm:h-32">
          <Image
            src="/makalah.png"
            alt="me"
            width={85}
            height={85}
          />
        </div>
    </div>
  );
}
