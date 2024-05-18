import Button from "./Button";
import Image from "next/image";

export default function Card({ imageSrc, title, description, children }) {
  return (
    <div>
      <div className="max-w-xs overflow-hidden border-2 shadow-md rounded-xl border-slate-150">
        <Image
          className="w-full"
          src={imageSrc ? imageSrc : "/a4.png"}
          alt="Card image"
          width={200}
          height={200}
        />
        <div className="px-6 py-4 border-t-2 border-slate-50">
          <div className="mb-2 font-bold text-neutral-700 text-md">
            {title ? title : "Title"}
          </div>
          <p className="text-base font-semibold text-neutral-500">
            {description ? description : "Description"}
          </p>
        </div>
        <div className="py-4 mx-6">
          {children ? children : <Button variant="primary">Button</Button>}
        </div>
      </div>
    </div>
  );
}
